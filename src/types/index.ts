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
  html?: string;
}

export interface PostNode {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    description: string;
    featured: boolean;
    date: string;
    banner: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
  html?: string;
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
  fbUrl: string;
  githubUrl: string;
}

export enum PageType {
  List = 'List',
  Post = 'Post',
  Tag = 'Tag',
  NotFound = '404',
}
