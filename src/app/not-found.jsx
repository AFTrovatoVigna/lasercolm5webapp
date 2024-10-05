import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-auto lg:mt-36 mt-32  p-6">
      <h1 className="text-pink-600 text-lg md:text-xl lg:text-2xl text-center font-semibold mb-2">
        Oops! Perdón por haberte traído hasta acá
      </h1>
      <h2 className="text-pink-800 text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
        Error 404
      </h2>
      <p className="text-gray-500 text-center text-sm md:text-lg lg:text-xl mb-6 max-w-md">
        La página que estás buscando podría haber sido eliminada, su nombre cambiado, o estar temporalmente no disponible.
      </p>
      <Link href="/" className="px-6 py-3 bg-pink-500 text-white text-sm md:text-lg lg:text-xl rounded-md hover:bg-pink-700 transition-all duration-300">
          Volver al inicio </Link>
    </div>
  );
}
