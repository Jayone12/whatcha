import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import TvPage from "./pages/TvPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
