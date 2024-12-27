import Image from "next/image"

const MainTitle = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='rounded-full border-2 p-2 shadow-lg'>
        <Image
          src={'/assets/money.svg'}
          width={70}
          height={40}
          alt="logo"
          className="p-1"
        />
      </div>
      <div className=''>
        <h1 className="py-4 px-2 text-center text-4xl font-bold bg-gradient-to-r from-[#101419] via-70% to-[#136F63] bg-clip-text text-transparent">Cotizaciones</h1>
        <h2 className='text-2xl mb-2 text-center text-gray-500'>Te mostramos las cotizaciones de los dólares más relevantes.</h2>
      </div>
    </div>
  )
}

export default MainTitle
