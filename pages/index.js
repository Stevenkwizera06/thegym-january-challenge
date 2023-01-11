import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Contact from "../components/sections/contact";
import Information from "../components/sections/information";
import News from "../components/sections/new";
import Program from "../components/sections/programs";
import Students from "../components/sections/students";

export default function Home() {
  return (
    <>
      <Navbar />
      <Students />
      <Program />
      <News />
      <Information />
      <Contact />
      <Footer />
      
    </>
  );
}
