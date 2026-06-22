// Next.js page component
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Brain,
  Leaf,
  MessagesSquare,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Users,
  Plus,
  Play,
  Instagram,
  Twitter,
  Linkedin,
  Menu,
  X,
  Wind,
  Clock,
  Heart,
  ClipboardCheck,
  Stethoscope,
  CloudLightning,
  BatteryLow,
  CloudOff,
  Cloud,
  Sun,
  Mail,
} from "lucide-react";
import Testimonials from "../components/ui/testimonials";
const babaCrane1 = "/assets/baba-crane-1.svg";
const babaCrane2 = "/assets/baba-crane-2.svg";
const craneFlockA = "/assets/crane-flock-a.svg";
const craneFlockB = "/assets/crane-flock-b.svg";
const smallCloud = "/assets/small-cloud.svg";
const branchLarge = "/assets/branch-large.svg";
const footerCampus = "/assets/footer-campus-dissolve-wide.png";
const heroStudent = "/assets/hero-student.svg";
const craneAccent1 = "/assets/crane-accent-1.png";
const craneAccent2 = "/assets/crane-accent-2.png";

/* ───────── AVIF Cloud / Blob illustrations from /public ───────── */
const avifCloud1 = "/Untitled design (64).svg";
const avifCloud2 = "/Untitled design (63).svg";
const avifCloud3 = "/Untitled design (42).svg";

/**
 * Edge-bleed parallax illustration using the AVIF files.
 * The image physically bleeds off the viewport edge by negative positioning.
 * Wrapping parent MUST have overflow-x-hidden at the root level (main does).
 */
function AvifBleed({
  src,
  side,
  top,
  width = "50vw",
  maxWidth = 520,
  nudgeOut = "18%",
  rotate = 0,
  flipX = false,
  flipY = false,
  opacity = 0.82,
  yRange = [0, -60] as [number, number],
  zIndex = 0,
}: {
  src: string;
  side: "left" | "right";
  top: string;
  width?: string;
  maxWidth?: number;
  nudgeOut?: string;
  rotate?: number;
  flipX?: boolean;
  flipY?: boolean;
  opacity?: number;
  yRange?: [number, number];
  zIndex?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    setTarget(ref.current);
  }, []);

  const { scrollYProgress } = useScroll({
    target: target ? { current: target } : undefined,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  const scaleX = flipX ? -1 : 1;
  const scaleY = flipY ? -1 : 1;

  const posStyle: React.CSSProperties =
    side === "right" ? { right: `-${nudgeOut}` } : { left: `-${nudgeOut}` };

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none select-none absolute hidden md:block"
      style={{
        ...posStyle,
        top,
        width,
        maxWidth,
        y,
        rotate: `${rotate}deg`,
        scaleX,
        scaleY,
        opacity,
        zIndex,
      }}
    >
      <img src={src} alt="" className="w-full h-auto" loading="lazy" />
    </motion.div>
  );
}

/* ───────── CRANE FLOCK ───────── */
/** Grouped cranes forming a loose V at a section transition.
 *  side="left" or "right" anchors the flock; size controls overall scale. */
function CraneFlock({
  side = "right",
  className = "",
  birds,
}: {
  side?: "left" | "right";
  className?: string;
  birds: {
    src: string;
    top: string;
    off: string;
    w: string;
    dur: number;
    delay?: number;
    blur?: boolean;
    opacity?: number;
  }[];
}) {
  const anchor = side === "left" ? "left-0" : "right-0";
  return (
    <div aria-hidden className={`decor-crane select-none ${anchor} ${className}`}>
      <div className="relative w-[60vw] max-w-[640px] h-full">
        {birds.map((b, i) => (
          <motion.img
            key={i}
            src={b.src}
            alt=""
            animate={{ y: [-6, 6, -6], x: [0, side === "left" ? 8 : -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: b.dur,
              ease: "easeInOut",
              delay: b.delay ?? 0,
            }}
            style={{
              top: b.top,
              [side === "left" ? "left" : "right"]: b.off,
              opacity: b.opacity ?? 0.95,
            }}
            className={`absolute ${b.w} ${b.blur ? "blur-[1px]" : ""} drop-shadow-[0_10px_18px_rgba(20,18,60,0.18)]`}
          />
        ))}
      </div>
    </div>
  );
}

/* ───────── MARGIN ACCENT CRANES ───────── */
function MarginCrane({
  src,
  top,
  side,
  offset,
  size = 40,
  rotate = 0,
  dur = 6,
  delay = 0,
}: {
  src: string;
  top: string | number;
  side: "left" | "right";
  offset: string | number;
  size?: number;
  rotate?: number;
  dur?: number;
  delay?: number;
}) {
  const isRight = side === "right";
  const baseTransform = isRight ? "scaleX(-1)" : "";

  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden
      className="absolute pointer-events-none select-none z-10 hidden xl:block"
      style={{
        top,
        [side]: offset,
        width: size,
        height: "auto",
        opacity: 0.7,
      }}
      animate={{
        y: [-6, 6, -6],
        rotate: [rotate - 3, rotate + 3, rotate - 3],
        transform: [
          `${baseTransform} rotate(${rotate - 3}deg)`,
          `${baseTransform} rotate(${rotate + 3}deg)`,
          `${baseTransform} rotate(${rotate - 3}deg)`,
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: dur,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/* ───────── DECORATIVE INLINE SVGs (flock + branch silhouettes) ───────── */

function CranesSilhouette({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 400 240" className={className} fill={color}>
      <path
        d="M30,140 Q90,90 170,110 L195,75 L205,70 L210,82 L195,115 Q280,118 360,90 Q340,140 250,160 Q160,180 80,170 Q50,165 30,140 Z"
        opacity="0.95"
      />
      <path
        d="M40,200 Q70,170 130,180 L150,158 L160,156 L162,166 L150,184 Q200,184 250,170 Q235,205 175,215 Q110,222 65,212 Q48,210 40,200 Z"
        opacity="0.55"
        transform="translate(-10,-20) scale(0.65)"
      />
      <path
        d="M30,140 Q90,90 170,110 L195,75 L205,70 L210,82 L195,115 Q280,118 360,90 Q340,140 250,160 Q160,180 80,170 Q50,165 30,140 Z"
        opacity="0.4"
        transform="translate(60,-50) scale(0.42)"
      />
    </svg>
  );
}

function BranchSilhouette({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 320 480" className={className}>
      <path
        d="M160,480 Q145,360 162,240 Q178,140 152,40 Q148,15 160,0"
        stroke={color}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <g fill={color}>
        <ellipse cx="118" cy="395" rx="44" ry="14" transform="rotate(-35 118 395)" />
        <ellipse cx="210" cy="335" rx="44" ry="14" transform="rotate(35 210 335)" />
        <ellipse cx="110" cy="260" rx="42" ry="13" transform="rotate(-42 110 260)" />
        <ellipse cx="215" cy="185" rx="42" ry="13" transform="rotate(45 215 185)" />
        <ellipse cx="125" cy="115" rx="38" ry="12" transform="rotate(-30 125 115)" />
        <ellipse cx="200" cy="55" rx="36" ry="11" transform="rotate(40 200 55)" />
      </g>
    </svg>
  );
}

/** Large decorative element clipped 50–60% off the viewport edge. */
function SideDecor({
  side,
  type,
  color,
  rotate = 0,
  top = "20%",
}: {
  side: "left" | "right";
  type: "crane" | "branch";
  color: string;
  rotate?: number;
  top?: string;
  size?: number; // Kept for prop compatibility
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    setTarget(ref.current);
  }, []);

  const { scrollYProgress } = useScroll({
    target: target ? { current: target } : undefined,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const positionClass =
    side === "right"
      ? "absolute -right-[10%] w-[40vw] max-w-lg z-0 pointer-events-none"
      : "absolute -left-[10%] w-[40vw] max-w-lg z-0 pointer-events-none";

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={`${positionClass} hidden md:block`}
      style={{
        top,
        y,
        rotate: `${rotate}deg`,
      }}
    >
      {type === "crane" ? (
        <CranesSilhouette color={color} className="w-full h-auto" />
      ) : (
        <BranchSilhouette color={color} className="w-full h-auto" />
      )}
    </motion.div>
  );
}

/* ───────── tokens ───────── */

const COLOR = {
  lavender: "#98A6D4",
  peach: "#EAEBFC", // Changed to a very soft lavender
  sage: "#D4E2D7",
};

/* ───────── shared bits ───────── */

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as any },
};

function Float({
  children,
  duration = 10,
  y = 18,
  delay = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  y?: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -y, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Liquid-glass surface.
 * surface="color" → translucent glass for colored backgrounds (lavender, peach, sage)
 * surface="white" → solid white card with soft shadow for white backgrounds
 */
function GlassCard({
  children,
  className = "",
  surface = "color",
}: {
  children: React.ReactNode;
  className?: string;
  surface?: "color" | "white";
}) {
  const base =
    surface === "white"
      ? "bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-white/60"
      : "bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]";
  return (
    <div className={`relative rounded-3xl text-slate-900 ${base} ${className}`}>
      {surface === "white" && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      )}
      {children}
    </div>
  );
}

/** Magnetic primary button — scale + shadow on hover. */
function MagneticButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`liquid-glass-button inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium tracking-wide transition-all text-slate-900 ${className}`}
    >
      {children}
    </motion.button>
  );
}

/** Image placeholder — user manages uploads manually; hidden until provided. */
function ImageBox(_props: {
  prompt: string;
  ratio?: string;
  className?: string;
  surface?: "color" | "white";
}) {
  return null;
}

/* ───────── BRIDGES (flat-bottom cloud canopy between sections) ───────── */

/** A wide soft cloud canopy that hides the seam between two sections.
 *  fill = color of the section the canopy is emerging FROM.
 *  Place at the top of the receiving section. */
function CloudBridge({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-0 right-0 w-full ${flip ? "bottom-full" : "-top-px"
        }`}
      style={{ height: 80 }}
    >
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full block">
        <path
          d="M0,80 L0,40 C120,10 200,55 320,40 C440,25 520,5 640,18 C760,30 840,55 960,42 C1080,30 1180,8 1300,22 C1380,32 1420,50 1440,40 L1440,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/* ───────── NAV ───────── */

type DropdownCol = {
  header?: string;
  items: { label: string; href: string }[];
};

type NavDropdownData = {
  label: string;
  href: string;
  dropdown?: {
    columns: DropdownCol[];
  };
};

const navItemsData: NavDropdownData[] = [
  {
    label: "Announcements",
    href: "/announcements",
    dropdown: {
      columns: [
        {
          items: [
            { label: "Blog", href: "/blog" },
            { label: "Announcements", href: "/announcements" },
          ],
        },
      ],
    },
  },
  {
    label: "About Us",
    href: "#about",
    dropdown: {
      columns: [
        {
          header: "ABOUT PEACE CODE",
          items: [
            { label: "About Peace Code", href: "#about" },
            { label: "Our Team", href: "#team" },
            { label: "Careers", href: "/careers" },
            { label: "Media", href: "#media" },
            { label: "Contact", href: "/contact" },
            { label: "FAQs", href: "/faq" },
          ],
        },
      ],
    },
  },
  {
    label: "Services",
    href: "#services",
    dropdown: {
      columns: [
        {
          header: "CORE CARE",
          items: [
            { label: "PeaceBot", href: "/peacebot" },
            { label: "Peace Buddies", href: "/peace-buddies" },
            { label: "Counseling", href: "/psychologist" },
            { label: "Screening", href: "/screening" },
          ],
        },
        {
          header: "WELLNESS TOOLS",
          items: [
            { label: "Breathe", href: "/breathe" },
            { label: "Focus", href: "/focus" },
            { label: "Journal", href: "/journal" },
            { label: "Gratitude", href: "/gratitude" },
            { label: "Community", href: "/community" },
          ],
        },
      ],
    },
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

function NavItem({ item, scrolled }: { item: NavDropdownData; scrolled: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={item.href}
        className={`relative px-5 py-2.5 rounded-full transition-all duration-500 font-medium inline-block tracking-wide ${hovered
            ? "bg-[#E2D9FF] text-slate-900 drop-shadow-none"
            : scrolled
              ? "text-slate-900 hover:text-slate-600 drop-shadow-none"
              : "text-white hover:text-white/80"
          }`}
      >
        {item.label}
      </Link>

      <AnimatePresence>
        {hovered && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as any }}
            className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] bg-white/95 backdrop-blur-2xl border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-[1.5rem] p-7 flex gap-10 before:absolute before:inset-x-0 before:-top-6 before:h-6 before:bg-transparent"
          >
            {item.dropdown.columns.map((col, i) => (
              <div key={i} className="flex flex-col min-w-[140px]">
                {col.header && (
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4 drop-shadow-none text-slate-500 transition-colors duration-500">
                    {col.header}
                  </span>
                )}
                <div className="flex flex-col gap-3.5">
                  {col.items.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="text-[15px] font-medium transition-colors duration-500 whitespace-nowrap drop-shadow-none text-slate-800 hover:text-[#1E3A8A]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ item, setOpen }: { item: NavDropdownData, setOpen: (v: boolean) => void }) {
  const [expanded, setExpanded] = useState(false);
  const hasDropdown = !!item.dropdown;

  if (!hasDropdown) {
    return (
      <Link
        href={item.href}
        onClick={() => setOpen(false)}
        className="py-2 text-base font-medium hover:text-slate-700 transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setExpanded(!expanded)}
        className="py-2 text-base font-medium flex justify-between items-center hover:text-slate-700 transition-colors"
      >
        {item.label}
        <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden flex flex-col"
      >
        <div className="py-2 flex flex-col gap-4 border-l-2 border-slate-200 pl-4 mt-1 mb-2 ml-1">
          {item.dropdown?.columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-2.5">
              {col.header && (
                <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400">
                  {col.header}
                </span>
              )}
              {col.items.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  onClick={() => setOpen(false)}
                  className="text-[14px] text-slate-600 hover:text-slate-900 py-0.5 font-medium transition-colors"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(false);
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  const scrolled = isMainPage ? scrollPos : true;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
      className={`fixed inset-x-0 z-50 transition-all duration-500 flex flex-col items-stretch ${scrolled ? "top-4 px-4 md:px-8" : "top-0 px-0"
        }`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${scrolled
            ? "w-full max-w-[1600px] bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(255,255,255,0.15)] py-4 px-8 md:px-12 rounded-[2rem]"
            : "w-full max-w-[1400px] bg-transparent py-5 px-8 md:px-12 lg:px-16 rounded-none border-transparent"
          }`}
      >
        <motion.div layout>
          <Link href="/" className="flex items-center group shrink-0">
            <img src="/nav bar logo.svg" alt="PeaceCode" fetchPriority="high" decoding="sync" className={`h-7 w-auto object-contain transition-all duration-500 ${scrolled ? "brightness-0" : "drop-shadow-sm"}`} />
          </Link>
        </motion.div>

        <motion.nav layout className="hidden md:flex items-center gap-2 lg:gap-4 text-[15px] transition-colors duration-500">
          {navItemsData.map((item) => (
            <NavItem key={item.href} item={item} scrolled={scrolled} />
          ))}
        </motion.nav>

        <motion.div layout className="flex items-center shrink-0">
          <a href="/dashboard/login" className={`hidden sm:inline-flex items-center rounded-full px-6 py-2.5 text-[14px] font-medium transition-all duration-500 ${scrolled ? "bg-slate-900 text-white shadow-sm hover:bg-slate-800" : "bg-white text-slate-900 hover:bg-white/90 shadow-sm"}`}>
            Log In
          </a>

          <a href="/dashboard/login" className={`sm:hidden inline-flex items-center rounded-full px-5 py-2 text-[14px] font-medium transition-all duration-500 mr-2 ${scrolled ? "bg-slate-900 text-white shadow-sm hover:bg-slate-800" : "bg-white text-slate-900 shadow-sm"}`}>
            Log In
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-500 ${scrolled ? "text-slate-900" : "text-white"}`}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile dropdown */}
      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as any }}
        className="md:hidden overflow-hidden bg-white/85 backdrop-blur-xl border border-white/40 mt-2 mx-auto w-full max-w-[1400px] rounded-2xl shadow-lg"
      >
        <div className="px-6 py-5 flex flex-col gap-3 text-slate-900">
          {navItemsData.map((item) => (
            <MobileNavItem key={item.href} item={item} setOpen={setOpen} />
          ))}
          <a href="/dashboard/login" className="sm:hidden text-center rounded-full px-5 py-2.5 text-sm font-medium mt-3 self-start bg-slate-900 text-white shadow-sm w-full block">
            Log In
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

/* ───────── HERO ───────── */

function HeroAtmosphere() {
  return (
    <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0">
      {/* Subtle grain overlay only — background image is on the wrapper div */}
      <div className="grain-overlay absolute inset-0 opacity-[0.08] mix-blend-overlay" />
    </div>
  );
}

function Hero({ isBgLoaded = true }: { isBgLoaded?: boolean }) {
  return (
    <section
      className="relative w-full min-h-[100vh] flex flex-col justify-center items-center"
    >
      {/* ── Birds in diagonal formation (upper-right to lower-left, like baba) ── */}

      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={isBgLoaded ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.1 }}
        className="absolute inset-0 pointer-events-none z-[5]"
      >
        {/* Bird 1 — top right (intersecting nav) */}
        <motion.div
          animate={{ y: [-4, 6, -4], x: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.2 }}
          className="absolute z-[5] pointer-events-none select-none"
          style={{ top: "-2%", right: "15%" }}
        >
          <img
            src="/Untitled design (68).svg"
            alt=""
            fetchPriority="high"
            decoding="sync"
            style={{
              width: "clamp(130px, 14vw, 180px)",
              filter: "drop-shadow(0 6px 12px rgba(30,30,60,0.10))",
            }}
          />
        </motion.div>

        {/* Bird 2 — upper right */}
        <motion.div
          animate={{ y: [-3, 5, -3], x: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 8.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute z-[5] pointer-events-none select-none"
          style={{ top: "25%", right: "4%" }}
        >
          <img
            src="/Untitled design (68).svg"
            alt=""
            fetchPriority="high"
            decoding="sync"
            style={{
              width: "clamp(180px, 18vw, 240px)",
              filter: "drop-shadow(0 6px 12px rgba(30,30,60,0.10))",
            }}
          />
        </motion.div>

        {/* Bird 3 — mid-lower right */}
        <motion.div
          animate={{ y: [-5, 4, -5], x: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1.0 }}
          className="absolute z-[5] pointer-events-none select-none"
          style={{ top: "58%", right: "12%" }}
        >
          <img
            src="/Untitled design (68).svg"
            alt=""
            fetchPriority="high"
            decoding="sync"
            style={{
              width: "clamp(180px, 18vw, 240px)",
              filter: "drop-shadow(0 6px 12px rgba(30,30,60,0.10))",
            }}
          />
        </motion.div>

        {/* Bird 4 — bottom center-right */}
        <motion.div
          animate={{ y: [-3, 6, -3], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1.5 }}
          className="absolute z-[5] pointer-events-none select-none"
          style={{ top: "70%", right: "32%" }}
        >
          <img
            src="/Untitled design (67).svg"
            alt=""
            fetchPriority="high"
            decoding="sync"
            style={{
              width: "clamp(180px, 18vw, 240px)",
              filter: "drop-shadow(0 6px 12px rgba(30,30,60,0.10))",
            }}
          />
        </motion.div>

        {/* Bird 5 — bottom left */}
        <motion.div
          animate={{ y: [-4, 3, -4], x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.8 }}
          className="absolute z-[5] pointer-events-none select-none"
          style={{ top: "75%", left: "12%" }}
        >
          <img
            src="/Untitled design (68).svg"
            alt=""
            fetchPriority="high"
            decoding="sync"
            style={{
              width: "clamp(180px, 18vw, 240px)",
              filter: "drop-shadow(0 6px 12px rgba(30,30,60,0.10))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Text content — centered like baba.health ── */}
      <div className="relative z-[6] w-full max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isBgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.7 }}
          className="tracking-[0.2em] text-xs font-semibold text-white/65 mb-6 uppercase"
        >
          For students, by students
        </motion.p>
        <motion.h1
          initial="hidden"
          animate={isBgLoaded ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="font-serif font-normal tracking-tight leading-[1.08] text-white text-4xl sm:text-[3.5rem] md:text-[4rem] lg:text-[4.8rem]"
        >
          {[
            { w: "Find your peace", br: true },
            { w: "with ", br: false },
            { w: "PeaceCode.", br: false, italic: true },
          ].map(({ w, br, italic }, i) => (
            <span key={i} className="inline-block align-bottom">
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 120, damping: 18 },
                  },
                }}
                className={`inline-block ${italic ? "font-display italic" : ""} mr-[0.22em]`}
              >
                {w}
              </motion.span>
              {br && <br />}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isBgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] as any }}
          className="mt-6 text-white/90 text-[16px] sm:text-[17px] leading-[1.5] max-w-md mx-auto font-normal drop-shadow-sm"
        >
          Imagine a quiet companion guiding you through it —<br />
          <em className="font-display italic text-white/90 text-[17px] sm:text-[18px]">free for students.</em>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isBgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link href="/psychologist" className="group inline-flex items-center gap-3 rounded-[18px] border border-transparent bg-white px-8 py-4 sm:px-10 sm:py-4 transition-all duration-300 hover:shadow-lg shadow-sm hover:-translate-y-0.5">
            <span className="text-[17px] sm:text-[18px] font-medium text-slate-900 tracking-tight">
              Match with an expert
            </span>
            <span className="inline-flex items-center justify-center bg-transparent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              <img src="/nav bar logo.svg" alt="PeaceCode" className="w-[18px] h-[18px] object-contain brightness-0" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── COLLABORATION LOGOS ───────── */

function Collaboration() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Translates left by 160px as user scrolls down, revealing ~70% of the 704px image
  const slideInX = useTransform(scrollYProgress, [0, 1], ["0px", "-160px"]);

  return (
    <section
      ref={ref}
      className="relative w-full pt-[180px] pb-16 md:pt-[350px] lg:pt-[450px] md:pb-20 px-6 md:px-10 flex flex-col items-center justify-center overflow-visible"
      style={{ zIndex: 5 }}
    >
      {/* Scroll-animated right-edge image as per Builder layout */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none select-none z-0 hidden md:block"
        style={{
          width: "704px",
          bottom: "-18px",
          right: "-376px",
          x: slideInX,
        }}
      >
        <img
          src="/Untitled design (64).svg"
          alt=""
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Centered text */}
      <h3 className="font-sans text-[18px] md:text-[20px] text-[#333333] font-normal mb-8 text-center relative z-10">
        In collaboration with
      </h3>

      {/* Logos Row */}
      <div className="flex flex-wrap items-center justify-center max-w-5xl w-full relative z-10">
        <img
          src="/assets/dtu.svg"
          alt="DTU"
          className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </section>
  );
}

/* ───────── HOW IT WORKS (image cards) ───────── */

const howStepImg1 = "/assets/how-step-01-safe-space.jpg";
const howStepImg2 = "/assets/how-step-02-peer-support.jpg";
const howStepImg3 = "/assets/how-step-03-progress.jpg";

function HowItWorks() {
  const steps = [
    {
      n: "01",
      img: howStepImg1,
      title: "Tell us how you feel",
      desc: "A private check-in designed for students. No forms, no pressure, and no need to have the right words. Start wherever you are.",
      micro: "Anonymous from the first moment.",
      alt: "Student sitting peacefully under a tree, journaling in golden hour light",
    },
    {
      n: "02",
      img: howStepImg2,
      title: "Find your people",
      desc: "Discover spaces where students listen, share, and support one another. Sometimes the biggest relief is realizing you are not the only one feeling this way.",
      micro: "Connection changes everything.",
      alt: "Three students sitting together on campus grass, talking and supporting each other",
    },
    {
      n: "03",
      img: howStepImg3,
      title: "Move forward gently",
      desc: "Build small habits of reflection, celebrate quiet progress, and receive support at your own pace. Growth does not need to be rushed.",
      micro: "Every small step counts.",
      alt: "Student walking through a sunlit campus path with a notebook, looking hopeful",
    },
  ];

  return (
    <section
      className="relative pt-8 pb-28 md:pt-10 md:pb-32 px-6 md:px-10 overflow-visible"
      style={{
        backgroundImage: "url('/section3-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div {...reveal} className="relative z-20 mx-auto max-w-6xl -mt-16 md:-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-[44px] text-[#333333] font-normal tracking-tight leading-[1.2]">
            How PeaceCode <span className="font-display italic text-[#3c5e8b]">works</span>
          </h2>
          <p className="mt-4 font-sans text-[#333333] text-[16px] md:text-[18px]">
            Your advocate will do whatever it takes to get you the care you deserve.
          </p>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1] as any,
              }}
            >
              <div className="how-card" style={{ aspectRatio: "4 / 5" }}>
                <img src={s.img} alt={s.alt} loading="lazy" draggable={false} />

                {/* Text overlay */}
                <div className="how-card-content">
                  {/* Top: Step number */}
                  <div>
                    <span className="how-card-step">Step {s.n}</span>
                  </div>

                  {/* Bottom: Headline + Description */}
                  <div>
                    <h3 className="how-card-headline">{s.title}</h3>
                    <p className="how-card-desc">{s.desc}</p>
                    <p className="how-card-micro">{s.micro}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const moodData = [
  {
    icon: CloudLightning,
    label: "Overwhelmed",
    question: "Too much noise?",
    color: "rgba(255, 150, 150, 0.15)", // Very soft, transparent red
    heading: "It's okay to feel overwhelmed.",
    subheading: "Everything feels like too much right now. Let's just take the next tiny step.",
    cards: [
      { icon: Wind, title: "60-Second Grounding", text: "Box-breathing to slow your heart rate.", href: "/breathe" },
      { icon: MessagesSquare, title: "Emergency Vent", text: "Talk to Peace Bot. No judgment, just listening.", href: "/peacebot" },
      { icon: Users, title: "Peer Support", text: "Read stories from students feeling the exact same way.", href: "/community" }
    ]
  },
  {
    icon: BatteryLow,
    label: "Exhausted",
    question: "Running on empty?",
    color: "rgba(150, 200, 255, 0.15)", // Soft blue
    heading: "Running on empty.",
    subheading: "You've been pushing too hard. It's time to let yourself rest.",
    cards: [
      { icon: Heart, title: "Low-Energy Reset", text: "A 3-minute guided rest. You don't have to do anything.", href: "/breathe" },
      { icon: Leaf, title: "Gentle Journaling", text: "Drop one sentence about today. No pressure.", href: "/journal" },
      { icon: Clock, title: "Schedule a Break", text: "Lock your apps for 30 minutes and just breathe.", href: "/focus" }
    ]
  },
  {
    icon: CloudOff,
    label: "Numb",
    question: "Feeling disconnected?",
    color: "rgba(220, 180, 255, 0.15)", // Soft purple
    heading: "Just... existing.",
    subheading: "Feeling disconnected or unmotivated. Let's find a tiny spark.",
    cards: [
      { icon: ClipboardCheck, title: "Tiny Check-in", text: "A 2-minute assessment to see where you're at.", href: "/screening" },
      { icon: Brain, title: "Brain Dump", text: "Write out whatever is floating in your head.", href: "/journal" },
      { icon: Heart, title: "Gratitude Wall", text: "Read small wins from other students to feel connected.", href: "/gratitude" }
    ]
  },
  {
    icon: Cloud,
    label: "Okay",
    question: "Just floating by?",
    color: "rgba(180, 230, 180, 0.15)", // Soft green
    heading: "Doing alright.",
    subheading: "You're managing. Let's keep the balance.",
    cards: [
      { icon: Clock, title: "Focus Timer", text: "Get into deep work with gentle Pomodoro intervals.", href: "/focus" },
      { icon: Leaf, title: "Daily Reflection", text: "Log what's working well for you today.", href: "/journal" },
      { icon: Brain, title: "Mindful Prep", text: "Prepare for your next lecture with a clear head.", href: "/psychologist" }
    ]
  },
  {
    icon: Sun,
    label: "Good",
    question: "Catching rays?",
    color: "rgba(255, 215, 140, 0.15)", // Soft gold
    heading: "Riding the wave.",
    subheading: "You've got this. Let's capture this energy.",
    cards: [
      { icon: Heart, title: "Record a Win", text: "Post on the Gratitude Wall to lift others up.", href: "/gratitude" },
      { icon: Users, title: "Support a Peer", text: "Hop into a community room and spread some light.", href: "/community" },
      { icon: Clock, title: "Flow State", text: "Use the focus timer to crush your hardest task.", href: "/focus" }
    ]
  }
];

function MoodGate() {
  const [activeMood, setActiveMood] = useState<number | null>(null);
  const [hoveredMood, setHoveredMood] = useState<number | null>(null);
  const current = activeMood !== null ? moodData[activeMood] : null;

  return (
    <section id="mood" className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden transition-colors duration-1000">
      {/* 
        Dynamic Background Glow
        Instead of a full inset radial gradient which clashes with borders, 
        we use a massively blurred div placed centrally so its edges naturally feather to transparent. 
      */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] blur-[140px] rounded-full pointer-events-none z-0"
        animate={{
          backgroundColor: current ? current.color : "rgba(243,244,246,0.4)"
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Decorative Right Branch */}
      <AvifBleed
        src={branchLarge}
        side="right"
        top="15%"
        width="35vw"
        maxWidth={400}
        nudgeOut="12%"
        opacity={0.8}
        rotate={10}
        flipX
        yRange={[0, -60]}
      />

      <div className="relative z-20 mx-auto max-w-6xl text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-slate-500 font-semibold mb-12">The mood gate</p>

        {/* Interactive Minimalist Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-20">
          {moodData.map((m, i) => {
            const isActive = activeMood === i;
            const isHovered = hoveredMood === i;
            const Icon = m.icon;

            return (
              <div
                key={m.label}
                className="relative"
                onMouseEnter={() => setHoveredMood(i)}
                onMouseLeave={() => setHoveredMood(null)}
              >
                {/* Cloud Tooltip */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.9 }}
                      animate={{ opacity: 1, y: -6, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-4 py-2 z-30 pointer-events-none"
                      style={{ borderRadius: "1.25rem" }}
                    >
                      <span className="text-[13px] font-medium font-serif text-slate-700 italic tracking-wide">{m.question}</span>
                      <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white/90 border-b border-r border-slate-100 rotate-45 backdrop-blur-xl" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  onClick={() => setActiveMood(i)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    y: isActive ? -4 : 0,
                    backgroundColor: isActive ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.4)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md shadow-sm border ${isActive ? 'border-[#8B98C6] shadow-md shadow-[#8B98C6]/10' : 'border-slate-200/60'} transition-all duration-300`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#6B7CBB]' : 'text-slate-400'} transition-colors duration-300`} strokeWidth={isActive ? 2 : 1.5} />
                  <span className={`text-[15px] font-serif tracking-wide ${isActive ? 'text-slate-900 font-medium' : 'text-slate-500 font-light'} transition-colors duration-300`}>
                    {m.label}
                  </span>
                </motion.button>
              </div>
            );
          })}
        </div>

        <div className="min-h-[460px]">
          <AnimatePresence mode="wait">
            {!current ? (
              <motion.div
                key="default"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 font-light leading-[1.05] tracking-tight mt-4">
                  What feels heavy <span className="font-display italic text-slate-500">today?</span>
                </h2>
                <p className="mt-6 text-slate-600 max-w-xl mx-auto font-light leading-relaxed text-[17px]">
                  No diagnosis. No forms. Pick the feeling that matches this minute — you can change your mind whenever.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={current.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 font-light leading-[1.05] tracking-tight mt-4">
                  {current.heading.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="font-display italic text-slate-500">{current.heading.split(' ').pop()}</span>
                </h2>
                <p className="mt-6 text-slate-600 max-w-xl mx-auto font-light leading-relaxed text-[17px]">
                  {current.subheading}
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {current.cards.map((c, i) => (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + i * 0.1, type: "spring", damping: 25 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="w-full h-full"
                    >
                      <Link href={c.href} className="text-left rounded-3xl w-full h-full group block">
                        <GlassCard
                          surface="white"
                          className="p-8 h-full border border-slate-100 hover:border-slate-200 transition-colors duration-500 shadow-sm flex flex-col relative overflow-hidden"
                        >
                          {/* Soft hover glow behind icon inside card */}
                          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8B98C6]/5 blur-3xl rounded-full group-hover:bg-[#8B98C6]/10 transition-colors duration-700 pointer-events-none" />

                          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100/60 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <c.icon className="w-5 h-5 text-slate-600 group-hover:text-[#6B7CBB] transition-colors duration-300" strokeWidth={1.5} />
                          </div>
                          <h3 className="font-serif text-xl text-slate-900 font-medium tracking-tight mb-3">
                            {c.title}
                          </h3>
                          <p className="text-[14px] text-slate-500 leading-relaxed font-light flex-1">
                            {c.text}
                          </p>
                          <div className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-400 group-hover:text-[#6B7CBB] transition-colors duration-300">
                            Try this <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </GlassCard>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ───────── WHAT'S ON YOUR MIND ACCORDION ───────── */

function MindAccordion() {
  const items = [
    {
      t: "Academic Burnout & Exam Stress",
      d: "Guided 5-minute reset rituals, pomodoro breathing, and late-night peer rooms specifically for students mid-finals. You don't have to power through alone.",
    },
    {
      t: "Social Anxiety & Campus Isolation",
      d: "Anonymous text-first rooms make the first hello easy. Match with peers who get the dining-hall dread and the empty-weekend ache.",
    },
    {
      t: "Imposter Syndrome in Competitive Majors",
      d: "Honest journaling prompts, founder/senior stories, and 1:1 chats with mentors who've sat in the same lecture halls and survived.",
    },
    {
      t: "Navigating Difficult Conversations",
      d: "Practice the talk with a professor, a parent, a roommate. Scripts, role-play, and gentle feedback — built for the conversations that keep you up.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);

  const refCloud = useRef<HTMLDivElement>(null);
  const [targetCloud, setTargetCloud] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    setTargetCloud(refCloud.current);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetCloud ? { current: targetCloud } : undefined,
    offset: ["start end", "end start"],
  });
  const xCloud = useTransform(scrollYProgress, [0, 1], ["0vw", "22vw"]);
  const yCloud = useTransform(scrollYProgress, [0, 1], [-80, 40]);

  return (
    <section id="mind" className="relative py-28 md:py-32 px-6 md:px-10 overflow-visible">
      {/* Decorative Left Branch */}
      <AvifBleed
        src={branchLarge}
        side="left"
        top="25%"
        width="40vw"
        maxWidth={450}
        nudgeOut="18%"
        opacity={0.7}
        rotate={-15}
        yRange={[0, -80]}
      />

      {/* Decorative Left Cloud — inserts into left edge, slides out on scroll, no back edge visible */}
      <motion.div
        ref={refCloud}
        aria-hidden
        className="pointer-events-none select-none absolute hidden md:block"
        style={{
          left: "-26vw",
          top: "-120px",
          width: "56vw",
          maxWidth: 750,
          x: xCloud,
          y: yCloud,
          opacity: 0.85,
          zIndex: 10,
        }}
      >
        <img
          src="/Untitled design (41).svg"
          alt=""
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </motion.div>

      <motion.div {...reveal} className="relative z-20 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600 mb-5">
            What's on your mind?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 font-light tracking-tight leading-[1.1]">
            The hard parts of college —{" "}
            <span className="font-display italic">and how we help.</span>
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-7 text-left group gap-6"
                >
                  <span className="font-serif text-xl md:text-3xl text-slate-900 font-light tracking-tight">
                    {it.t}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="liquid-glass-icon w-10 h-10 rounded-full flex items-center justify-center transition shrink-0"
                  >
                    <Plus className="w-4 h-4 text-slate-900" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as any }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 max-w-2xl text-slate-700 font-light leading-relaxed">
                        {it.d}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

/* ───────── FEATURE HIGHLIGHT (Editorial spread, 58/42 liquid glass card + side bleed illustrations) ───────── */

function FeatureHighlight() {
  const subtleReveal = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as any },
  };

  return (
    <section
      className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, #93A8C1 0%, #F4F6F8 100%)" }}
    >
      {/* Left Bleed Illustration (SVG) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 hidden xl:block w-[30vw] max-w-[420px] mix-blend-multiply opacity-90">
        <img
          src="/Untitled design (40).svg"
          alt=""
          className="w-full h-auto object-contain object-left scale-[1.35] origin-left"
        />
      </div>

      {/* Right Bleed Illustration (AVIF) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 hidden xl:block w-[30vw] max-w-[420px] opacity-90">
        <img
          src="/Untitled design (70).svg"
          alt=""
          className="w-full h-auto object-contain object-right scale-[1.25] origin-right"
          style={{ transform: "rotate(-90deg)" }}
        />
      </div>

      {/* Central Premium Liquid Glass Card */}
      <motion.div
        variants={subtleReveal}
        initial="initial"
        whileInView="whileInView"
        viewport={subtleReveal.viewport}
        className="relative z-20 mx-auto max-w-6xl w-full"
      >
        <div className="rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-white/60">
          {/* LEFT COLUMN: Image (58%) */}
          <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto lg:h-full min-h-[250px] lg:min-h-[350px]">
            <img
              src="/assets/editorial-courtyard.jpg"
              alt="Two college students sitting silently apart on a stone bench in a courtyard, reflecting in quiet thought"
              className="absolute inset-0 w-full h-full object-cover block object-center"
              loading="lazy"
            />
          </div>

          {/* RIGHT COLUMN: Content (42%) */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center text-left">
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.3em] uppercase text-slate-500 font-bold mb-4 block">
              DESIGNED FOR THE QUIET STUFF
            </span>

            <h2 className="font-serif text-3xl md:text-[34px] lg:text-[36px] text-slate-900 font-light leading-[1.2] tracking-tight mb-6">
              Some of the most
              <br />
              important conversations
              <span className="font-display italic block mt-2 text-[34px] md:text-[38px] lg:text-[40px] font-normal text-[#93A8C1]">
                happen before a word is spoken.
              </span>
            </h2>

            <div className="space-y-3 text-slate-600 text-[14px] md:text-[15px] font-normal leading-relaxed max-w-sm">
              <p>
                Nobody really teaches you how to share uncertainty, or how to navigate the feeling that everyone else somehow has it figured out.
              </p>
              <p className="font-medium text-slate-800">PeaceCode exists for those exact moments.</p>
            </div>

            <div className="mt-8">
              <a
                href="#mood"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 hover:scale-[1.03] transition-all shadow-md"
              >
                Find your place
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ───────── ECOSYSTEM ───────── */

function Ecosystem() {
  const items = [
    {
      img: "/Untitled design (32).svg",
      title: "Anonymous peer support",
      text: "Step into rooms with students who understand 3 a.m. labs, group-project dread, and the silence after a bad grade.",
      href: "/peace-buddies"
    },
    {
      img: "/Untitled design (31).svg",
      title: "Communication coaching",
      text: "Practice the hard conversations — with a professor, a roommate, a parent — through gentle, evidence-based prompts.",
      href: "/peacebot"
    },
    {
      img: "/Untitled design (33).svg",
      title: "Licensed therapists",
      text: "When you want more than a chat, our vetted therapists and clinical guides are one tap away. No paperwork.",
      href: "/psychologist"
    },
  ];

  return (
    <section id="ecosystem" className="relative py-20 md:pt-[140px] md:pb-[140px] px-6 md:px-[80px]">
      <div className="relative z-20 mx-auto w-full">
        <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-[80px]">
          <p className="text-[11px] tracking-[0.35em] uppercase text-slate-700 mb-5">
            The ecosystem
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-slate-900 font-light leading-[1.05] tracking-tight">
            Real people, supported by <span className="font-display italic">real tools.</span>
          </h2>
          <p className="mt-6 text-slate-700 font-light leading-relaxed">
            Built around how students actually live, study, and unravel. Quiet at 2 a.m. Loud when
            it needs to be.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1400px] mx-auto gap-[60px] lg:gap-[100px]">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              {...reveal}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
              className="flex flex-col items-center text-center group"
            >
              <Link href={c.href} className="flex flex-col items-center text-center">
                <img
                  src={c.img}
                  alt=""
                  className="h-[180px] w-auto object-contain mb-[40px] bg-transparent shadow-none group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="font-serif text-3xl md:text-[36px] font-medium text-slate-900 leading-[1.15] max-w-[420px] mx-auto mb-[24px] group-hover:text-[#6B7CBB] transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="text-slate-700 leading-[1.6] max-w-[380px] mx-auto mb-[40px]">
                  {c.text}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatStudentsCarry() {
  const items = [
    {
      title: "Academic Burnout",
      d: "Peacecode's AI-Powered Wellness Assistant delivers real-time college burnout prevention routines, including personalized micro-breaks and guided focus sessions tailored to your study schedule.",
      support: ["AI Wellness Assistant", "Burnout Prevention", "Focus Sessions"],
    },
    {
      title: "Social Isolation & Loneliness",
      d: "Our Anonymous Peer Circles provide immediate, judgment-free connections, allowing you to discuss campus life struggles safely through anonymous student peer support.",
      support: ["Anonymous Peer Circles", "Judgment-Free", "Peer Support"],
    },
    {
      title: "Severe Exam Anxiety",
      d: "Peacecode offers targeted exam anxiety tools, featuring emergency grounding techniques and cognitive restructuring exercises accessible 24/7 right before high-stakes midterms or finals.",
      support: ["Exam Anxiety Tools", "24/7 Access", "Grounding Techniques"],
    },
    {
      title: "Fear of Judgment (Stigma)",
      d: "Through our stigma-free wellness architecture, Peacecode bridges the gap between casual venting and professional help with complete anonymity, ensuring you can seek counseling without it reaching university records.",
      support: ["Stigma-Free Wellness", "Complete Anonymity", "Private Counseling"],
    },
    {
      title: "Emotional Overwhelm",
      d: "Peacecode's Interactive Mood Tracker helps you identify emotional triggers by analyzing daily check-ins and mapping them to actionable, evidence-based coping strategies.",
      support: ["Interactive Mood Tracker", "Trigger Analysis", "Coping Strategies"],
    },
    {
      title: "Family Pressure",
      d: "Carrying the weight of parental expectations, academic funding worries, or family responsibilities.",
      support: ["Boundary-setting exercises", "Stress relief meditation", "Financial anxiety chats"],
    },
    {
      title: "Career Uncertainty",
      d: "Not knowing if you're in the right major, or fearing the post-graduation job market.",
      support: ["Career alignment prompts", "Senior student panels", "Mentorship matching"],
    },
    {
      title: "Imposter Syndrome",
      d: "Feeling like a mistake was made when you were admitted. Fearing everyone will discover you don't belong.",
      support: ["Imposter syndrome journals", "Anonymous peer validation", "Mentor 1:1 sessions"],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="struggles"
      className="relative w-full py-24 md:py-44 px-6 md:px-[80px] overflow-visible"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF 0%, #F5F6FC 30%, #F5F6FC 70%, #FFFFFF 100%)",
      }}
    >
      {/* Decorative illustration from Builder */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none select-none z-10 hidden md:block"
        style={{
          width: "295px",
          left: "-65px",
          top: "80px", // Pushed down to sit nicely next to the "For every student's journey" text
        }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <img
          src="/Untitled design (37).svg"
          alt=""
          className="w-full h-auto"
          style={{ transform: "scaleX(-1)" }}
        />
      </motion.div>

      <div className="relative z-20 mx-auto max-w-6xl">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-[11px] tracking-[0.4em] uppercase text-slate-500 font-bold mb-5 select-none">
            For every student's journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-slate-900 font-light tracking-tight leading-[1.08] mb-6">
            At Peace Code, we believe healing
            <br />
            begins with feeling heard.
          </h2>
          <p className="mt-8 text-slate-600 text-[16px] md:text-[18px] lg:text-[19px] font-normal leading-relaxed max-w-2xl mx-auto">
            Explore the conversations, emotions, and situations students bring into PeaceCode every day.
          </p>
        </div>

        {/* Baba-style grid container with absolute vertical line extensions */}
        <div className="max-w-5xl mx-auto relative py-2">
          {/* Vertical Partition Lines (extend 30px above and below, exactly like Baba) */}
          <div className="absolute left-0 top-[-30px] bottom-[-30px] w-[1px] bg-[#8B98C6]/15 hidden md:block pointer-events-none z-10" />
          <div className="absolute left-[33.33%] top-[-30px] bottom-[-30px] w-[1px] bg-[#8B98C6]/15 hidden md:block pointer-events-none z-10" />
          <div className="absolute left-[66.66%] top-[-30px] bottom-[-30px] w-[1px] bg-[#8B98C6]/15 hidden md:block pointer-events-none z-10" />
          <div className="absolute right-0 top-[-30px] bottom-[-30px] w-[1px] bg-[#8B98C6]/15 hidden md:block pointer-events-none z-10" />

          {/* Grid layout (remains static to prevent sudden layout shifts) */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-transparent">
            {items.map((item, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={item.title}
                  layoutId={`cell-${index}`}
                  onClick={() => setExpandedIndex(index)}
                  className={`
                    relative p-5 md:p-6 min-h-[80px] md:min-h-[105px] flex items-center justify-between overflow-hidden cursor-pointer transition-all duration-300 group bg-transparent hover:bg-[#FAF9FC]/60
                    border-b border-[#8B98C6]/15
                    ${index === 7 ? 'border-b border-[#8B98C6]/15' : ''}
                    ${index >= 6 ? 'md:border-b-0' : ''}
                    ${isExpanded ? 'opacity-0 pointer-events-none' : ''}
                  `}
                >
                  <div className="flex items-center justify-between gap-6 w-full text-left">
                    <h3 className="font-serif text-xl md:text-[23px] font-light text-slate-800 group-hover:text-slate-950 select-none transition-colors duration-300">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-[18px] h-[18px] text-slate-400 group-hover:text-[#8B98C6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                  </div>
                </motion.div>
              );
            })}

            {/* 9th Cell: "& more" + "Join Waitlist" button */}
            <div className="p-5 md:p-6 min-h-[80px] md:min-h-[105px] flex items-center justify-between bg-transparent border-b-0">
              <span className="font-serif text-xl md:text-2xl text-slate-400 font-light select-none italic">
                & more
              </span>
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#12131A] text-white hover:bg-black rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider flex items-center gap-1.5 transition-all duration-300 hover:shadow-md select-none cursor-pointer"
              >
                Join Waitlist
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8B98C6]" />
              </motion.button>
            </div>
          </div>

          {/* Morphing Glass Overlay card */}
          <AnimatePresence>
            {expandedIndex !== null && (
              <>
                {/* Blur Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setExpandedIndex(null)}
                  className="absolute inset-[-30px] bg-slate-900/5 backdrop-blur-sm z-40 rounded-3xl"
                  onMouseEnter={() => setExpandedIndex(null)}
                />

                {/* Floating Enclosed Glass Card */}
                <motion.div
                  layoutId={`cell-${expandedIndex}`}
                  onMouseLeave={() => setExpandedIndex(null)}
                  className="absolute z-50 bg-white/90 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_rgba(152,166,212,0.15)] rounded-3xl p-6 md:p-10 flex flex-col justify-between overflow-y-auto"
                  style={{
                    left: "5%",
                    right: "5%",
                    top: "5%",
                    bottom: "5%",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                >
                  <div className="flex flex-col h-full justify-between w-full text-left">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 select-none">
                          {items[expandedIndex].title}
                        </h3>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedIndex(null);
                          }}
                          className="text-slate-400 hover:text-slate-600 transition p-1 cursor-pointer select-none"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed select-none">
                        {items[expandedIndex].d}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <h4 className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold mb-3 select-none">
                        Suggested Support
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items[expandedIndex].support.map((s, idx) => (
                          <span
                            key={idx}
                            className="bg-[#EAEBFC]/60 text-[#5F668A] text-[11px] font-medium px-3 py-1.5 rounded-full border border-white select-none"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ───────── BLOG GRID ───────── */

function Blog() {
  const posts = [
    {
      tag: "Anxiety",
      title: "5 ways to ground yourself before a presentation",
      mins: "4 min read",
      img: "/ChatGPT Image Jun 3, 2026, 03_03_06 PM.png",
    },
    {
      tag: "Burnout",
      title: "The quiet reality of engineering burnout",
      mins: "6 min read",
      img: "/ChatGPT Image Jun 3, 2026, 03_08_14 PM.png",
    },
    {
      tag: "Connection",
      title: "How to make a real friend in your first semester",
      mins: "5 min read",
      img: "/ChatGPT Image Jun 3, 2026, 03_35_21 PM.png",
    },
  ];

  return (
    <section id="blog" className="relative py-28 md:py-32 px-6 md:px-10 overflow-visible">
      {/* Decorative Edge Branches */}
      <AvifBleed
        src={branchLarge}
        side="right"
        top="-5%"
        width="32vw"
        maxWidth={360}
        nudgeOut="10%"
        opacity={0.75}
        rotate={-10}
        flipX
        yRange={[0, -50]}
      />
      <AvifBleed
        src={branchLarge}
        side="left"
        top="40%"
        width="38vw"
        maxWidth={420}
        nudgeOut="15%"
        opacity={0.6}
        rotate={12}
        yRange={[0, -40]}
      />

      <motion.div {...reveal} className="relative z-20 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600 mb-5">Library</p>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 font-light tracking-tight leading-[1.1]">
              What's new on the <span className="font-display italic">campus blog.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="self-start md:self-end px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-slate-700 rounded-full flex items-center gap-1.5 transition-all duration-300 hover:scale-[1.02] cursor-pointer select-none"
            style={{
              background: "rgba(255, 255, 255, 0.55)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.7)",
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
            }}
          >
            All articles
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.div
              key={p.title}
              {...reveal}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
              className="h-full"
            >
              <div className="bg-white border border-[rgba(15,23,42,0.04)] shadow-[0_10px_30px_rgba(15,23,42,0.04)] rounded-[24px] overflow-hidden flex flex-col h-full group transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-y-[-6px] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                {/* Image Wrapper */}
                <div className="relative overflow-hidden aspect-[4/3] w-full rounded-t-[23px] shrink-0">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-wider uppercase font-semibold text-[#7A889B] block mb-2 select-none">
                      {p.tag}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-light text-slate-900 tracking-tight leading-snug">
                      {p.title}
                    </h3>
                  </div>
                  <div className="mt-6 text-[10px] tracking-wider uppercase text-slate-400 font-medium select-none">
                    {p.mins}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ───────── CLOSING CTA ───────── */

function ClosingCTA() {
  return (
    <section
      className="relative pt-24 pb-44 px-6 md:px-10"
      style={{
        background: "transparent",
        overflow: "visible",
      }}
    >
      <AvifBleed
        src="/Untitled design (63).svg"
        side="left"
        top="-10%"
        width="36vw"
        maxWidth={400}
        opacity={0.85}
        rotate={0}
        flipX
        yRange={[0, -60]}
      />
      <AvifBleed
        src={branchLarge}
        side="right"
        top="6%"
        width="32vw"
        maxWidth={360}
        opacity={0.55}
        rotate={28}
        flipX
        yRange={[0, -40]}
      />
      {/* small flock flying off toward the green footer */}
      <CraneFlock
        side="left"
        className="top-8 h-20 z-[6]"
        birds={[
          { src: babaCrane2, top: "0px", off: "8%", w: "w-10", dur: 8, blur: true, opacity: 0.55 },
          {
            src: craneFlockB,
            top: "22px",
            off: "16%",
            w: "w-14",
            dur: 7,
            delay: 0.3,
            opacity: 0.8,
          },
          { src: babaCrane1, top: "52px", off: "26%", w: "w-20", dur: 9, delay: 0.7 },
        ]}
      />
      <motion.div {...reveal} className="relative z-30 mx-auto max-w-3xl text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-slate-700 mb-8">
          We are here, when you need us.
        </p>
        <p className="font-serif text-3xl md:text-4xl text-slate-900 font-light max-w-2xl mx-auto leading-snug tracking-tight">
          Whether it's 3 a.m. before a viva or a Sunday afternoon that feels too quiet — your room
          is open.
        </p>
        <div className="mt-10 relative z-30">
          <MagneticButton>
            Reserve a quiet seat
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}

/* ───────── BENTO FEATURES ───────── */

function BentoFeatures() {
  const features = [
    {
      icon: MessagesSquare,
      tag: "AI Chatbot",
      title: "Meet Peace Bot: A companion that listens at 3 a.m.",
      text: "Trained on student stress patterns to help you navigate anxiety, burnout, and academic pressure. Peace Bot never judges, never logs, and is always awake.",
      bullets: ["Cognitive Behavioral framing", "Crisis escalation protocols", "100% private & anonymous"],
      span: "md:col-span-7",
      isBig: true,
      href: "/peacebot",
    },
    {
      icon: Users,
      tag: "Community",
      title: "Anonymous peer rooms",
      text: "Text-first spaces, moderated 24/7. Connect with students who actually understand the pressure.",
      span: "md:col-span-5",
      href: "/peace-buddies",
    },
    {
      icon: Stethoscope,
      tag: "Therapists",
      title: "Licensed humans, one tap away",
      text: "Vetted clinical guides ready when you need to talk to a real professional. No waitlists.",
      span: "md:col-span-5",
      href: "/psychologist",
    },
    {
      icon: Leaf,
      tag: "Journal",
      title: "Guided journaling",
      text: "Soft prompts when the page feels too blank. Document your journey without the pressure of a blank canvas.",
      span: "md:col-span-7",
      href: "/journal",
    },
    {
      icon: Wind,
      tag: "Breathing",
      title: "60-second resets",
      text: "Box-breathing, 4-7-8, and physiological sighs.",
      span: "md:col-span-4",
      href: "/breathe",
    },
    {
      icon: Clock,
      tag: "Focus Timer",
      title: "Pomodoro, but kind",
      text: "Tiny breaks with breath cues built in.",
      span: "md:col-span-4",
      href: "/focus",
    },
    {
      icon: Heart,
      tag: "Gratitude Wall",
      title: "A quiet wall of small wins",
      text: "Anonymous, shared, kept light. Because waking up on time is a victory.",
      span: "md:col-span-4",
      href: "/gratitude",
    },
    {
      icon: ClipboardCheck,
      tag: "Screening",
      title: "Validated clinical assessments",
      text: "PHQ-9, GAD-7 — kept completely private and processed entirely on your local device.",
      span: "md:col-span-12",
      href: "/screening",
    },
  ];

  return (
    <section id="features" className="relative py-32 md:py-36 px-6 md:px-10">
      <motion.div {...reveal} className="relative z-20 mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-slate-700 mb-5">
            Everything inside Peace Code
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 font-light tracking-tight leading-[1.1]">
            One quiet app. <span className="font-display italic">Many gentle tools.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any }}
                className={`group relative overflow-hidden p-7 md:p-9 ${f.span} transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between`}
                style={{
                  background: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(32px)",
                  WebkitBackdropFilter: "blur(32px)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  boxShadow: "0 12px 40px rgba(15, 23, 42, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                  borderRadius: "1.75rem",
                }}
              >
                {/* Animated soft glow behind content */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/70 blur-[50px] group-hover:scale-125 transition-transform duration-1000" />
                <div className="pointer-events-none absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-[#E2D9FF]/30 blur-[50px] group-hover:scale-125 transition-transform duration-1000" />

                <Link href={f.href} className="relative z-10 flex flex-col h-full w-full block">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: i * 0.2 }}
                    className="mb-8 origin-left group-hover:scale-110 transition-transform duration-500"
                  >
                    <Icon className={`${f.isBig ? 'w-10 h-10' : 'w-8 h-8'} text-[#6B7CBB] drop-shadow-sm`} strokeWidth={1.5} />
                  </motion.div>

                  <span className="text-[10px] tracking-[0.3em] uppercase text-slate-500 font-semibold mb-4 block">
                    {f.tag}
                  </span>

                  <h3 className={`font-serif text-slate-900 font-light tracking-tight leading-snug mb-4 ${f.isBig ? 'text-3xl md:text-4xl' : 'text-2xl md:text-[26px]'}`}>
                    {f.title}
                  </h3>

                  <p className={`text-slate-600 leading-relaxed font-medium ${f.isBig ? 'text-[15px] mb-8' : 'text-sm mb-6'}`}>
                    {f.text}
                  </p>

                  {f.bullets && (
                    <ul className="mt-2 mb-10 flex flex-col gap-3">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-[15px] text-slate-700 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8B98C6]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-slate-800 font-semibold group-hover:text-[#6B7CBB] transition-colors">
                    Explore
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

/* ───────── FOOTER (sage, with campus illustration anchor) ───────── */

export function Footer() {
  const columns: { h: string; links: { label: string; href: string }[] }[] = [
    {
      h: "About Us",
      links: [
        { label: "About Peace Code", href: "#about" },
        { label: "Careers", href: "/careers" },
        { label: "Media", href: "#media" },
        { label: "Team", href: "#team" },
        { label: "Contact Us", href: "/contact" },
        { label: "Help/FAQs", href: "/faq" },
      ],
    },
    {
      h: "Services",
      links: [
        { label: "Counseling", href: "/psychologist" },
        { label: "PeaceBot", href: "/peacebot" },
        { label: "Community", href: "/community" },
        { label: "Focus Timer", href: "/focus" },
        { label: "Breathing", href: "/breathe" },
        { label: "Gratitude Wall", href: "/gratitude" },
        { label: "Journal", href: "/journal" },
        { label: "Screening", href: "/screening" },
        { label: "Resources", href: "/resources" },
      ],
    },
    {
      h: "Library",
      links: [
        { label: "All Resources", href: "/resources" },
        { label: "Articles", href: "/resources" },
        { label: "Videos", href: "/resources" },
        { label: "Assessments", href: "/screening" },
      ]
    },
  ];

  const socials = [
    { Icon: Instagram, label: "Instagram", href: "https://instagram.com/peacecode.in" },
    { Icon: Twitter, label: "Twitter", href: "https://twitter.com/peacecode" },
    { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/peacecode" },
    { Icon: Mail, label: "Email", href: "mailto:peacecode.in@gmail.com" },
  ];

  const navLink =
    "text-[14px] font-light transition-colors duration-200 hover:underline underline-offset-[3px]";
  const glassPill =
    "inline-flex items-center gap-2 rounded-full text-[13px] font-normal px-5 py-2.5 transition-all duration-200";
  const glassPillStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    color: "#0F172A",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  };
  const socialStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    color: "#0F172A",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  };
  const badgeStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.5)",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    color: "#334155",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    fontWeight: 600,
  };

  return (
    <footer className="relative z-0 w-full min-h-[280px]">
      {/* Foreground content */}
      <div
        className="relative z-10 max-w-6xl mx-auto"
        style={{
          paddingTop: 80,
          paddingBottom: 40,
          paddingLeft: "5%",
          paddingRight: "5%",
          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: hook + CTAs */}
          <div className="lg:col-span-5">
            <h2
              className="mb-4 max-w-sm font-serif"
              style={{
                fontWeight: 300,
                fontSize: "clamp(38px, 5.5vw, 68px)",
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
                color: "#0F172A",
              }}
            >
              Find your
              <br />
              <em className="font-display not-italic bg-yellow-200 px-2 rounded-md inline-block transform -skew-x-6 text-[#0F172A]">peace</em> of mind.
            </h2>
            <p
              style={{
                color: "#334155",
                fontSize: 16,
                fontWeight: 400,
              }}
              className="mb-8"
            >
              We'll handle the rest.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#" className={`${glassPill} hover:bg-slate-900 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300`} style={glassPillStyle}>
                Get it on Google Play
              </a>
              <a href="#" className={`${glassPill} hover:bg-slate-900 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300`} style={glassPillStyle}>
                Download on the App Store
              </a>
            </div>

            <button
              className="mt-6 inline-flex items-center gap-2 rounded-full text-[13px] font-normal px-6 py-2.5 hover:bg-slate-900 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              style={glassPillStyle}
            >
              Login
            </button>
          </div>

          {/* CENTER: link grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {columns.map((c) => (
                <div key={c.h}>
                  <h4
                    className="mb-4"
                    style={{
                      color: "#0F172A",
                      fontWeight: 600,
                      fontSize: 13,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.h}
                  </h4>
                  {c.links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className={`${navLink} mb-2 block font-medium`}
                      style={{ color: "#475569" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: socials + badges */}
          <div className="lg:col-span-2">
            <p
              className="mb-5 font-serif"
              style={{
                fontWeight: 400,
                fontSize: 18,
                lineHeight: 1.5,
                color: "#0F172A",
              }}
            >
              Build a good life for yourself with Peace Code
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                  aria-label={label}
                  className="flex items-center justify-center rounded-xl hover:bg-slate-900 hover:text-white hover:-translate-y-1 transition-all duration-300"
                  style={{ ...socialStyle, width: 44, height: 44 }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span
                className="inline-flex items-center justify-center rounded-full w-fit shadow-sm"
                style={{
                  ...badgeStyle,
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  padding: "6px 14px",
                }}
              >
                ISO 27001
              </span>
              <span
                className="inline-flex items-center justify-center rounded-full w-fit shadow-sm"
                style={{
                  ...badgeStyle,
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  padding: "6px 14px",
                }}
              >
                HIPAA ALIGNED
              </span>
            </div>
          </div>
        </div>

        {/* Bottom legal bar */}
        <div className="mt-20 pt-6">
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-3"
            style={{ color: "#475569", fontSize: 12, fontWeight: 500 }}
          >
            <div>© 2026 Peace Code</div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link href="/privacy" className="hover:text-[#0F172A] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#0F172A] transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cancellation" className="hover:text-[#0F172A] transition-colors">
                Cancellation Policy
              </Link>
              <Link href="/sitemap.xml" className="hover:text-[#0F172A] transition-colors">
                Sitemap
              </Link>
              <Link href="/hall-of-fame" className="hover:text-[#0F172A] transition-colors">
                Hall of Fame
              </Link>
            </div>
          </div>
          <p
            className="max-w-4xl text-center mt-6 mx-auto leading-relaxed"
            style={{ fontSize: 11, color: "#64748B", fontWeight: 500 }}
          >
            Disclaimer: Peace Code provides digital self-help resources and access to licensed
            professionals. We are not equipped for severe psychiatric crises. If you or someone you
            know is experiencing suicidal thoughts or life-threatening situations, please contact
            your local emergency services or a trusted helpline immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───────── COLOR BLOCK WRAPPER ───────── */

function Block({
  bg,
  bridgeFrom,
  bridgeTo,
  children,
  topBranch = false,
}: {
  bg: string;
  bridgeFrom?: string; // canopy emerging from previous section (sits at top, flat color = previous bg)
  bridgeTo?: string; // canopy emerging from THIS section into the next (sits at bottom, flat color = this bg)
  children: React.ReactNode;
  topBranch?: boolean;
}) {
  return (
    <section className="relative w-full overflow-visible" style={{ backgroundColor: bg }}>
      {bridgeFrom && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-px left-0 right-0 w-full"
          style={{ height: 80 }}
        >
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full block">
            <path
              d="M0,0 L0,40 C120,70 200,25 320,40 C440,55 520,75 640,62 C760,50 840,25 960,38 C1080,50 1180,72 1300,58 C1380,48 1420,30 1440,40 L1440,0 Z"
              fill={bridgeFrom}
            />
          </svg>
        </div>
      )}
      {topBranch && (
        <>
          <div
            aria-hidden
            className="decor-branch -top-16 -left-10 w-[34vw] max-w-[420px] z-[1]"
            style={{ ["--base-rotate" as never]: "-8deg" }}
          >
            <img src={branchLarge} alt="" className="w-full h-auto opacity-85" />
          </div>
          <div
            aria-hidden
            className="decor-branch -top-20 -right-12 w-[36vw] max-w-[440px] z-[1]"
            style={{ ["--base-rotate" as never]: "6deg" }}
          >
            <img
              src={branchLarge}
              alt=""
              className="w-full h-auto opacity-85"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </>
      )}
      <div className="relative z-[2]">{children}</div>
      {bridgeTo && (
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-px left-0 right-0 w-full"
          style={{ height: 80 }}
        >
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full block">
            <path
              d="M0,80 L0,40 C120,10 200,55 320,40 C440,25 520,5 640,18 C760,30 840,55 960,42 C1080,30 1180,8 1300,22 C1380,32 1420,50 1440,40 L1440,80 Z"
              fill={bridgeTo}
            />
          </svg>
        </div>
      )}
    </section>
  );
}

/* ───────── PAGE ───────── */

function useDecorScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = Array.from(document.querySelectorAll<HTMLElement>(".decor-crane, .decor-branch"));
    if (els.length === 0) return;

    if (reduce) {
      els.forEach((el) => {
        el.style.setProperty("--scroll-scale", "1");
        el.style.setProperty("--scroll-y", "0px");
        el.style.opacity = "0.7";
      });
      return;
    }

    let ticking = false;
    const update = () => {
      const wh = window.innerHeight;
      for (const el of els) {
        const section = el.closest("section");
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        const progress = (wh - rect.top) / (wh + rect.height);

        let scale = 1;
        let y = 30;
        let opacity = 0;

        if (progress < 0 || progress > 1.8) {
          // off — leave defaults (0 opacity, base scale)
        } else if (progress <= 0.4) {
          const t = progress / 0.4;
          scale = 1 + 0.35 * t;
          opacity = t * 0.85;
          y = 30 * (1 - t);
        } else if (progress <= 0.8) {
          scale = 1.35;
          opacity = 0.85;
          y = 0;
        } else {
          const t = Math.min((progress - 0.8) / 0.6, 1);
          scale = Math.max(1.35 - 0.7 * t, 0.65);
          opacity = Math.max(0.85 * (1 - t), 0);
          y = -40 * t;
        }

        el.style.setProperty("--scroll-scale", scale.toFixed(3));
        el.style.setProperty("--scroll-y", `${y.toFixed(1)}px`);
        el.style.opacity = opacity.toFixed(3);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

export default function Index() {
  useDecorScroll();

  const [isBgLoaded, setIsBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/hero-background.png';
    if (img.complete) {
      setIsBgLoaded(true);
    } else {
      img.onload = () => setIsBgLoaded(true);
      img.onerror = () => setIsBgLoaded(true);
    }
  }, []);

  const refCloudRight = useRef<HTMLDivElement>(null);
  const [targetCloudRight, setTargetCloudRight] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    setTargetCloudRight(refCloudRight.current);
  }, []);

  const { scrollYProgress: scrollCloudRight } = useScroll({
    target: targetCloudRight ? { current: targetCloudRight } : undefined,
    offset: ["start end", "end start"],
  });
  const xCloudRight = useTransform(scrollCloudRight, [0, 1], ["0vw", "-22vw"]);
  const yCloudRight = useTransform(scrollCloudRight, [0, 1], [-80, 40]);

  const { scrollY } = useScroll();
  const heroCloudX = useTransform(scrollY, [0, 1000], ["0%", "-10%"]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-slate-900 bg-[#A3B8C7]">
      <AnimatePresence>
        {!isBgLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#f7f3ea]"
          >
            <motion.img 
              src="/nav bar logo.svg" 
              alt="Loading" 
              className="w-16 h-16 object-contain mb-4 brightness-0 opacity-80"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div 
              className="text-[#1E3048] font-medium text-[13px] tracking-[0.2em] uppercase text-center px-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            >
              Finding your peace...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Nav />

      {/* Scattered Margin Accent Cranes across the pages (visible in the side gutters on desktop) */}
      <MarginCrane
        src={craneAccent1}
        top="4%"
        side="left"
        offset="3%"
        size={42}
        rotate={-10}
        dur={6.5}
        delay={0.2}
      />
      <MarginCrane
        src={craneAccent2}
        top="9%"
        side="right"
        offset="2.5%"
        size={34}
        rotate={15}
        dur={5.5}
        delay={0.8}
      />
      <MarginCrane
        src={craneAccent1}
        top="15%"
        side="left"
        offset="8%"
        size={30}
        rotate={-5}
        dur={7}
        delay={1.4}
      />

      {/* Static branch on right edge (big size, static scroll-parallax only, no bobbing animation) */}
      <div
        aria-hidden
        className="decor-branch -right-12 w-[38vw] max-w-[480px] z-[1] hidden md:block"
        style={{
          top: "28%",
          ["--base-rotate" as never]: "6deg",
        }}
      >
        <img
          src="/Untitled design (21).svg"
          alt=""
          className="w-full h-auto opacity-85"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>

      <div
        className="w-full relative overflow-x-hidden"
        style={{
          backgroundImage: "url('/section2-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeroAtmosphere />

        {/* ── Hero & Cloud Wrapper ── */}
        <div
          className="relative w-full"
          style={{
            backgroundImage: "url('/hero-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* ── Cloud Layer from Builder.io reference ── */}
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <motion.div
              aria-hidden
              className="absolute pointer-events-none w-[120%] left-1/2 -translate-x-1/2 bottom-[-100px] sm:bottom-[-140px] md:w-[161%] md:left-auto md:translate-x-0 md:right-[-121px] md:bottom-[-290px]"
              style={{
                x: heroCloudX
              }}
            >
              <img
                src="/Untitled design (39).svg"
                alt=""
                className="w-full h-auto"
                style={{
                  opacity: 1,
                }}
              />
            </motion.div>
          </motion.div>

          {/* BLOCK 1 — Hero */}
          <Hero isBgLoaded={isBgLoaded} />
        </div>

        {/* NEW SECTION — Collaboration Logos */}
        <Collaboration />

        {/* Moderate spacer to add breathing room before the heading */}
        <div className="h-8 md:h-16 w-full" />

        {/* HOW IT WORKS — cards over the gradient */}
        <HowItWorks />
      </div>

      {/* BLOCK 2 — Mood / Accordion (seamless white continuation) */}
      <Block bg="#FFFFFF">
        <MoodGate />
        <MindAccordion />
      </Block>

      {/* BLOCK 3 — Features (peach/lavender). Bridge: matching the previous block's background */}
      <Block bg={COLOR.peach} bridgeFrom="#FFFFFF">
        {/* Large decorative illustration at the wave line intersection */}
        <div
          aria-hidden
          className="pointer-events-none select-none absolute hidden xl:block"
          style={{
            right: "-16%",
            top: "-260px",
            width: "48vw",
            maxWidth: 680,
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          {/* Clip wrapper hides the bottom branch endings */}
          <div style={{ overflow: "hidden", paddingBottom: 0 }}>
            <img
              src="/Untitled design (63).svg"
              alt=""
              className="w-full h-auto object-contain object-top"
              style={{
                maxHeight: "90vh",
                objectFit: "contain",
                objectPosition: "top center",
                mixBlendMode: "multiply",
                opacity: 0.85,
              }}
              loading="lazy"
            />
          </div>
        </div>
        <CraneFlock
          side="left"
          className="top-6 h-24 z-[3]"
          birds={[
            {
              src: babaCrane2,
              top: "0px",
              off: "6%",
              w: "w-10",
              dur: 8,
              blur: true,
              opacity: 0.55,
            },
            {
              src: craneFlockA,
              top: "20px",
              off: "14%",
              w: "w-16",
              dur: 7,
              delay: 0.4,
              opacity: 0.85,
            },
            { src: babaCrane1, top: "52px", off: "24%", w: "w-20", dur: 9, delay: 0.9 },
          ]}
        />
        <BentoFeatures />
        <FeatureHighlight />
        <Ecosystem />
      </Block>

      {/* BLOCK 4 — Stories / Proof / Blog / CTA (white). Bridge: peach canopy spilling down. */}
      <Block bg="#FFFFFF" topBranch>
        {/* Decorative Right Cloud — inserts into right edge, slides out on scroll, no back edge visible */}
        <motion.div
          ref={refCloudRight}
          aria-hidden
          className="pointer-events-none select-none absolute hidden md:block"
          style={{
            right: "-26vw",
            top: "-150px",
            width: "56vw",
            maxWidth: 750,
            x: xCloudRight,
            y: yCloudRight,
            opacity: 0.85,
            zIndex: 10,
          }}
        >
          <img
            src="/Untitled design (69).svg"
            alt=""
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </motion.div>
        <CraneFlock
          side="right"
          className="top-8 h-28 z-[3]"
          birds={[
            {
              src: babaCrane2,
              top: "0px",
              off: "4%",
              w: "w-12",
              dur: 7.5,
              blur: true,
              opacity: 0.6,
            },
            {
              src: craneFlockB,
              top: "26px",
              off: "12%",
              w: "w-16",
              dur: 8,
              delay: 0.3,
              opacity: 0.8,
            },
            { src: babaCrane1, top: "58px", off: "22%", w: "w-24", dur: 9, delay: 0.7 },
            {
              src: craneFlockA,
              top: "92px",
              off: "32%",
              w: "w-12",
              dur: 8.5,
              delay: 1.1,
              opacity: 0.75,
            },
          ]}
        />
        <Testimonials />
        <WhatStudentsCarry />
        <Blog />
      </Block>

      {/* BLOCK 5 — ClosingCTA + Footer combined background */}
      <div className="relative w-full overflow-x-clip overflow-y-visible" style={{ backgroundColor: "#FFFFFF" }}>
        {/* Background Image Layer covering BOTH, fading softly from white at the top */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            // Fade the image out perfectly at the top so it seamlessly blends with the white background
            maskImage: "linear-gradient(to bottom, transparent 0%, black 250px)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 250px)"
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/section3-bg.png')",
              backgroundSize: "100% 100%", // Stretches to fit
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "rotate(180deg)",
            }}
          />
        </div>

        <div className="relative z-10">
          <ClosingCTA />
          <Footer />
        </div>
      </div>
    </main>
  );
}
