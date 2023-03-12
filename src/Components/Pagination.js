import { useState } from "react";

const Pagination = ({ movies, itemsPerPage, currentPage, setCurrentPage }) => {
  let [active, setActive] = useState(true);
  console.log(movies);

  let numberOfPages = [];

  for (let i = 1; i <= Math.ceil(movies.length / itemsPerPage); i++) {
    numberOfPages.push(i);
  }

  function showNextMovieHandler(e) {
    setCurrentPage(e.target.id);
    setActive(!active);
  }

  let pages = numberOfPages.map((item) => {
    return (
      <li id={item} onClick={showNextMovieHandler}>
        {item}
      </li>
    );
  });

  return <ul className="pagination">{pages}</ul>;
};

export default Pagination;
