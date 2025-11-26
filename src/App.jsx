import "./App.css";
import SidebarText from "./Component/Lebal";

import Navbar from "./Component/Navbar";

import ScrollToTopOnRoute from "./Component/ScrollToTopOnRoute";

import Router from "./Page/Router";
import ScrollToTopButton from "./Page/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTopOnRoute />
      
      <SidebarText />
      <Router />
      <Navbar />
      <ScrollToTopButton />
    </>
  );
}

export default App;
