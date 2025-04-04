import EffortleffCloude from "@/components/EffortleffCloude";
import KeyFeatures from "@/components/KeyFeatures";
import Navbar from "@/components/Navbar";
import Surveyed from "@/components/Surveyed";
import WhyShieldSync from "@/components/WhyShield";
import CustumerSays from "@/components/CustumerSays"
import Pricing from "@/components/Pricing";
import AskedQuestion from "@/components/AskedQuestion";
import StartProtecting from "@/components/StartProtecting";
import Footer from "@/components/Footer"
import AppSlideBar from "@/components/AppSlideBar"
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className=" ">
      <SidebarProvider defaultOpen={false}>
        <AppSlideBar/>
      <main className="">
        <Navbar/>
        <EffortleffCloude/>
        <Surveyed/>
        <KeyFeatures/>
        <WhyShieldSync/>
        <CustumerSays/>
        <Pricing/>
        <AskedQuestion/>
        <StartProtecting/>
        <Footer/>
      </main>
      </SidebarProvider>
    </div>
  );
}
