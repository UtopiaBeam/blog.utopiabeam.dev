import React from 'react';
import { Link } from 'gatsby';

interface Props {
  numPage: number;
  currentPage: number;
}

export default ({ numPage, currentPage }: Props) => {
  return (
    <>
      <Link to="/">{'<<'}</Link>
      {currentPage === 1 ? null : (
        <Link to={currentPage === 2 ? '/' : `page/${currentPage - 1}`}>
          {'<'}
        </Link>
      )}
      {currentPage}
      {currentPage === numPage ? null : (
        <Link to={`page/${currentPage + 1}`}>{'>'}</Link>
      )}
      <Link to={`/page/${numPage}`}>{'>>'}</Link>
    </>
  );
};
