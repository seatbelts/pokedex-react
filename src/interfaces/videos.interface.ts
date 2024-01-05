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

export interface VideoResponseI {
  channels: any[];
  playlists: any[];
  status: boolean;
  streams: any;
  videos: VideoI[];
}
