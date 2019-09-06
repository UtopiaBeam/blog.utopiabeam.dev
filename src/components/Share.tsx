import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Text, Flex, Box } from 'rebass';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';

interface Props {
  title: string;
  slug: string;
}

const Item = props => <Box {...props} pr={3} />;

const Label = props => (
  <Text
    {...props}
    fontSize={[18, 22]}
    fontFamily="Kanit, sans-serif"
    fontWeight={400}
    color="rgb(60, 60, 60)"
    pr={3}
    pb={2}
  >
    Share this post :
  </Text>
);

export default ({ title, slug }: Props) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          author
        }
      }
    }
  `);
  const { siteUrl, author } = data.site.siteMetadata;
  const postUrl = siteUrl + slug;

  return (
    <>
      <hr />
      <Flex flexWrap="wrap">
        <Label />
        <Flex alignItems="center">
          <Item>
            <FacebookShareButton url={postUrl}>
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
          </Item>
          <Item>
            <TwitterShareButton url={postUrl} title={`${title} by ${author}\n`}>
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </Item>
          <Item>
            <LineShareButton url={postUrl} title={`${title} by ${author}\n`}>
              <LineIcon size={40} round={true} />
            </LineShareButton>
          </Item>
        </Flex>
      </Flex>
    </>
  );
};
