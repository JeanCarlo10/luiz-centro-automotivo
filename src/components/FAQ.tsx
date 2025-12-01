import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Com que frequência devo fazer a revisão do meu carro?',
    answer: 'Recomendamos revisões a cada 10.000 km ou 6 meses, o que ocorrer primeiro. Consulte sempre o manual do seu veículo para recomendações específicas do fabricante.'
  },
  {
    question: 'Quando devo trocar o óleo do motor?',
    answer: 'A troca de óleo deve ser feita geralmente a cada 5.000 a 10.000 km, dependendo do tipo de óleo usado (mineral ou sintético) e das condições de uso do veículo. Óleo sintético pode durar mais.'
  },
  {
    question: 'Como sei se meus freios precisam de manutenção?',
    answer: 'Sinais como ruídos ao frear, vibração no pedal, pedal muito macio ou muito duro, e tempo de frenagem aumentado indicam necessidade de verificação. Recomendamos inspeção a cada 10.000 km.'
  },
  {
    question: 'Qual a vida útil dos pneus?',
    answer: 'Pneus duram em média de 40.000 a 80.000 km, dependendo da qualidade, uso e manutenção. Verifique regularmente a pressão, alinhamento e balanceamento. Troque quando o sulco atingir 1,6mm de profundidade.'
  },
  {
    question: 'O que é alinhamento e balanceamento?',
    answer: 'Alinhamento ajusta os ângulos das rodas conforme especificação do fabricante. Balanceamento distribui o peso uniformemente nas rodas. Ambos evitam desgaste irregular dos pneus e melhoram a dirigibilidade.'
  },
  {
    question: 'Quando trocar a bateria do carro?',
    answer: 'Baterias duram em média 2 a 4 anos. Sinais de problemas: dificuldade para dar partida, luzes fracas, bateria com mais de 3 anos. Faça testes preventivos anualmente após o segundo ano.'
  },
  {
    question: 'Como prolongar a vida útil do meu veículo?',
    answer: 'Faça revisões regulares, use peças de qualidade, troque fluidos nos períodos recomendados, dirija suavemente, mantenha o carro limpo e protegido, e atenda prontamente a qualquer sinal de problema.'
  },
  {
    question: 'O que fazer quando a luz do motor acende?',
    answer: 'A luz do motor indica problema no sistema eletrônico. Não ignore! Procure uma oficina para diagnóstico com scanner. Pode ser algo simples ou sério. Quanto antes identificar, menor o risco de danos maiores.'
  }
];

const FAQ = () => {
  return (
    <section id="dicas" className="py-20 bg-(--background)">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dicas e <span className="text-(--primary)">Perguntas Frequentes</span>
          </h2>
          <p className="text-lg text-(--muted-foreground) max-w-2xl mx-auto">
            Tire suas dúvidas sobre manutenção automotiva
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-(--card) border-(--border) border rounded-lg px-6 animate-fade-in"
              >
                <AccordionTrigger className="text-left hover:text-(--primary)">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-(--muted-foreground)">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
