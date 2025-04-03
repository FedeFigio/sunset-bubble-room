import Image from "next/image";
import Link from "next/link";

export default function Listino() {
  const tariffe = [
    {
      nome: "Bubble Classic",
      prezzo: "299",
      periodo: "per notte",
      descrizione: "L'esperienza base per una notte magica sotto le stelle",
      caratteristiche: [
        "Camera bubble trasparente",
        "Colazione inclusa",
        "Bagno privato",
        "Wi-Fi gratuito"
      ]
    },
    {
      nome: "Bubble Deluxe",
      prezzo: "399",
      periodo: "per notte",
      descrizione: "Comfort extra per un'esperienza indimenticabile",
      caratteristiche: [
        "Camera bubble più spaziosa",
        "Colazione gourmet in camera",
        "Bagno privato di lusso",
        "Area relax privata",
        "Bottiglia di prosecco all'arrivo"
      ]
    },
    {
      nome: "Bubble Suite",
      prezzo: "599",
      periodo: "per notte",
      descrizione: "Il massimo del lusso per un'esperienza unica",
      caratteristiche: [
        "Suite bubble con zona giorno",
        "Colazione e cena gourmet",
        "Spa privata",
        "Servizio concierge dedicato",
        "Champagne e frutta all'arrivo",
        "Tour astronomico privato"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center mb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bubble.jpg"
            alt="Listino Prezzi Bubble Room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 !text-white">Listino Prezzi</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Scegli la soluzione perfetta per il tuo soggiorno da sogno
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tariffe.map((tariffa, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">{tariffa.nome}</h3>
                <p className="text-gray-600 mb-6">{tariffa.descrizione}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€{tariffa.prezzo}</span>
                  <span className="text-gray-500"> {tariffa.periodo}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tariffa.caratteristiche.map((caratteristica, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {caratteristica}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/prenota"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Prenota Ora
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-4xl mx-auto mt-20">
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Informazioni Utili</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Alta Stagione:</strong> 1 Giugno - 30 Settembre (supplemento del 20%)
            </p>
            <p className="text-gray-600">
              <strong>Check-in:</strong> dalle 15:00 • <strong>Check-out:</strong> entro le 11:00
            </p>
            <p className="text-gray-600">
              <strong>Politica di cancellazione:</strong> Gratuita fino a 7 giorni prima dell'arrivo
            </p>
            <p className="text-gray-600">
              <strong>Bambini:</strong> Benvenuti dai 6 anni in su
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
