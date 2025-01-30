import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImagesData, getImagesStatus } from "../features/images/imagesSlice";
import { imagesThunk } from "../features/images/imagesThunk";
import { ImagesComponent } from "../components/imgComponentes/imagesComponent";
import { searchImagesThunk } from "../features/images/imagesThunk";
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";
export const HomePage = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const imagesData = useSelector(getImagesData);
  const imagesStatus = useSelector(getImagesStatus);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (imagesStatus === "idle") {
      dispatch(imagesThunk());
    } else if (imagesStatus === "fulfilled") {
      setData(imagesData);
      setIsLoading(false);
    } else if (imagesStatus === "rejected") {
      setIsLoading(false);
      alert("Error");
    }
  }, [imagesData, imagesStatus, dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      if (location.pathname === "/") {
        dispatch(searchImagesThunk(searchTerm));
      }
    }
  };

  return (
    <>
      <div>
        <header className="header">
          <img
            className="header__image"
            src="/img/pexels-photo-1655166.jpeg"
            alt="Mar_foto"
          />
          <h2 className="header__title">
            WELCOME TO YOUR <br /> IMAGE COLLECTION
          </h2>
          <p className="header__text">
            Explore, save, and organize your favorite <br /> images all in one
            place
          </p>
          <form onSubmit={handleSearch}>
            <input
              className="header__search"
              type="text"
              placeholder="Find your perfect image"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <button className="header__button">
              <CiSearch />
            </button>
          </form>
        </header>
        <ImagesComponent data={data} type="images" />
      </div>
    </>
  );
};
