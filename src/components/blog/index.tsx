import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BlogListProps } from "../../../types";

const BlogList: FC<BlogListProps> = ({ blogList }) => {
  return (
    <div className="max-w-6xl m-auto p-3 space-y-4">
      {blogList.map((item) => (
        <Link href={`/blog/${item.title}`} key={item.imageUrl}>
          <div className="space-y-1 shadow-md pb-2 rounded-md overflow-hidden">
            <div className="aspect-30/9 relative">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <p className="font-semibold p-3">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
