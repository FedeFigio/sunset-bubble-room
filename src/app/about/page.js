import Image from "next/image";

export default function About() {
  const values = [
    {
      title: "Sostenibilità",
      description: "Ci impegniamo a minimizzare il nostro impatto ambientale attraverso pratiche eco-sostenibili",
      icon: "/globe.svg"
    },
    {
      title: "Innovazione",
      description: "Combiniamo tecnologia e natura per creare esperienze uniche e indimenticabili",
      icon: "/window.svg"
    },
    {
      title: "Eccellenza",
      description: "Curiamo ogni dettaglio per garantire ai nostri ospiti un servizio di altissima qualità",
      icon: "/file.svg"
    }
  ];

  const team = [
    {
      name: "Marco Rossi",
      role: "Fondatore & CEO",
      image: "/download.jpeg"
    },
    {
      name: "Laura Bianchi",
      role: "Direttore Ospitalità",
      image: "/download.jpeg"
    },
    {
      name: "Giuseppe Verdi",
      role: "Chef Esecutivo",
      image: "/download.jpeg"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center mb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bubble.jpg"
            alt="Chi Siamo - Bubble Room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 !text-white">Chi Siamo</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Scopri la storia e le persone dietro l'esperienza unica di Bubble Room
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/download.jpeg"
              alt="La nostra storia"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">La Nostra Storia</h2>
            <p className="text-gray-700 mb-4">
              Bubble Room nasce dalla passione per la natura e il desiderio di offrire un'esperienza di soggiorno unica nel suo genere. Nel 2020, abbiamo trasformato un sogno in realtà, creando un luogo dove le persone possono riconnettersi con la natura senza rinunciare al comfort.
            </p>
            <p className="text-gray-700">
              Oggi, continuiamo a innovare e migliorare l'esperienza dei nostri ospiti, mantenendo sempre al centro la sostenibilità e il rispetto per l'ambiente che ci circonda.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">I Nostri Valori</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-emerald-100 rounded-full">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-700 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Il Nostro Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
