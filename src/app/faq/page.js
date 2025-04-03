'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      domanda: 'Cosa è incluso nel prezzo della Bubble Room?',
      risposta: 'Il prezzo include il pernottamento nella bubble room completamente attrezzata, colazione gourmet, accesso alle aree comuni, servizio di concierge 24/7, e kit di benvenuto con prodotti locali.'
    },
    {
      domanda: 'Come funziona il sistema di climatizzazione?',
      risposta: 'Ogni bubble è dotata di un sistema di climatizzazione silenzioso e efficiente che mantiene la temperatura ideale in ogni stagione, garantendo il massimo comfort.'
    },
    {
      domanda: 'La bubble è sicura in caso di maltempo?',
      risposta: 'Sì, le nostre bubble sono costruite con materiali resistenti e certificate per resistere a condizioni meteorologiche avverse. Inoltre, disponiamo di protocolli di sicurezza e un sistema di monitoraggio costante.'
    },
    {
      domanda: 'Ci sono servizi di ristorazione disponibili?',
      risposta: 'Offriamo servizio in camera per colazione, pranzo e cena. Inoltre, il nostro ristorante gourmet propone menu stagionali con prodotti locali. È possibile anche organizzare cene private nella vostra bubble.'
    },
    {
      domanda: 'Come si raggiunge la struttura?',
      risposta: 'La struttura è facilmente raggiungibile in auto. Forniamo indicazioni dettagliate al momento della prenotazione. È disponibile anche un servizio di transfer su richiesta.'
    },
    {
      domanda: 'Quali attività sono disponibili durante il soggiorno?',
      risposta: 'Offriamo diverse attività: osservazione delle stelle con astronomo, escursioni guidate, yoga all\'alba, degustazioni di vini locali, e massaggi in bubble. Tutte le attività sono prenotabili in anticipo.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
          Domande Frequenti
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12">
          Tutto quello che devi sapere sulla tua esperienza in Bubble Room
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-gray-900">{faq.domanda}</span>
                <svg
                  className={`w-6 h-6 text-gray-700 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.risposta}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}