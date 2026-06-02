import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  id?: string;
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ id, items, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      if (openIndexes.includes(index)) {
        setOpenIndexes([]);
      } else {
        setOpenIndexes([index]);
      }
    }
  };

  return (
    <div id={id} className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className={`border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
              isOpen ? "shadow-md shadow-slate-100 border-amber-500/20" : "hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-slate-900 transition-colors cursor-pointer outline-none focus:bg-slate-50"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg">{item.question}</span>
              <span
                className={`p-1.5 rounded-xl bg-slate-50 text-slate-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-amber-50 text-amber-500" : ""
                }`}
              >
                <ChevronDown size={18} />
              </span>
            </button>

            {/* Collapsible Panel */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden max-h-0 ${
                isOpen ? "max-h-[500px] border-t border-slate-100" : ""
              }`}
            >
              <div className="p-5 text-sm md:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
