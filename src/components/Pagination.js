import React from "react";

const components = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a href="!#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default components;
