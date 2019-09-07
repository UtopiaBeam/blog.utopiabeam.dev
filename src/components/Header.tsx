import React from 'react';
import Navbar from './Navbar';
import { Flex, Heading } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

interface Site {
  siteMetadata: {
    description: string;
  };
}

interface Props {
  banner?: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  title?: string;
  description?: string;
}

interface Data {
  site: Site;
}

const Logo = ({ title }): JSX.Element => {
  return (
    <Heading
      textAlign="center"
      fontFamily="Space Mono, monospace"
      fontWeight={700}
      fontSize={[36, 48, 60]}
      color="#ffffff"
      pb={5}
    >
      <Flex>
        <div style={{ color: 'rgb(255, 165, 0)' }}>{'{'}</div>
        {title ? title : 'UtopiaBeam'}
        <div style={{ color: 'rgb(255, 165, 0)' }}>{'}'}</div>
      </Flex>
    </Heading>
  );
};

const Description = ({ desc, fontFamily, fontWeight }): JSX.Element => {
  return (
    <Heading
      textAlign="center"
      fontFamily={`${fontFamily}, sans-serif`}
      fontWeight={fontWeight}
      fontSize={[18, 22, 26]}
      letterSpacing={2}
      color="rgba(250, 250, 250, 0.8)"
      mx={[3, 4, 5]}
    >
      {desc}
    </Heading>
  );
};

export default (props: Props) => {
  const { banner, title, description } = props;
  const { site }: Data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        height={350}
        flexDirection="column"
        css={{
          background: `url(${
            banner ? banner.childImageSharp.fluid.src : '../../bg.jpg'
          }) center center no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <Logo title={title} />
        <Description
          desc={description ? description : site.siteMetadata.description}
          fontFamily={description ? 'Kanit' : 'Catamaran'}
          fontWeight={description ? 300 : 400}
        />
      </Flex>
      <Navbar />
    </>
  );
};
