import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { PageType } from '../types';

interface Props {
  title?: string;
  description?: string;
  banner?: string;
  slug?: string;
  date?: string;
  type: PageType;
}

export default (props: Props) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);
  const siteMetadata = data.site.siteMetadata;
  const {
    title,
    description = siteMetadata.description,
    banner,
    slug,
    date,
    type,
  } = props;
  const meta = [
    {
      name: 'name',
      content: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'author',
      content: siteMetadata.author,
    },
    {
      name: 'image',
      content: `${siteMetadata.siteUrl}${banner}`,
    },
    {
      property: 'og:url',
      content: `${siteMetadata.siteUrl}${slug}`,
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:locale',
      content: 'th_TH',
    },
    {
      property: 'og:locale:alternate',
      content: 'en_US',
    },
    {
      property: 'og:title',
      content: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
    },
    {
      name: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${siteMetadata.siteUrl}${banner}`,
    },
    {
      property: 'og:image:secure_url',
      content: `${siteMetadata.siteUrl}${banner}`,
    },
  ];
  return (
    <Helmet
      title={title ? `${title} | ${siteMetadata.title}` : siteMetadata.title}
      meta={meta}
    >
      <script type="application/application/ld+json">
        {type === PageType.Post
          ? `
          {
            "@context": "http://schema.org/",
            "@type" : "Article",
            "mainEntityOfPage" : {
              "@type" : "Webpage",
              "@id" : "https://arnondora.in.th"
            }
            "author" : {
              "@type" : "Person",
              "name" : "${siteMetadata.author}"
            },
            "image" : "${banner}",
            "headline" : ${title},
            "datePublished" : "${date}",
            "description" : "${description}"
          }`
          : `{
            "@context": "http://schema.org/",
            "@type" : "Website",
            "url" : "${siteMetadata.siteUrl}"
          }`}
      </script>
    </Helmet>
  );
};
