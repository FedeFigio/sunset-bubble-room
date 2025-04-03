import Image from "next/image";

export default function Prenota() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 !text-white">
          Prenota la Tua Bubble Room
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Compila il form sottostante per richiedere informazioni e prenotare il tuo soggiorno sotto le stelle
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/bubble-night.jpg"
              alt="Bubble Room di notte"
              fill
              className="object-cover"
            />
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome e Cognome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                Telefono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                Messaggio
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Invia Richiesta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}