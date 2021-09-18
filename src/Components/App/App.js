import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      {/* <!-- Add a SearchBar component --> */}
      <SearchBar />
        <div className="App-playlist">
        {/* <!-- Add a SearchResults component --> */}
        <SearchResults />
        {/* <!-- Add a Playlist component --> */}
        <PlayList />
        </div>
      </div>
    </div>
  );
}

export default App;
