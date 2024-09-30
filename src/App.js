import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import WebDevelopement from './Pages/WebDevelopement';
import Email from './Pages/Email';
import Affiliate from './Pages/Affiliate';
import Branding from './Pages/Branding';
import ContactUs from './Pages/ContactUs';



function App() {
  return (
   
   <>

<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/web" element={<WebDevelopement />} />
          <Route path="/email" element={<Email />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
