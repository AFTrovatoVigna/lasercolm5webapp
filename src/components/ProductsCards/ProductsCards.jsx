import Link from "next/link";
function ProductsCards() {
    return (
        <section className="flex justify-around mt-7 lg:space-x-4 lg:p-4 lg:mt-20">

            <Link href="/llaveros" className="flex flex-col justify-center">
                <img src="/assets/llavero.png" className=" w-[70px] h-[70px]  lg:w-[200px] lg:h-[200px] lg:border- border-black rounded-[100%] transition-transform duration-100 hover:scale-105 " alt="foto llaveros" />
                <span className="text-white text-[10px] text-center mb-3 lg:text-black lg:text-xl lg:text-center lg:mb-7" >Llaveros</span>
            </Link  >

            <Link href="/ManillaId">

                <div className="flex flex-col justify-center">
                    <img src="/assets/manilla.png" className="w-[70px] h-[70px]  lg:w-[200px] lg:h-[200px] lg:border- border-black rounded-[100%] transition-transform duration-100 hover:scale-105  " alt="foto manillas" />
                    <span className="text-black text-[10px] text-center mb-3 lg:text-black lg:text-xl lg:text-center lg:mb-7">Manillas ID</span>
                </div>

            </Link>


            <Link href="/PlacaMascotas">

                <div className="flex flex-col justify-center">
                    <img src="/assets/placamascota.png" className="w-[70px] h-[70px]  lg:w-[200px] lg:h-[200px] lg:border- border-black rounded-[100%] transition-transform duration-100 hover:scale-105 " alt="foto placas mascotas" />
                    <span className="text-white text-[10px] text-center mb-3 lg:text-black lg:text-xl lg:text-center lg:mb-7">Placas para tu mascota</span>
                </div>
            </Link>

            <Link href="/collar" className="flex flex-col justify-center">
                <img src="/assets/collar.png" className="w-[70px] h-[70px]  lg:w-[200px] lg:h-[200px] lg:border- border-black rounded-[100%] transition-transform duration-100 hover:scale-105 " alt="foto collares" />
                <span className="text-white text-[10px] text-center mb-3 lg:text-black lg:text-xl lg:text-center lg:mb-7">Collares</span>
            </Link>

        </section>


    )


}
export default ProductsCards;