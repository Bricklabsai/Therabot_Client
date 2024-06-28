import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, FAQProp } from "@/constants/faq";
import Link from 'next/link'

export default function FAQ({ preview = false }: { preview?: boolean }) {
  let faqs = FAQS;
  if (preview) {
    faqs = FAQS.slice(0, 6);
  }
  return (
    <div className="flex flex-col items-center">
        <div className="container mx-auto px-6 py-8 lg:px-20 md:w-2/3  sm:mx-24 text-center lg:py-16 z-10 relative">
          <div className="p-4 text-xl md:text-4xl font-semibold">
            <h2>Frequently Asked Questions</h2>
          </div>
          <br />
          <br />
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq: FAQProp) => (
              <div key={faq.title}>
                <AccordionItem className="py-2 bg-purple-50 border-b-0 dark:bg-neutral-800 rounded-md px-4" value={faq.title}>
                  <AccordionTrigger className="font-semibold hover:no-underline text-left">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-left text-neutral-800 bg-purple-50 dark:text-gray-50 dark:bg-neutral-800 text-base">
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
          {preview && (
            <>
              <br />
              <Link
                className="py-2 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-primary-dark shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/faqs"
              >
                Read more
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </>
          )}
        </div>
        </div>


  );
}
