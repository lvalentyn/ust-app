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
        <About />
      </div>

      <div className="container p-t">
        <h2 className="h2">Наши предложения</h2>
        <h3 className="h3">Разработка полного цикла</h3>
        <p className="subtitle">Мы можем разработать для вас любое индивидуальное решение. Наша компания обладает широкими возможностями для успешного создания технически-сложных систем.</p>
        <Supply />
      </div>
      <div className="p-t">
        <div className="title-bg">
          <h2 className="h2">Портфолио</h2>
          <h3 className="h3">Завершенные проекты</h3>
          <p className="subtitle">Мы специализируемся на предоставлении программного обеспечения высшего качества и предоставлении высококвалифицированных команд с опытом в области разработки блокчейнов, аналитики больших данных и AI/ML, а также услуг по разработке программного обеспечения на заказ.</p>
        </div>
        <div className="container">
          <Portfolio />
        </div>
      </div>
      <div className="container p-t">
        <h2 className="h2">Наши</h2>
        <h3 className="h3">Преимущества</h3>
        <p className="subtitle">Основная ценность нашей компании - создание качественного продукта и удовлетворение потребностей клиента. Поэтому перед началом разработки мы проводим маркетинговые исследования и помогаем клиенту определить стратегию развития продукта.</p>
        <Advantages />
      </div>
      <div className="container p-t">
        <h3 className="h3">Клиенты</h3>
        <Partners />
      </div>
      <div className="container p-t"><ContactUs /></div>
      <div className="container p-t"><Faq /></div>
      <div className="container p-t"><Footer /></div>
    </div>
  );
}

export default App;
