import { useState } from "react";
import Pagination from "./Pagination";

const Movies = ({ movies }) => {
  const [popupcontent, setPopupContent] = useState([]);
  const [popuptoggle, setPopupToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;

  let showTheseItems = movies.slice(indexOfFirstItem, indexOfLastItem);
  let img_url = "https://image.tmdb.org/t/p/w500";

  const changeContent = (item) => {
    setPopupContent([item]);
    setPopupToggle(!popuptoggle);
  };

  return (
    <div className="container">
      <div className="movies">
        <ul className="movies-ul">
          {showTheseItems.map((item) => {
            return (
              <li className="listItem">
                <img src={img_url + item.poster_path} alt="" />
                <h3>{item.title}</h3>
                <div className="wrapper">
                  <h4>{item.release_date}</h4>
                  <button onClick={() => changeContent(item)}>View More</button>
                </div>
              </li>
            );
          })}
        </ul>
        <Pagination
          movies={movies}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {popuptoggle && (
        <div className="popup-container">
          <div className="popup-body">
            <div className="popup-header">
              <button onClick={changeContent}>x</button>
            </div>
            <div className="popup-content">
              {popupcontent.map((popItem) => {
                return (
                  <div className="popup-card">
                    <img src={img_url + popItem.poster_path} alt="" />
                    <div className="popup-card-details">
                      <h1>{popItem.title}</h1>
                      <p>
                        <span>IMDb - {popItem.vote_average}</span>
                      </p>
                      <p>{popItem.overview}</p>
                      <h4>Release Date : {popItem.release_date}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;

