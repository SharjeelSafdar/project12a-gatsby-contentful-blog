import { FluidObject } from "gatsby-image";

export type BlogPostType = {
  slug: string;
  title: string;
  publishDate: string;
  excerpt: { raw: string };
  featuredImage: { fluid: FluidObject };
  content?: {
    raw: string;
    references: { fluid: FluidObject }[];
  };
  author?: string;
};
