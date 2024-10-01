import ProductCard from "@/components/Card";
import ProductsCards from "@/components/ProductsCards/ProductsCards";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-pink-100 " >
      <div className="w-[1726px] h-[400px] overflow-hidden">
        <video src="/assets/videohome2.mp4" autoPlay loop muted playsInline className="w-{100%} h-auto object-cover" />
      </div>

      <div className="py-10 mt-10 text-center">
        <h1 className="mb-4 text-3xl font-semibold">
          Tienda online de accesorios personalizados
        </h1>
        <p className="max-w-lg mx-auto text-lg text-gray-600">
          Descubre eso que siempre has soñado, diseñados con cariño y personalizados solo para ti.
          Haz que cada detalle cuente <span className="text-red-500">♥️</span>
        </p>
      </div>



      <div className="flex items-center py-4 ml-5">

        <span className="text-gray-700 text-[20px] whitespace-nowrap">Explora por categoría</span>

        <div className="flex-grow mx-3 border-t border-gray-400"></div>


        <div className="flex mr-5 space-x-2">
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
      </div>
      <ProductsCards/>
      <div className="flex items-center py-4 ml-5 mt-9 mb-9">

        <span className="text-gray-700  text-[20px] whitespace-nowrap">Nuestros clientes hablan</span>

        <div className="flex-grow mx-3 border-t border-gray-400"></div>


        <div className="flex mr-5 space-x-2">
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
      </div>
      <section className="py-8 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">


            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">

                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>

              </div>
              <p className="italic text-gray-700">
                &quot;Trabajo con esta empresa desde hace años y siempre me sorprenden con su dedicación y profesionalismo. Las piezas que personalizan son únicas y hechas con un esmero que se nota en cada detalle. ¡Excelente experiencia!&quot;
              </p>
              <p className="mt-4 text-gray-500">— Juan Pérez</p>

            </div>


            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">

                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>

              </div>
              <p className="italic text-gray-700">
                "Me encanta cómo mi diseño quedó perfecto en el llavero que pedí. El grabado láser es impecable y el servicio al cliente es muy atento. ¡Definitivamente volveré a comprar!"
              </p>
              <p className="mt-4 text-gray-500">— María López</p>
            </div>


            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">

                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>

              </div>
              <p className="italic text-gray-700">
                "Esta empresa ha superado todas mis expectativas. La calidad del grabado y la personalización son sobresalientes. El proceso fue fácil y el resultado final fue exactamente lo que imaginé."
              </p>
              <p className="mt-4 text-gray-500">— Luis Fernández</p>
            </div>


            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">

                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                </svg>
              </div>
              <p className="italic text-gray-700">
                "Cada pieza que he recibido es una obra de arte. La personalización es de primera, se nota la calidad en cada detalle. Sin duda, una de las mejores empresas en su campo."
              </p>
              <p className="mt-4 text-gray-500">— Sofía Gómez</p>
            </div>

          </div>
        </div>
      </section>



    </div>
  )
}
