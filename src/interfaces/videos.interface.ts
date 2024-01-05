/**
 * @description An custom interface that describes the object of Video from VideoRequestI
 *
 * @interface VideoI
 */
export interface VideoI {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  channel: {
    id: string;
    name: string;
    link: string;
    handle: string;
    verified: boolean;
    thumbnail: string;
  };
  description: string;
  views: number;
  uploaded: string;
  duration: number;
  durationString: string;
}

/**
 * @description An custom interface that describes the object from the response to fetch the list of videos
 *
 * @interface VideoResponseI
 */
export interface VideoResponseI {
  channels: any[];
  playlists: any[];
  status: boolean;
  streams: any;
  videos: VideoI[];
}
