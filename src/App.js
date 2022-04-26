import './App.scss';
import { About, Header, Advantages, ContactUs, Faq, Footer, Partners, Portfolio, Supply } from './containers';
import { Navbar, HeaderInfo } from './components'

function App() {
  return (
    <div className="page">
      <Navbar />
      <Header />
      <HeaderInfo />
      <div className="container p-t">
        <h2 className="h2">О нас</h2>
        <About />
      </div>
      <div className="container p-t"><Supply /></div>
      <div className="container p-t"><Portfolio /></div>
      <div className="container p-t"><Advantages /></div>
      <div className="container p-t"> <Partners /></div>
      <div className="container p-t"><ContactUs /></div>
      <div className="container p-t"><Faq /></div>
      <div className="container p-t"><Footer /></div>
    </div>
  );
}

export default App;
