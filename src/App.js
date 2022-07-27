import './SCSS/style.scss';
import Header from './Components/Header';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom'
import NotFound from './Pages/404';
import GamePage from './Pages/GamePage/GamePage';
import React from 'react';

export const searchContext = React.createContext()

function App() {
  // const [search, setSearch] = React.useState('')
  return (
    <div className="App">
      {/* <searchContext.Provider value={{ search, setSearch }}> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:slug" element={<GamePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </searchContext.Provider> */}
    </div>
  );
}

export default App;
