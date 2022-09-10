import LatestMovieSection from "../features/movie/lastest";
import NowPlayingSection from "../features/movie/nowPlaying";
import PopularSection from "../features/movie/popular";
import TopRateSection from "../features/movie/topRate";
import UpcomingSection from "../features/movie/upcoming";

function MainPage() {
  return (
    <div>
      <LatestMovieSection />
      <NowPlayingSection />
      <PopularSection />
      <TopRateSection />
      <UpcomingSection />
    </div>
  );
}

export default MainPage;
