import React from "react";

export interface DownloadBtnTypes {
  provider: "App Store" | "Google Play";
  text: string;
  appLink: string;
  svgLink: string;
}

export interface ProcessCardsProps {
  text: string;
  Icon: React.ReactNode;
}

export interface FAQAccordionProps {
  faq: faqResponse[];
}

export interface faqResponse {
  question: string;
  answer: string;
}
