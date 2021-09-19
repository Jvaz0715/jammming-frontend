import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
   // constructor(props) {
   //    super(props);
   // }
   render(){
      return (
         <div className="SearchResults">
            <h2>Results</h2>
            {/* <!-- Add a TrackList component --> */}
            <TrackList 
               tracks={this.props.SearchResults}
            />
         </div>
      )
   }
};

export default SearchResults;