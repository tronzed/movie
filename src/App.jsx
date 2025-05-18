import './App.css'
import Index from './components/Index'
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from './components/NotFound';
import Search from './components/Search';
import Single from './components/Single';
import People from './components/People';
import TvList from './components/TvList';
import PeopleList from './components/PeopleList';
import MovieList from './components/MovieList';

function App() {

  return (
    <>


      <BrowserRouter>
        <Routes>
          
          <Route index path="/" element={<Index />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/people/:perid" element={<People />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="/people-list" element={<PeopleList />} />
          <Route path="/tv-list" element={<TvList />} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
