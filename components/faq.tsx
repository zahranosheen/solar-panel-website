export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: 'How much can I save with solar energy?',
      answer: 'Most of our customers save 50-80% on their energy bills. The exact amount depends on your current energy usage, location, and system size. We provide a free detailed analysis.',
    },
    {
      id: 2,
      question: 'What is the installation timeline?',
      answer: 'Residential installations typically take 1-3 days. The timeline depends on system size and roof complexity. Commercial projects may take longer based on requirements.',
    },
    {
      id: 3,
      question: 'Do I need a battery storage system?',
      answer: 'Battery storage is optional but recommended for energy independence and backup power. Many customers start with just solar panels and add storage later.',
    },
    {
      id: 4,
      question: 'What maintenance is required?',
      answer: 'Solar systems require minimal maintenance. We recommend occasional cleaning and annual inspections to ensure optimal performance. We offer maintenance packages.',
    },
    {
      id: 5,
      question: 'Are there government incentives available?',
      answer: 'Yes! The federal solar tax credit, state rebates, and local incentives can significantly reduce your installation costs. We help you understand all available options.',
    },
    {
      id: 6,
      question: 'What happens if my system produces excess energy?',
      answer: 'Excess energy can be stored in batteries or sent to the grid. Many utilities offer net metering, crediting you for the energy you contribute to the grid.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our solar solutions
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-foreground">
                {faq.question}
                <span className="transition group-open:rotate-180 text-primary">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
