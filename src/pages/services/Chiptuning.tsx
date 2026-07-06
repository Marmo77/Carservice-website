import Subpage from "@/components/Subpage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "@/data/company";

function FAQItem({ item }: { item: { question: string, answer: string }, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-accent border-border/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left cursor-pointer font-bold text-lg hover:text-primary py-6 px-6 flex items-center justify-between transition-colors"
      >
        <span>{item.question}</span>
        <div className="flex-shrink-0 ml-4 rounded-full p-1 bg-white border border-border">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-zinc-600 font-medium leading-relaxed text-base whitespace-pre-wrap">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Chiptuning() {
  const service = services.find(s => s.id === "chiptuning")!;

  return (
    <Subpage title={service.title} bannerImage={service.bannerImage} currentServiceId={service.id}>
      <div className="space-y-12">
        <div className="">
          {service.partnerText && (
            <p className="text-sm md:text-base font-medium text-zinc-500 mb-8">
              {service.partnerText}
            </p>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
            <div>
              <h3 className="text-2xl font-black uppercase text-zinc-900 mb-6">Oto przykładowe usługi jakie proponujemy:</h3>
              <ul className="space-y-4 list-none pl-0 m-0">
                {service.featuresList?.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden flex items-center justify-center p-6 lg:p-8">
              <img
                src="/v-tech.png"
                alt="V-tech silnik"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain max-h-[275px] drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-black uppercase text-zinc-900 mb-8">Pytania i odpowiedzi</h3>
          <div className="w-full space-y-4">
            {service.faq?.map((item: { question: string, answer: string }, index: number) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="pt-8 flex justify-center">
          <Link to="/#kontakt">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover cursor-pointer text-primary-foreground font-bold uppercase tracking-widest shadow-md transition-all hover:-translate-y-1 h-14 md:h-16 px-12 md:px-16 text-base md:text-lg">
              <span>Umów wizytę w tej sprawie</span>
            </Button>
          </Link>
        </div>
      </div>
    </Subpage>
  );
}
