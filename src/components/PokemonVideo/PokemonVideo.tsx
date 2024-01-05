import axios, { AxiosResponse } from 'axios';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import { VideoI, VideoResponseI } from '../../interfaces/videos.interface';
import YouTube from 'react-youtube';
import Loader from '../Loader/Loader';

/**
 * @description This component renders a Youtube Video related to the Pokemon displayed
 *
 * @returns {ReactNode} A React element that renders a video.
 */
const PokemonVideo = ({ name }: Pokemon) => {
  const [video, setVideo] = useState({} as VideoI);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const options = {
    method: 'GET',
    url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    params: { q: name },
    headers: {
      'X-RapidAPI-Key': '7dfc2605bcmshb7e8056a0bc1c68p1022d7jsn63e1c771ec0b',
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
    },
  };

  /**
   * @description This function retrieves data of videos, and set the first result as the video to be displayed
   *
   * @async
   * @function fetchVideo
   * @returns {Promise<void>} A Promise function
   */
  async function fetchVideo(): Promise<void> {
    try {
      const response: AxiosResponse<VideoResponseI> =
        await axios.request<VideoResponseI>(options);
      setVideo(response.data.videos[0]);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void fetchVideo();
  }, []);

  return (
    <div className="container text-center p-2 rounded-md bg-white">
      {isLoading ? (
        <div>
          <h4 className="text-3xl">Loading Video Player...</h4>
          <Loader />
        </div>
      ) : !error ? (
        <YouTube videoId={video.id}></YouTube>
      ) : (
        <div>
          <h4 className="text-3xl">There was an error loading the video</h4>
        </div>
      )}
    </div>
  );
};
export default PokemonVideo;
