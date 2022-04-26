import { images } from '../../constants'
import './About.scss'

const { aboutImg, aboutImgMob } = images

const About = () => {
	return (
		<div className="about">
			<div className="about__img">
				<picture>
					<source srcSet={aboutImg} media="(min-width: 678px)" />
					<img src={aboutImgMob} alt="about img" />
				</picture>
			</div>
			<div className="about__text">
				<h3 className="h3">Почему UST?</h3>
				<p className="subtitle">К услугам наших клиентов разработка программного обеспечения на заказ, проектирование пользовательских интерфейсов, создание сайтов (в том числе на основе индивидуальной CMS) и их поддержка.
					<p>
						Мы также предлагаем услугу IT-консалтинга — налаживание работы любых информационно-аналитических систем и онлайн-решений компании для большей эффективности бизнес-процессов.
					</p>
					<p>
						Сегодня компания «Union Smart Technology» имеет представительства с умелыми project‑менеджерами в РФ и Словакии.
					</p>
					<p>
						Такая география позволяет привлекать наиболее ответственных и квалифицированных программистов и живо реагировать на потребности заказчиков со всего света, сохраняя комфортный уровень цен.
					</p>
				</p>

				<div className="about__btn-box">
					<a href="/" className="about__btn btn btn--alt" aria-label='about more'>Вакансии</a>
					<a href="/" className="about__btn btn" aria-label='about vacancy'>Читать далее</a>
				</div>

			</div>
		</div>
	)
}

export default About