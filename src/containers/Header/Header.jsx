import { images } from '../../constants'
import './Header.scss'

const { headerBg, headerBgMob } = images

const Header = () => {
	return (
		<section className='header'>
			<div className="header__bg">
				<picture>
					<source srcset={headerBg} media="(min-width: 678px)" />
					<img src={headerBgMob} alt="header bg" />
				</picture>
			</div>
			<div className="container">
				<h1 className="header__title">Студия разработки программного обеспечения <span>с продуктовым мышлением</span></h1>
				<p className="header__subtitle">Мы создаем кроссплатформенные мобильные приложения и веб-платформы и находим для них лучшие решения.</p>
				<a href="/" className="btn header__btn" aria-label='call btn'>Заказать проект</a>
			</div>
		</section>
	)
}

export default Header