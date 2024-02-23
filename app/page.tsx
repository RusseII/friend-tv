import { Metadata } from "next";
import Videos from "./Videos";

export default function Home() {
  return <Videos />;
}

export const metadata: Metadata = {
  title: "Friend Videos",
  description: "This is a compliation of videos sent to me by my friends.",
};
