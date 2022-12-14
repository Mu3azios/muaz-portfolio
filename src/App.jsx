import React        from 'react'
import Header       from './components/header/Header';
import Nav          from './components/nav/Nav';
import About        from './components/about/About';
import Contact      from './components/contact/Contact';
import Experience   from './components/experience/Experience';
import Services     from './components/services/services';
import Testimonials from './components/testimonials/Testimonials';
import Portfolio    from './components/portfolio/Portfolio';
import Footer       from './components/footer/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      {/* <Testimonials /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
