import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import Team from "@/components/Team";
import GithubCta from "@/components/GithubCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Page() {
  return (<>
    <Navbar />
    <main id="main"><Hero /><Projects /><About /><Tech /><Team /><GithubCta /><Contact /></main>
    <Footer />
  </>);
}
