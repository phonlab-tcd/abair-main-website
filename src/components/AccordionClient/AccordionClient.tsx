"use client";

import { useEffect, useState, ReactNode } from "react";
import { Accordion } from "abair-web-components";

interface AccordionClientProps {
  content: ReactNode;
}

const AccordionClient = ({ content }: AccordionClientProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("isOpen:", isOpen);
  }, [isOpen]);

  return (
    <Accordion
      content={content}
      isOpen={isOpen}
      handleClick={() => {
        setIsOpen(!isOpen);
      }}
    />
  );
};

export default AccordionClient;
