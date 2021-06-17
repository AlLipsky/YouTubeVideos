import { Link } from "react-router-dom";

const VideoLink = ({ item, disableLink }) => {
  const id = item.link.split("=")[1];
  return (
    <section key={id}>
      <Link to={"/" + id}>
        <div className={disableLink ? "" : "videoLink"}>
          <iframe src={"https://www.youtube.com/embed/" + id} title={item.name}>
            {item.name}
          </iframe>
        </div>
      </Link>
      <div>{item.name}</div>
      <div>views: {item.views}</div>
    </section>
  );
};
export default VideoLink;
