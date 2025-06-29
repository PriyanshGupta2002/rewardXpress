import BlogList from "@/components/blog";
import { envVars } from "@/lib/constants";

import axios from "axios";
import React from "react";
import { BlogDataType } from "../../../types";

const blogPage = async () => {
  const {
    data,
  }: {
    data: BlogDataType[];
  } = await axios.get(`${envVars.baseUrl}/blogPosts`);
  console.log(data);

  return (
    <>
      <BlogList blogList={data} />
    </>
  );
};

export default blogPage;
