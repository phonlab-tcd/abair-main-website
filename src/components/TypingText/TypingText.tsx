/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  color: string;
  delayToStart?: number;
  delayForward?: number;
  delayBackward?: number;
  delayToDelete?: number;
  forward?: boolean;
}

const TypingText = ({
  text,
  color,
  delayToStart = 0,
  delayForward = 40,
}: TypingTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [cursorHidden, setCursorHidden] = useState(false);
  const [cursorBlinking, setCursorBlinking] = useState(true);

  const typeNextCharacter = () => {
    setDisplayText(text.slice(0, index + 1) + "|");
    setIndex(index + 1);
  };

  useEffect(() => {
    if (cursorBlinking) {
      if (index === 0) {
        cursorHidden ? setDisplayText("|") : setDisplayText("");
        setTimeout(() => {
          setCursorHidden(!cursorHidden);
        }, 500);
      } else {
        cursorHidden
          ? setDisplayText(text + "|")
          : setDisplayText(text + "\u00a0");
        setTimeout(() => {
          setCursorHidden(!cursorHidden);
        }, 500);
      }
    }
  }, [cursorHidden]);

  useEffect(() => {
    // if (forward) {
    if (index === 0) {
      setTimeout(() => {
        setCursorHidden(true);
      }, 200);
      setTimeout(() => {
        setCursorBlinking(false);
        typeNextCharacter();
      }, delayToStart);
    } else if (index < text.length) {
      setTimeout(typeNextCharacter, delayForward);
    } else if (index === text.length) {
      if (text === "Speech Technologies") {
        setDisplayText(text);
      } else {
        setDisplayText(text + "|");
      }
      // setCursorBlinking(true);
      // setCursorHidden(!cursorHidden);
    }
  }, [index]);

  return <div className={color}>{displayText}</div>;
};

export default TypingText;
