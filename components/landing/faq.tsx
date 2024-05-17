import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, FAQProp } from "@/constants/faq";

export default function FAQ() {
  return (
    <>
      <section className="py-6 bg-white text-black">
        <div className="py-8 px-4 sm:mx-12 max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="p-4 text-lg font-semibold">
            <h2>Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {FAQS.map((faq: FAQProp) => (<div key={faq.title}>
                <AccordionItem  value={faq.title}>
              <AccordionTrigger className="font-semibold text-left">{faq.title}</AccordionTrigger>
              <AccordionContent className="text-left text-neutral-800 text-base">
                {faq.description}
              </AccordionContent>
            </AccordionItem>
            </div>))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
