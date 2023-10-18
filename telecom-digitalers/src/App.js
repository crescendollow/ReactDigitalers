import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import NewsLoader from './components/NewsLoader';
import CommentsLoader from './components/CommentsLoader';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="container-fluid m-0 p-0">
        <NewsLoader></NewsLoader>
        <CommentsLoader></CommentsLoader>
        <Form></Form>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
