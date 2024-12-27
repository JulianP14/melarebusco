import DolarOficial from "@/Components/Impuestina/DolarOficial"
import MainTitle from "@/Components/Impuestina/MainTitle"
import Volver from "@/Components/InflationApp/Volver"

const Impuestina = () => {
  return (
    <main className="bg-[#faf9f9] h-screen w-full flex flex-col items-center justify-start absolute">
      <div className="flex flex-col px-4 pt-10 pb-4 ">
        <MainTitle />
      </div>
      <DolarOficial />
      <Volver />
    </main>
  )
}

export default Impuestina