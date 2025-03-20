import { PortableTextBlock } from "next-sanity";

export interface SanityImageSource {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface BlogContent {
  title: string;
  description: string;
  additionalImages: SanityImageSource[];
  mainImage: SanityImageSource;
  slug: {
    current: string;
  };
  content: PortableTextBlock[];
  excerpt: string;
  publishedAt: string;
  _id: string;
  author: string;
}
