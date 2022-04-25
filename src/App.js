import './App.scss';
import { About, Header, Advantages, ContactUs, Faq, Footer, Partners, Portfolio, Supply } from './containers';
import { Navbar } from './components'

function App() {
  return (
    <div className="page">
      <Navbar />
      <div className="container p-nav">
        <Header />
      </div>
      <About />
      <Supply />
      <Portfolio />
      <Advantages />
      <Partners />
      <ContactUs />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
