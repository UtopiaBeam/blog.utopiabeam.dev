import { FluidObject } from 'gatsby-image';

export interface Tag {
  title: string;
  slug: string;
  description: string;
  banner: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface Post extends Tag {
  date: string;
}

export interface Tab {
  name: string;
  href: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
}

export enum PageType {
  List = 'List',
  Post = 'Post',
  Tag = 'Tag',
}
