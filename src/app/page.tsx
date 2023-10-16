import { Featured, Offer, Slider } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
