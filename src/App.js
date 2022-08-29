import React from "react";

import './assets/css/style.css';
import './assets/css/media.css';
import './assets/css/blog.css';

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
