import MainTitle from "@/Components/Cotizaciones/MainTitle"
import Volver from "@/Components/InflationApp/Volver"
import Cotizacion from "@/Components/Cotizaciones/Cotizacion"

const Cotizaciones = () => {
    return (
        <main className="bg-[#faf9f9] h-screen w-full flex flex-col items-center justify-start absolute">
            <div className="flex flex-col px-4 pt-10 pb-4 ">
                <MainTitle />
                <Cotizacion />
            </div>
            <div className="pt-5">
                <Volver />
            </div>
        </main>
    )
}

export default Cotizaciones