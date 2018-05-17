import React from 'react';
import Header from '../../../components/Header';
import { SearchFilters } from '../../../redux/actions';
import SearchButton from './SearchButton.jsx';
// import SearchForm from './SearchForm.jsx';


const SearchPageHeader = ({ searchFilter, setSearchFilter, getAllFilms, sortType }) => {
  let textInput;
  return (
    <div className="pageHeader">
      <div className="container">
        <Header />
        <div className="searchForm">
          <h3>Find your movie</h3>
          <input type="text" className="searchForm__input" ref={(node) => { textInput = node; }} />
          <div className="searchForm__footer">
            <div className="searchForm__searchCriteria">
              <span>Search by</span>
              <SearchButton setSearchFilter={setSearchFilter} filter='title' searchFilter={searchFilter}>Title</SearchButton>
              <SearchButton setSearchFilter={setSearchFilter} filter='genres' searchFilter={searchFilter}>Genre</SearchButton>
            </div>
            <button className="searchForm__searchBtn" onClick={() => { getAllFilms(textInput.value, searchFilter, sortType); }}>Search</button>
          </div>
        </div>
      </div>

    </div>
  );
};


export default SearchPageHeader;
