import VideoLink from "../VideoLink";

const Video = ({ video, id }) => {
  return (
    <div className="videoContainer">
      <div className="mainVideo">
        <iframe src={"https://www.youtube.com/embed/" + id} title={video.name}>
          {video.name}
        </iframe>
        <div>{video.name}</div>
        <span>
          <div>views: {video.views}</div>
          <div>likes:{video.likes}</div>
          <div>dislikes:{video.dislikes}</div>
        </span>
      </div>
      <div>
        {video.relatedPlaylists.map((item) => (
          <VideoLink disableLink item={item} />
        ))}
      </div>
    </div>
  );
};
export default Video;
