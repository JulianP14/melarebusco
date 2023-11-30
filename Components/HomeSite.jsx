import ShowWebs from "./ShowWebs"

const HomeSite = () => {
    return (
        <section className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-3 px-4 mb-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Melarebusco</h1>
                <h2 className="text-2xl text-slate-400 text-center">Acá vas a poder ver todos nuestros servicios</h2>
            </div>
            <ShowWebs />
        </section>
    )
}

export default HomeSite