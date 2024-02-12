import HomeSite from "@/Components/HomeSite";
import Navbar from "@/Components/Navbar/Navbar";
import ShowWebs from "@/Components/ShowWebs";

export default function Home() {
  return (
    <main className="bg-[#faf9f9] h-full w-full absolute ">
      <Navbar />
      <HomeSite />
    </main>
  )
}
