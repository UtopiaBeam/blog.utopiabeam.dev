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
