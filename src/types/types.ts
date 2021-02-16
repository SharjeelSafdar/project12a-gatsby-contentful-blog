export type PostType = {
  slug: string;
  title: string;
  publishDate: string;
  excerpt: { raw: string };
  featuredImage: { fluid: GatsbyContentfulFluidType };
  content?: { raw: string };
};

export type GatsbyContentfulFluidType = {
  aspectRatio: number;
  base64: string;
  sizes: string;
  src: string;
  srcSet: string;
};
