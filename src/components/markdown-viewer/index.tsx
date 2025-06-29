/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useCallback, useEffect, useState } from "react";

import MarkdownPreview from "@uiw/react-markdown-preview";
import axios from "axios";

const MarkdownViewer = ({ url }: { url: string }) => {
  const [markdown, setMarkdown] = useState("");

  const fetchMarkdown = useCallback(async () => {
    try {
      const { data } = await axios.get(url);
      setMarkdown(data);
    } catch (error: any) {
      console.log("Error fetching markdown");
    }
  }, [url]);

  useEffect(() => {
    fetchMarkdown();
  }, [fetchMarkdown]);

  return (
    <div
      data-color-mode="light"
      className="prose prose-img:w-[1000px] max-w-5xl  m-auto p-3"
    >
      <MarkdownPreview source={markdown} />
    </div>
  );
};

export default MarkdownViewer;
