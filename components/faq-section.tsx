"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus, Minus } from "lucide-react"
import { CtaBanner } from "./cta-banner"

const FAQ_ITEMS = [
  {
    id: "recurring-fees",
    question: "Are there any recurring license fees?",
    answer: "No, Ohio theme is a one-time purchase. You get lifetime updates and support without any hidden costs.",
  },
  {
    id: "purchase-includes",
    question: "What is included with my purchase of Ohio theme?",
    content: (
      <div className="space-y-4 text-gray-400">
        <p>
          With your purchase of <span className="text-[#FF4D4D]">Ohio</span>, you will receive:
        </p>
        <ul className="list-disc space-y-3 pl-5 marker:text-gray-600">
          <li>
            6 Months of professional support. The valid support period starts from the date of purchase. You can{" "}
            <span className="text-[#FF4D4D] underline cursor-pointer hover:no-underline">renew or extend</span> a
            support period if additional help is required.
          </li>
          <li>The option to register/detach a single staging/dev/local site per top-level domain.</li>
          <li>
            3 Bundled premium plugins: WPBakery Page Builder, Slider Revolution and Advanced Custom Fields Pro at no
            extra cost.
          </li>
          <li>
            54+ prebuilt demo templates that can be imported with a few clicks, and all of which are highly
            customizable.
          </li>
          <li>
            Figma{" "}
            <span className="text-[#FF4D4D] underline cursor-pointer hover:no-underline">design source files</span> with{" "}
            <span className="text-[#FF4D4D]">Ohio</span> demo templates.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "figma-files",
    question: "Where do I find the Figma design source files?",
    answer:
      "You can find the Figma source files in the downloads section of your account or within the theme package documentation.",
  },
  {
    id: "support",
    question: "Where can I get customer support?",
    answer: "We provide support through our dedicated help desk and documentation portal.",
  },
  {
    id: "presale",
    question: "Have a presale question?",
    answer: "Feel free to reach out to our sales team via the contact form on our website.",
  },
]

export function FaqSection() {
  return (
    <div className="w-full bg-[#211e28] container mx-auto p-10 rounded-t-2xl">
      <h2 className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        Frequently asked <br /> questions.
      </h2>

      <div className="max-w-4xl mx-auto mt-8">
        <Accordion type="single" collapsible defaultValue="purchase-includes" className="w-full">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-b border-gray-800/50 py-2 last:border-0">
            <AccordionTrigger className="group flex w-full items-center gap-4 py-6 text-left hover:no-underline">
              <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                <Plus className="absolute h-4 w-4 text-gray-400 transition-all duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                <Minus className="absolute h-4 w-4 text-gray-400 opacity-0 transition-all duration-300 group-data-[state=open]:rotate-0 group-data-[state=open]:opacity-100" />
              </div>
              <span className="text-lg font-bold text-white transition-colors md:text-xl">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-8 pl-9 text-base text-center leading-relaxed text-gray-400">
              {item.content || item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </div>
      
    </div>
  )
}
