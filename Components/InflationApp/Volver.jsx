import Link from "next/link"

const Volver = () => {
  return (
    <Link
      href={'/'}
    >
      <button className="text-lg font-medium text-blue-400 border-2 border-blue-400 px-12 py-2 my-2 rounded-full hover:text-white group relative flex items-center overflow-hidden outline-none hover:bg-blue-400">
        <span className="absolute left-0 w-full h-0 transition-all bg-blue-400 opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease outline-none"></span>
        <span className="relative">
          Volver
        </span>
        <span className="absolute -left-40 rotate-180 flex items-center justify-start h-10 duration-300 transform translate-x-0 group-hover:translate-x-12 ease outline-none w-full">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            >
            </path>
          </svg>
        </span>

      </button>
    </Link>
  )
}

export default Volver