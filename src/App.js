import "./App.css";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import VideosList from "./Components/VideosList";
import { songsList } from "./Data/songsList";
import Video from "./Components/Video";

const App = ({ location }) => {
  const list = songsList();
  const id = location.pathname.slice(1);
  const currentVideo = id
    ? list.find((item) => item.link.split("=")[1] === id)
    : null;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <VideosList list={list} />
        </Route>
        <Route path="/:id">
          <Video video={currentVideo} id={id} />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
