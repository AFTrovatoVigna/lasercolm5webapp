

export default function Home() {
  return(
  <div className="bg-pink-100" >
    <div className="w-{100%} h-[400px] overflow-hidden">
       <video src="/assets/videohome2.mp4" autoPlay loop muted playsInline className="w-{100%} h-auto object-cover"/>
    </div>

    <div className="text-center py-10 mt-10">
  <h1 className="text-3xl font-semibold mb-4">
    Tienda online de accesorios personalizados
  </h1>
  <p className="text-lg text-gray-600 max-w-lg mx-auto">
    Descubre eso que siempre has soñado, diseñados con cariño y personalizados solo para ti. 
    Haz que cada detalle cuente <span className="text-red-500">♥️</span>
  </p>
</div>



<div className="flex items-center py-4 ml-5">
    
      <span className="text-gray-700 text-[20px] whitespace-nowrap">Explora por categoría</span>

      <div className="flex-grow border-t border-gray-400 mx-3"></div>

  
      <div className="flex space-x-2 mr-5">
        <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
      </div>
    </div>
<section className="flex mt-7 lg:space-x-4 lg:p-4 lg:mt-20 justify-around">

<div className="flex flex-col justify-center">
<img src="/assets/llavero.png" className=" w-[70px] h-[70px]  lg:w-[200px] lg:h-[200px] lg:border- border-black rounded-[100%] transition-transform duration-100 hover:scale-105 " alt="foto llaveros" />
<span className="text-white text-[10px] text-center mb-3 lg:text-black lg:text-xl lg:text-center lg:mb-7" >Llaveros</span>
</div>

<div className="flex flex-col justify-center">
<img src="/assets/manilla.png" className="w-[70px] h-[70px]  lg:w-[200px] lg:h-[200px] lg:border- border-black rounded-[100%] transition-transform duration-100 hover:scale-105  " alt="foto manillas" />
<span className="text-black text-[10px] text-center mb-3 lg:text-black lg:text-xl lg:text-center lg:mb-7">Manillas ID</span>
</div>

<div className="flex flex-col justify-center">
<img src="/assets/placamascota.png"className="w-[70px] h-[70px]  lg:w-[200px] lg:h-[200px] lg:border- border-black rounded-[100%] transition-transform duration-100 hover:scale-105 " alt="foto placas mascotas"  />
<span className="text-white text-[10px] text-center mb-3 lg:text-black lg:text-xl lg:text-center lg:mb-7">Placas para tu mascota</span>
</div>

<div className="flex flex-col justify-center">
<img src="/assets/collar.png" className="w-[70px] h-[70px]  lg:w-[200px] lg:h-[200px] lg:border- border-black rounded-[100%] transition-transform duration-100 hover:scale-105 " alt="foto collares" />
<span className="text-white text-[10px] text-center mb-3 lg:text-black lg:text-xl lg:text-center lg:mb-7">Collares</span>
</div>

</section>
<div className="flex items-center py-4 ml-5 mt-9 mb-9">
    
      <span className="text-gray-700  text-[20px] whitespace-nowrap">Nuestros clientes hablan</span>

      <div className="flex-grow border-t border-gray-400 mx-3"></div>

  
      <div className="flex space-x-2 mr-5">
        <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
      </div>
    </div>
<section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
    
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
         
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
          
            </div>
            <p className="text-gray-700 italic">
              "Trabajo con esta empresa desde hace años y siempre me sorprenden con su dedicación y profesionalismo. Las piezas que personalizan son únicas y hechas con un esmero que se nota en cada detalle. ¡Excelente experiencia!"
            </p>
            <p className="text-gray-500 mt-4">— Juan Pérez</p>
          </div>

     
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
       
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
            
            </div>
            <p className="text-gray-700 italic">
              "Me encanta cómo mi diseño quedó perfecto en el llavero que pedí. El grabado láser es impecable y el servicio al cliente es muy atento. ¡Definitivamente volveré a comprar!"
            </p>
            <p className="text-gray-500 mt-4">— María López</p>
          </div>

       
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
            
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              
            </div>
            <p className="text-gray-700 italic">
              "Esta empresa ha superado todas mis expectativas. La calidad del grabado y la personalización son sobresalientes. El proceso fue fácil y el resultado final fue exactamente lo que imaginé."
            </p>
            <p className="text-gray-500 mt-4">— Luis Fernández</p>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
          
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.763 4.466a.75.75 0 00.563.491l4.965.675a.75.75 0 01.441 1.316l-3.612 3.223a.75.75 0 00-.21.671l1.051 4.808a.75.75 0 01-1.12.79L10 14.347l-4.378 2.522a.75.75 0 01-1.12-.79l1.051-4.808a.75.75 0 00-.21-.671L1.73 9.378a.75.75 0 01.44-1.316l4.966-.675a.75.75 0 00.563-.491l1.763-4.466z"/>
              </svg>
            </div>
            <p className="text-gray-700 italic">
              "Cada pieza que he recibido es una obra de arte. La personalización es de primera, se nota la calidad en cada detalle. Sin duda, una de las mejores empresas en su campo."
            </p>
            <p className="text-gray-500 mt-4">— Sofía Gómez</p>
          </div>

        </div>
      </div>
    </section>



  </div>
  )
}
