import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UserData } from "./components/Users/UserData";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import {Footer} from "./components/Footer";
import { GitHubProvider } from "./Context/GitHub/GitHubContext";
function App() {
  return (
    <GitHubProvider>
      <Router>
        <Navbar header_text='GitHub Finder'/>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/user/:login" element = {<UserData/>}/>
            <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </GitHubProvider>
  );
}

export default App;
