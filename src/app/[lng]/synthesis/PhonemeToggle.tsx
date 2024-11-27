import React, { useState } from "react";

interface PhonemeToggleProps {
  text: string;
  phonemes: string;
}

const PhonemeToggle: React.FC<PhonemeToggleProps> = ({ text, phonemes }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Title with Underline and Toggle Button */}
      <div className="text-grey-500 mt-4">
        <button
          className="p-1 px-2 rounded-md border border-grey-400 flex"
          onClick={toggleVisibility}
          aria-label="Toggle Phoneme Visibility"
        >
          <div className="mt-0 text-base">{text}</div>
          {isVisible ? (
            <span>&#9650;</span> // Upward arrow
          ) : (
            <span>&#9660;</span> // Downward arrow
          )}
        </button>
      </div>

      {/* Main Text Content */}

      {/* Synthesis Phoneme Content */}
      {isVisible && phonemes && (
        <div
          className="text bg-grey-100 rounded-md text-gray-500 p-1"
          dangerouslySetInnerHTML={{ __html: phonemes }}
        />
      )}
    </div>
  );
};

export default PhonemeToggle;
