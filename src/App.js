import './App.css';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./compo";
const navLinks = [
  { id: "home", title: "Home" },
  { id: "about-us", title: "About Us" },
  { id: "features", title: "Features" },
  { id: "solution", title: "Solution" },
];


function App() {
  return (
    <div className='h'>
    
      <div className='one' >
        <Navbar />
      </div>
    
    <div >
      <div >
        <Hero />
      </div>
    </div>
    
    <div >
    <div className="compo">
  <section id="home">
    <Stats className="Stats"/>
  </section>
  
  <section id="about-us">
    <Business />
  </section>
  
  <section id="features">
    <Billing />
  </section>
  
  <section id="solution">
    <CardDeal />
  </section>
  
  <Testimonials />
  <Clients />
  <CTA />
  <Footer />
</div>
   
   
   
    </div>
  </div>
  );


  
}






export default App;
