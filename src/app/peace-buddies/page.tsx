import type { Metadata } from "next";
import PeaceBuddiesRoute from "../../routes/peace-buddies";

export const metadata: Metadata = {
  title: "Peace Buddies — Anonymous Peer Support for College Students",
  description:
    "Connect with fellow college students in anonymous, moderated peer support rooms. Share your experiences with exam stress, loneliness, social anxiety, and campus life challenges. Text-first, judgment-free, always open.",
  alternates: {
    canonical: "https://www.peacecode.in/peace-buddies",
  },
  openGraph: {
    title: "Peace Buddies — Anonymous Peer Support for Students | Peace Code",
    description: "Anonymous, moderated peer support rooms for college students. Connect with peers who truly understand.",
    url: "https://www.peacecode.in/peace-buddies",
    type: "website",
  },
};

export default function Page() {
  return <PeaceBuddiesRoute />;
}
