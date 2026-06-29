import type { Metadata } from "next";
import CommunityRoute from "../../routes/community";

export const metadata: Metadata = {
  title: "Student Community — Anonymous Peer Support & Discussion Rooms",
  description:
    "Join Peace Code's stigma-free student community rooms. Connect anonymously with college students facing similar challenges — exam stress, social anxiety, loneliness, burnout, and more. Moderated 24/7.",
  alternates: {
    canonical: "https://www.peacecode.in/community",
  },
  openGraph: {
    title: "Student Community — Anonymous Peer Support | Peace Code",
    description: "Anonymous, moderated community rooms where college students support each other through campus life challenges.",
    url: "https://www.peacecode.in/community",
    type: "website",
  },
};

export default function Page() {
  return <CommunityRoute />;
}
