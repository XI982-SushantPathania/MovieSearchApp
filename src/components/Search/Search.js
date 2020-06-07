import React, { useState } from "react";
import styles from './Search.css'
import {useDispatch, useSelector } from "react-redux";
import {postSearch} from '../../store/actions/search';
import Movies from '../Movies/Movie';
import Header from '../Header/Header';
import Loader from '../Loader/Loader'



const Search = () => {
  const dispatch = useDispatch();
  const movieState = useSelector((state) => state.searchState);
console.log("movieState",movieState);
console.log("S!!!!",movieState.movieSearchData)

  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");


  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
    setError("")
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    if(searchValue == ""){
      let error=""
      error="please enter some value to search";
      setError(error);
    }
    else{
    dispatch(postSearch(searchValue));
    resetInputField();
    }
  };

  return (
    <>
    {movieState.isLoading ? 
    <Loader/>:null}
         <Header/>
    <div className={styles.formContainer}>
    <form className={styles.search}>
      <div>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
            </div>
            <div className={styles.error}>
             {error}
            </div>
    </form>
    <div>
      {movieState.movieSearchData !== null ?
    <Movies movies={movieState.movieSearchData}/>
    :null}
    </div>
    
    </div>
    
    </>
  );
};

export default Search;
