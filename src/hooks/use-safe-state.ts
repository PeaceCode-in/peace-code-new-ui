import { useState, useCallback, useRef, useEffect } from "react";

/**
 * useSafeState — A resilient useState replacement
 *
 * Provides two safety features:
 * 1. **Safe defaults**: If the initializer function throws, falls back
 *    to the provided `fallback` value instead of crashing the component.
 * 2. **Unmount protection**: Silently ignores setState calls after the
 *    component has unmounted, preventing "setState on unmounted component"
 *    warnings and potential memory leaks from stale async callbacks.
 *
 * @example
 * // Instead of:
 * const [data, setData] = useState(() => JSON.parse(localStorage.getItem('key')!));
 * // ^ This crashes if localStorage has invalid JSON
 *
 * // Use:
 * const [data, setData] = useSafeState(
 *   () => JSON.parse(localStorage.getItem('key')!),
 *   { fallback: [] }
 * );
 * // ^ Falls back to [] if JSON.parse throws
 */
export function useSafeState<T>(
  initializer: T | (() => T),
  options: { fallback: T }
): [T, (value: T | ((prev: T) => T)) => void] {
  const mountedRef = useRef(true);

  // Safe initialization — catch errors in the initializer function
  const [state, setStateInternal] = useState<T>(() => {
    if (typeof initializer === "function") {
      try {
        return (initializer as () => T)();
      } catch (err) {
        console.warn(
          "[useSafeState] Initializer threw an error, using fallback value:",
          err
        );
        return options.fallback;
      }
    }
    return initializer;
  });

  // Track mount status
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Safe setter — only updates state if the component is still mounted
  const setSafeState = useCallback(
    (value: T | ((prev: T) => T)) => {
      if (mountedRef.current) {
        setStateInternal(value);
      }
    },
    []
  );

  return [state, setSafeState];
}

/**
 * useSafeEffect — A resilient useEffect wrapper
 *
 * Wraps the effect callback in a try/catch so that if the effect
 * throws during setup (e.g., accessing browser APIs that may not
 * exist, parsing bad data, etc.), the component doesn't crash.
 *
 * @example
 * useSafeEffect(() => {
 *   const data = JSON.parse(sessionStorage.getItem('cache')!);
 *   setItems(data.items);  // Could throw if data is null/malformed
 * }, []);
 */
export function useSafeEffect(
  effect: () => void | (() => void),
  deps: React.DependencyList
) {
  useEffect(() => {
    try {
      const cleanup = effect();
      return typeof cleanup === "function" ? cleanup : undefined;
    } catch (err) {
      console.error(
        "[useSafeEffect] Effect threw an error (component is still safe):",
        err
      );
      return undefined;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * useSafeAsync — Safely execute async operations in components
 *
 * Handles the common pattern of fetching data in useEffect with
 * proper error handling, loading states, and unmount protection.
 *
 * @example
 * const { data, error, loading } = useSafeAsync(
 *   () => fetch('/api/data').then(r => r.json()),
 *   { fallback: [] }
 * );
 */
export function useSafeAsync<T>(
  asyncFn: () => Promise<T>,
  options: { fallback: T; deps?: React.DependencyList }
): { data: T; error: string | null; loading: boolean } {
  const [data, setData] = useSafeState<T>(() => options.fallback, {
    fallback: options.fallback,
  });
  const [error, setError] = useSafeState<string | null>(() => null, {
    fallback: null,
  });
  const [loading, setLoading] = useSafeState(() => true, { fallback: false });
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    asyncFn()
      .then((result) => {
        if (!cancelled && mountedRef.current) {
          setData(result);
        }
      })
      .catch((err) => {
        if (!cancelled && mountedRef.current) {
          console.error("[useSafeAsync] Async operation failed:", err);
          setError("Something went wrong. Please try again.");
          setData(options.fallback);
        }
      })
      .finally(() => {
        if (!cancelled && mountedRef.current) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, options.deps ?? []);

  return { data, error, loading };
}
