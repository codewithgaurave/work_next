import "./App.css";
import SidebarText from "./Component/Lebal";
import LeftLabel from "./Component/Lebal";

import Navbar from "./Component/Navbar";

import Router from "./Page/Router";
import ScrollToTop from "./Page/ScrollToTop";
function App() {
  return (
    <>
    <SidebarText/>
      <ScrollToTop />
      <Router />
      <Navbar />
    </>
  );
}

export default App;
