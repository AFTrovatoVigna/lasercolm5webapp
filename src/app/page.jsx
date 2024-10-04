import ProductsCards from "@/components/ProductsCards/ProductsCards";

export default function Home() {
  return (
    <div className="bg-pink-100">
    
      <div className="w-[100%] h-[200px] lg:h-[400px] mt-[50px] overflow-hidden">
 
  <video
    src="/assets/videohomemobile1.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover  lg:hidden" 
  />


  <video
    src="/assets/videohomee.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover hidden lg:block" 
  />
</div>


      <div className="py-10 lg:mt-10 text-center">
        <h1 className="mb-4  text-xl lg:text-3xl font-semibold">
          Tienda online de accesorios personalizados
        </h1>
        <p className="max-w-lg mx-auto text-base lg:text-lg text-gray-600">
          Descubre eso que siempre has soñado, diseñados con cariño y personalizados solo para ti.
          Haz que cada detalle cuente <span className="text-red-500">♥️</span>
        </p>
      </div>

     
      <div className="flex items-center py-2 mx-5 lg:mt-14 lg:mb-[-90px]">
        <span className="text-gray-700 text-[18px] lg:text-[20px] whitespace-nowrap">
          Explora por categoría
        </span>
        <div className="flex-grow mx-3 border-t border-gray-400"></div>
        <div className="flex space-x-2">
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
      </div>

      <ProductsCards />

      <section className="lg:mt-24 mt-10">

      <h2 className="text-center lg:text-4xl font-semibold mb-2 lg:mb-9">Nuestros trabajos</h2>
      <p className="text-center lg:text-xl lg:mt-10  text-gray-600 mb-8">
        A continuación te presentamos una selección de los trabajos realizados en nuestro estudio.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-2 lg:gap-1">
  
        <div className="relative group">
          <img
            src="/assets/p1.jpg" 
            alt="Volvo"
            className="w-[70%] h-auto mx-auto lg:w-full lg:h-[300px] object-cover rounded-lg relative"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg w-[70%] mx-auto lg:w-full">
            <p>Placa dorada para un cliente muy especial</p>
          </div>
        </div>


        <div className="relative group">
          <img
            src="/assets/p2.jpg" 
            alt="Andersen"
            className="w-[70%] h-auto mx-auto lg:w-full lg:h-[300px] object-cover rounded-lg relative"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg w-[70%] mx-auto lg:w-full">
            <p>LLavero grabado - Familia </p>
          </div>
        </div>

      
        <div className="relative group">
          <img
            src="/assets/p3.jpg" 
            alt="Iberdrola"
            className="w-[70%] h-auto mx-auto lg:w-full lg:h-[300px] object-cover rounded-lg relative"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg w-[70%] mx-auto lg:w-full">
            <p>LLavero para parejas♥️</p>
          </div>
        </div>

      
        <div className="relative group">
          <img
            src="/assets/p9.jpg" 
            alt="Reale Seguros"
            className="w-[70%] h-auto mx-auto lg:w-full lg:h-[300px] object-cover rounded-lg relative"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg w-[70%] mx-auto lg:w-full">
            <p>Pulseras grabadas</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src="/assets/p10.jpg" 
            alt="Reale Seguros"
            className="w-[70%] h-auto mx-auto lg:w-full lg:h-[300px] object-cover rounded-lg relative"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg w-[70%] mx-auto lg:w-full">
            <p>Lamparas LED</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src="/assets/p6.jpg" 
            alt="Reale Seguros"
            className="w-[70%] h-auto mx-auto lg:w-full lg:h-[300px] object-cover rounded-lg relative"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg w-[70%] mx-auto lg:w-full">
            <p>Placas de identificación en acero inoxidable</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src="/assets/p7.jpg"
            alt="Reale Seguros"
            className="w-[70%] h-auto mx-auto lg:w-full lg:h-[300px] object-cover rounded-lg relative"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg w-[70%] mx-auto lg:w-full">
            <p>Manillas con identificación</p>
          </div>
        </div>

        <div className="relative group">
          <img
            src="/assets/p11.jpg" 
            alt="Reale Seguros"
            className="w-[70%] h-auto mx-auto lg:w-full lg:h-[300px] object-cover rounded-lg relative"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg w-[70%] mx-auto lg:w-full">
            <p>Collar personalizado</p>
          </div>
        </div>
      </div>
    </section>
      

    <div className=" p-6 lg:mt-14">

      <h1 className="text-center lg:text-3xl font-bold mb-5 lg:mb-16">
        Razones para elegirnos
      </h1>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 rounded-lg">

        <div>
        <video
    src="/assets/elegirnos.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="lg:w-[550px] lg:h-[250px] object-cover lg:ml-12 rounded-xl  " 
  />
        </div>

        
        <div className="text-center lg:text-left">
          <h2 className="text-xl font-semibold">Trabajo profesional</h2>
          <p className="mt-2">
          Contamos con experiencia y equipamiento especializado para cubrir las necesidades de cada cliente, ya sea para personas o pequeños negocios. Realizamos todo tipo de trabajos personalizados en materiales como metales, plásticos, acrílicos y maderas, con un enfoque en precisión y calidad. 
          </p>
        </div>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    
        <div className="text-center lg:ml-10 lg:text-left">
          <h2 className="text-xl font-semibold">Calidad</h2>
          <p className="mt-2">
          Priorizamos la excelencia en cada proyecto. Aplicamos controles rigurosos para asegurar que los resultados sean precisos, duraderos y acordes a los estándares más altos. Cada trabajo es realizado con atención a los detalles, garantizando que se entregue un producto que supere las expectativas de nuestros clientes.
          </p>
        </div>

       
        <div>
        <video
    src="/assets/video2.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="lg:w-[550px] lg:h-[250px] object-cover lg:ml-12 rounded-xl   " 
  />
        </div>
      </div>
    </div>

      <div className="flex items-center py-4 mx-5 mt-9 mb-9">
        <span className="text-gray-700 text-[18px] lg:text-[20px] whitespace-nowrap">
          Nuestros clientes hablan
        </span>
        <div className="flex-grow mx-3 border-t border-gray-400"></div>
        <div className="flex space-x-2">
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
      </div>

    
      <section className="py-8 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
           
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700">
                &quot;Trabajo con esta empresa desde hace años y siempre me sorprenden con su dedicación y profesionalismo. Las piezas que personalizan son únicas y hechas con un esmero que se nota en cada detalle. ¡Excelente experiencia!&quot;
              </p>
              <p className="mt-4 text-gray-500">— Juan Pérez</p>

            </div>

           
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700">
                `Me encanta cómo mi diseño quedó perfecto en el llavero que pedí. El grabado láser es impecable y el servicio al cliente es muy atento. ¡Definitivamente volveré a comprar!`
              </p>
              <p className="mt-4 text-gray-500">— María López</p>
            </div>

 
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700">
                `Esta empresa ha superado todas mis expectativas. La calidad del grabado y la personalización son sobresalientes. El proceso fue fácil y el resultado final fue exactamente lo que imaginé.`
              </p>
              <p className="mt-4 text-gray-500">— Pedro Gómez</p>
            </div>

       
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700">
                `Cada pieza que he recibido es una obra de arte. La personalización es de primera, se nota la calidad en cada detalle. Sin duda, una de las mejores empresas en su campo.`
              </p>
              <p className="mt-4 text-gray-500">— Ana García</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
