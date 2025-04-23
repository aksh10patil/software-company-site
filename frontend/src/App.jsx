import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import HireTalent from './pages/HireTalent'
import Industries from './pages/Industries'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Internships from './pages/Internships'

export default function App () {
return (
  <>
  <Router>
    <Routes>
          <Route path = "/" element ={<Home />}/>
          <Route path = "/aboutus" element ={<AboutUs />}/>
          <Route path = "/contactus" element ={<ContactUs />}/>
          <Route path = "/hiretalent" element ={<HireTalent />}/>
          <Route path = "/industries" element ={<Industries />}/>
          <Route path = "/portfolio" element ={<Portfolio />}/>
          <Route path = "/services" element ={<Services />}/>
          <Route path = "/internships" element ={<Internships />}/>

    </Routes>
    </Router>
  </>
)
}


