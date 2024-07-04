import AboutComp from "@/components/header/AboutComp";
import Banner from "@/components/header/Banner";
import MenuComp from "@/components/header/MenuComp";
import TestimonialsCom from "@/components/header/TestimonialsCom";
import Navbar from "@/shared/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <main className="relative">
    <Navbar></Navbar>
    <Banner></Banner>
    <AboutComp></AboutComp>
    <MenuComp></MenuComp>
    <TestimonialsCom></TestimonialsCom>
   </main>
  );
}
