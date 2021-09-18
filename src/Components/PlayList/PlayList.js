import './PlayList.css';
import TrackList from '../TrackList/TrackList';

function PlayList(){
   return (
      <div className="Playlist">
         <input defaultValue={'New Playlist'}/>
         {/* <!-- Add a TrackList component --> */}
         <TrackList />
         <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
   )
};

export default PlayList;