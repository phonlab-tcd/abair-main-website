"use client";

import { useEffect, useState, ReactNode } from "react";
import { Accordion } from "abair-web-components";

interface AccordionClientProps {
  content: ReactNode;
  title: string;
  open?: boolean;
  search?: boolean;
}

const AccordionClient = ({
  title,
  content,
  open = false,
  search = false,
}: AccordionClientProps) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Accordion
      search={search}
      title={title}
      content={<div className="p-2">{content}</div>}
      isOpen={isOpen}
      handleClick={() => {
        setIsOpen(!isOpen);
      }}
    />
  );
};

export default AccordionClient;
