interface AccordionItem {
  title: string;
  content: string;
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

export type { AccordionItem, CustomAccordionProps };
