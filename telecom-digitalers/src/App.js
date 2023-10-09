import './App.css';
import './index.css'
import React from 'react';
import NavBar from './components/NavBar';
import NewsLoader from './components/NewsLoader';
import CommentsLoader from './components/CommentsLoader';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="container-fluid m-0 p-0">
        <NewsLoader></NewsLoader>
        <CommentsLoader></CommentsLoader>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
