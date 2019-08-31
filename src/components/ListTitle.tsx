import React from 'react';
import { Heading } from 'rebass';

interface Props {
  title: string;
}

export default ({ title }: Props) => {
  return (
    <>
      <Heading
        as="h1"
        fontFamily="Athiti, sans-serif"
        fontWeight={700}
        fontSize={[36, 38, 40]}
        p={3}
      >
        {title}
      </Heading>
      <hr />
    </>
  );
};
