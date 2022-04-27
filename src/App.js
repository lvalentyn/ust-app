import './App.scss';
import { About, Header, Advantages, ContactUs, Faq, Footer, Partners, Portfolio, Supply } from './containers';
import { Navbar, HeaderInfo } from './components'

import { images } from './constants'

const { contactusBgMob, contactusBg } = images

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
				<div className="title-bg t-center-md ">
					<h2 className="h2">Портфолио</h2>
					<h3 className="h3 m-center-md">Завершенные проекты</h3>
					<p className="subtitle m-center-md">Мы специализируемся на предоставлении программного обеспечения высшего качества и предоставлении высококвалифицированных команд с опытом в области разработки блокчейнов, аналитики больших данных и AI/ML, а также услуг по разработке программного обеспечения на заказ.</p>
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
				<h3 className="h3 m-center t-center">Клиенты</h3>
				<Partners />
			</div>
			<div className="p-t">
				<div className="title-bg">
					<picture>
						<source srcSet={contactusBg} media="(min-width: 678px)" />
						<img src={contactusBgMob} alt="header bg" />
					</picture>
					<div className="container">
						<h2 className="h2 h2--alt">Связаться</h2>
						<h3 className="h3 h3--alt">Готовы предложить Вам лучшие IT-решения</h3>
					</div>
				</div>
				<div className="container">
					<ContactUs />
				</div>
			</div>
			<div className="container p-t">
				<h2 className="h2">FAQ</h2>
				<h3 className="h3">Возможно, у вас остались вопросы. Отвечаем</h3>
				<Faq />
			</div>
			<div className="container p-t"><Footer /></div>
		</div>
	);
}

export default App;
