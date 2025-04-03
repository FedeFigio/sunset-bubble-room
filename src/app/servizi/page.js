import Image from "next/image";

export default function Servizi() {
  const servizi = [
    {
      titolo: "Colazione Gourmet",
      descrizione: "Inizia la giornata con una colazione di qualità servita direttamente nella tua bubble",
      icona: "/download.jpeg"
    },
    {
      titolo: "Osservazione Stelle",
      descrizione: "Sessioni guidate di osservazione astronomica con un esperto",
      icona: "/download.jpeg"
    },
    {
      titolo: "Spa Privata",
      descrizione: "Massaggi e trattamenti benessere nella privacy della tua bubble",
      icona: "/download.jpeg"
    },
    {
      titolo: "Tour Naturalistici",
      descrizione: "Escursioni guidate alla scoperta del territorio circostante",
      icona: "/download.jpeg"
    }
  ];

  const pacchetti = [
    {
      nome: "Pacchetto Romantico",
      include: [
        "Bottiglia di champagne all'arrivo",
        "Cena gourmet a lume di candela",
        "Massaggio di coppia",
        "Colazione in bubble"
      ]
    },
    {
      nome: "Pacchetto Avventura",
      include: [
        "Tour guidato in mountain bike",
        "Picnic gourmet nella natura",
        "Sessione di osservazione stelle",
        "Kit avventura in omaggio"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center mb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bubble.jpg"
            alt="Servizi Bubble Room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 !text-white drop-shadow-lg">I Nostri Servizi</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-100 drop-shadow-md">
            Scopri tutti i servizi esclusivi per rendere il tuo soggiorno indimenticabile
          </p>
        </div>
      </section>

      {/* Servizi Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Servizi Esclusivi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servizi.map((servizio, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-emerald-100 rounded-full">
                <Image
                  src={servizio.icona}
                  alt={servizio.titolo}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">{servizio.titolo}</h3>
              <p className="text-gray-700 text-center">{servizio.descrizione}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pacchetti Section */}
      <section className="bg-emerald-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pacchetti Speciali</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pacchetti.map((pacchetto, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">{pacchetto.nome}</h3>
                <ul className="space-y-4">
                  {pacchetto.include.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}