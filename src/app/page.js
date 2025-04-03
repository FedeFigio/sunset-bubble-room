import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bubble.jpg"
            alt="Bubble Room sotto le stelle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Dormi Sotto le Stelle
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Un'esperienza unica di lusso immersa nella natura
          </p>
          <Link
            href="/prenota"
            className="bg-emerald-500 !text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl"
          >
            Prenota Ora
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Perché Scegliere le Nostre Bubble Room
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-emerald-100 rounded-full">
                <Image
                  src="/window.svg"
                  alt="Vista panoramica"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Vista Panoramica</h3>
              <p className="text-gray-700">
                Goditi una vista mozzafiato del cielo stellato dalla tua bubble privata
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-emerald-100 rounded-full">
                <Image
                  src="/globe.svg"
                  alt="Natura incontaminata"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Natura Incontaminata</h3>
              <p className="text-gray-700">
                Immergiti nella tranquillità della natura selvaggia
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-emerald-100 rounded-full">
                <Image
                  src="/file.svg"
                  alt="Comfort di lusso"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Comfort di Lusso</h3>
              <p className="text-gray-700">
                Esperienza di glamping con tutti i comfort di un hotel di lusso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            La Nostra Galleria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              <Image
                src="/download.jpeg"
                alt="Interno Bubble Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              <Image
                src="/download.jpeg"
                alt="Vista Notturna"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              <Image
                src="/download.jpeg"
                alt="Colazione all'alba"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Cosa Dicono i Nostri Ospiti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <p className="text-gray-700 italic mb-6">
                "Un'esperienza magica! Dormire sotto le stelle è stato indimenticabile. Il comfort e il servizio sono stati impeccabili."
              </p>
              <p className="font-semibold text-gray-900">Marco e Laura</p>
              <p className="text-sm text-gray-600">Milano</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <p className="text-gray-700 italic mb-6">
                "La combinazione perfetta tra natura e lusso. La bubble room è un'oasi di pace con una vista mozzafiato."
              </p>
              <p className="font-semibold text-gray-900">Sofia R.</p>
              <p className="text-sm text-gray-600">Roma</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <p className="text-gray-700 italic mb-6">
                "Struttura eccezionale e personale super disponibile. Un'esperienza che consiglio a tutti gli amanti della natura."
              </p>
              <p className="font-semibold text-gray-900">Giovanni e Francesca</p>
              <p className="text-sm text-gray-600">Torino</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}