import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the primary function of The Profilr?",
    answer: "The Profilr's primary function is automated data profiling and validation. It quickly generates statistical summaries and analyzes data distributions using a dedicated Python/Pandas core.",
    value: "item-1",
  },
  {
    question: "Why did you use three separate microservices?",
    answer:
      "We used a microservices architecture (FastAPI, Node/Express, React) to demonstrate best practices in modern software engineering, ensuring scalability and separation of concerns for security and performance.",
    value: "item-2",
  },
  {
    question:
      "How can I view the technical documentation and API routes?",
    answer:
      "All technical details, setup instructions, and API routes are available on our project's GitHub Repository. This is required for our third-year academic submission.",
    value: "item-3",
  },
  {
    question: "Is this tool suitable for large, production datasets?",
    answer: "While currently limited by student deployment resources, the architecture (FastAPI + MongoDB) is designed to scale horizontally to handle large datasets in a production environment.",
    value: "item-4",
  },
  {
    question:
      "How is user authentication managed?",
    answer:
      "User authentication is securely managed by a dedicated Node.js/Express.js service, which handles login, signup, and session management completely separately from the data processing pipeline.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left hover:no-underline">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="/about"
          className="text-primary transition-all"
        >
          Contact the Team
        </a>
      </h3>
    </section>
  );
};
