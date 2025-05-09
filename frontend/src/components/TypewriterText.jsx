import React, { useEffect, useState } from "react";

const TypewriterText = ({ texts, speed = 100, pause = 1500 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];
    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, speed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, speed / 2);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span className="font-medium text-base-content/60">{displayedText}|</span>
  );
};

export default TypewriterText;
