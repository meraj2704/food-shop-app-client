import DarkModeToggle from "@/components/darkmode/DarkModeToggle";
import ThemeSwitcher from "@/components/darkmode/ThemeSwitcher";
import AboutComp from "@/components/header/AboutComp";
import AppAddComponent from "@/components/header/AppAddComponent";
import Banner from "@/components/header/Banner";
import ComboOfferComponent from "@/components/header/ComboOfferComponent";
import MenuComp from "@/components/header/Menu/MenuComp";
import TestimonialsCom from "@/components/header/TestimonialsCom";
import Footer from "@/components/shared/Navbar/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative ">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutComp></AboutComp>
      <MenuComp></MenuComp>
      <TestimonialsCom></TestimonialsCom>
      <ComboOfferComponent />
      <AppAddComponent/>
      <Footer/>
      <div className="fixed bottom-10 right-10">
        <ThemeSwitcher/>
      </div>
    </main>
  );
}
