import styled from "@emotion/styled";
import AiringTodayTvSection from "../features/tv/airingToday";
import LatestTvSection from "../features/tv/latest";
import OnTheAirSection from "../features/tv/onTheAir";
import PopularSection from "../features/tv/popular";
import TopRateSection from "../features/tv/topRate";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

function TvPage() {
  return (
    <Main>
      <Container>
        <LatestTvSection />
        <AiringTodayTvSection />
        <OnTheAirSection />
        <PopularSection />
        <TopRateSection />
      </Container>
    </Main>
  );
}

export default TvPage;
