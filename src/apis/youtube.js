import axios from 'axios';

const KEY = 'AIzaSyC-dlX7tzVY6-JHecUng4lIq3O94X2l9vA';

export default axios.create(
{
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:
  {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});