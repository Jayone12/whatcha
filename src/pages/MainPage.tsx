import LatestMovieSection from "../features/movie/lastest";
import NowPlayingSection from "../features/movie/nowPlaying";

function MainPage() {
  return (
    <div>
      <LatestMovieSection />
      <NowPlayingSection />
    </div>
  );
}

export default MainPage;
