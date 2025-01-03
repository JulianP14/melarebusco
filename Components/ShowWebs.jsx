import Image from "next/image"
import Link from "next/link"
import ButtonRefer from "./ButtonRefer/ButtonRefer"

const ShowWebs = () => {

  const webs = [
    {
      image: '/assets/inflacionapp.jpg',
      name: '¿Cómo conviene?',
      description: 'Esta app te permite calcular si es mejor comprar un producto en cuotas fijas o de contado, con la inflación ajustada.',
      id: 1,
      icon: '📈',
      to: '/inflationapp'
    },
    {
      image: '/assets/cotizaciones.jpg',
      name: 'Cotización de USD',
      description: 'Esta app te muestra todas las cotizaciones más importantes de los dólares en Argentina.',
      id: 2,
      icon: '💵',
      to: '/cotizaciones'
    },
    {
      image: '/assets/impuestina.jpg',
      name: 'Impuestina',
      description: 'Esta app te permite calcular cuánto tendrías que pagar por un servicio en USD o en ARS con impuestos.',
      id: 3,
      icon: '💰',
      to: '/impuestina'
    }
  ]

  return (
    <section className="flex flex-col items-center px-14 w-[500px] md:w-[600px] lg:w-[1180px] xl:w-[1400px] my-4 ">
      <div className="border-gray-400 w-full h-full flex flex-col items-stretch gap-10 lg:flex-row lg:w-full xl:gap-12">
        {webs.map(({ image, name, description, id, icon, to }) => (
          <div className="flex flex-col items-center py-4 border rounded-xl gap-6 px-6 boxShadow w-full justify-around" key={id}>
            <div className="flex flex-col items-center rounded-xl">
              <Image
                src={image}
                alt="Prop"
                width={650}
                height={800}
                className="rounded-lg boxShadow"
              />
            </div>
            <div className="text-gray-600 flex flex-col items-center gap-2 px-2">
              <h2 className="text-xl font-bold text-slate-500">{name} {icon}</h2>
              <p className="text-center text-md text-slate-500">{description}</p>
            </div>
            <Link
              href={to}
              className=" flex items-center justify-evenly"
            >
              <ButtonRefer />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ShowWebs