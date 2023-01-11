import Navbar from "../components/navbar";
import Program from "../components/sections/programs";
import Students from "../components/sections/students";

export default function Home() {
  return (
    <>
      <Navbar />
      <Students />
      <Program />
    </>
  );
}
