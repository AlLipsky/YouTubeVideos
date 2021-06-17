import VideoLink from "../VideoLink";

const VideosList = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <VideoLink item={item} />
      ))}
    </>
  );
};
export default VideosList;
