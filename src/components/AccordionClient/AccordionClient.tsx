"use client";

import { useEffect, useState } from "react";
import { Accordion } from "abair-web-components";

interface AccordionClientProps {
  content: string;
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
