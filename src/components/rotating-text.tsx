"use client";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "answering surveys",
  "uploading bills",
  "free coupons",
  "maintaining streak",
];

export const RotatingText = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition springConfig={presets.stiff}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
};
