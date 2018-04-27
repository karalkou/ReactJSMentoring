import React from 'react';
import { render } from 'react-dom';
import Content  from './Content.jsx';
import Footer  from './Footer.jsx';
import SearchHeader  from './SearchHeader.jsx';
import ResultsList  from './ResultsList.jsx';

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsNumber: 7,
      films: [
        {
          name: 'Kill Bill',
          imgSrc: 'http://www.imfdb.org/images/thumb/6/65/Killbillposter.jpg/300px-Killbillposter.jpg',
          genre: 'drama',
          year: 2014,
          id: 1
        },
        {
          name: 'Kill Bill2',
          imgSrc: 'http://www.imfdb.org/images/thumb/6/65/Killbillposter.jpg/300px-Killbillposter.jpg',
          genre: 'adventure',
          year: 2017,
          id: 2
        }
      ]
    }
  }
  render () {
    return(
      <section className="searchResults">
        <div className="container">
          <SearchHeader resultsNumber={this.state.resultsNumber}/>
          <ResultsList films={this.state.films}/>
        </div>
      </section>
    );
  }
}

export default SearchResultsContainer;