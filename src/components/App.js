import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () =>
{
  const [videos, search] = useVideos('react js');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() =>
  {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={ search } />
      <div className="ui grid">
        <div className="row">
          <div className="eleven wide column">
            <VideoDetail video={ selectedVideo } />
          </div>
          <div className="five wide column">
            <VideoList videos={ videos } onVideoSelect={ setSelectedVideo } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;