import { FeaturedProperty } from "@/sections/FeaturedProperty";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { VisionMissionSection } from "@/sections/VissionMission";
import Image from "next/image";

export default function Home() {
  return <>
  <Header/>
  <Hero/>
  <FeaturedProperty/>
  <VisionMissionSection/>

  </> ;
}
