import ProposalBanner from "@/components/ProposalBanner";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Categories from "@/components/Categories";
import Brands from "@/components/Brands";
import NewArrivals from "@/components/NewArrivals";
import HatService from "@/components/HatService";
import Story from "@/components/Story";
import Visit from "@/components/Visit";
import Blog from "@/components/Blog";
import InstagramGrid from "@/components/InstagramGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotesToggle from "@/components/NotesToggle";

export default function Home() {
  return (
    <>
      <ProposalBanner />
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Categories />
        <Brands />
        <NewArrivals />
        <HatService />
        <Story />
        <Visit />
        <Blog />
        <InstagramGrid />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
      <NotesToggle />
    </>
  );
}
