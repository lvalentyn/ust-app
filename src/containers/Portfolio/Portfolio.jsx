import { images } from '../../constants'
import './Portfolio.scss'

const { portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg4, portfolioImg5, portfolioImg6 } = images

const Portfolio = () => {
	const cards1 = [
		{ img: `${portfolioImg1}`, title: 'Мобильный контроль', descr: 'Сервис для работы с клиентами и партнерами' },
		{ img: `${portfolioImg2}`, title: 'Голосовое управление', descr: 'Сервис для работы по задачам' },
		{ img: `${portfolioImg3}`, title: 'Prorab-x', descr: 'Мобильное приложение для строителей' },
	]
	const cards2 = [
		{ img: `${portfolioImg4}`, title: 'Vroomgames', descr: 'Сервис для работы со списками заказов' },
		{ img: `${portfolioImg5}`, title: 'ATOL-бонус', descr: 'Мобильное приложение для профессионалов' },
		{ img: `${portfolioImg6}`, title: 'Актуаль', descr: 'Сайт промом игры' },
	]

	return (
		<div className="portfolio">
			<div className="portfolio__box">
				<div className="portfolio__col">
					{cards1.map((item, i) => (
						<div className="portfolio__card t-center-to-md" key={item + i}>
							<div className={`portfolio__img`}>
								<img src={item.img} alt={item.title} />
							</div>
							<p className="portfolio__title">{item.title}</p>
							<p className="portfolio__descr">{item.descr}</p>
						</div>
					))}
				</div>
				<div className="portfolio__col">
					{cards2.map((item, i) => (
						<div className="portfolio__card t-center-to-md" key={item + i}>
							<div className={`portfolio__img`}>
								<img src={item.img} alt={item.title} />
							</div>
							<p className="portfolio__title">{item.title}</p>
							<p className="portfolio__descr">{item.descr}</p>
						</div>
					))}
				</div>
			</div>

			<div className="portfolio__btn-box">
				<a href="/" className="portfolio__btn btn btn--alt" aria-label='portfolio more'>Портфолио</a>
				<a href="/" className="portfolio__btn btn" aria-label='portfolio order'>Заказать проект</a>
			</div>

		</div>
	)
}

export default Portfolio