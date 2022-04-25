import { useState } from 'react'

import { images } from '../../constants'
import './Navbar.scss'

const { navLogo } = images

const Navbar = () => {
	const menuList = ['Главная', 'Команда', 'Услуги', 'карьера', 'Портфолио', 'Контакты']
	const [nav, setNav] = useState(false)
	const [sticky, setSticky] = useState(false)

	const handleNav = () => {
		setNav(nav => !nav)

		if (nav) {
			document.body.classList.remove('no-scroll');
		} else {
			document.body.classList.add('no-scroll');
		}
	}

	const handlerSticky = () => {
		(window.scrollY >= 100) ? setSticky(true) : setSticky(false)
	}

	window.addEventListener('scroll', handlerSticky)

	return (
		<div className={`navbar ${nav ? 'active' : ''} ${sticky ? 'sticky' : ''}`} onClick={() => setNav(false)}>
			{nav && (
				<div className="blur"></div>
			)}
			<div className="container" onClick={(e) => e.stopPropagation()}>
				<div className="navbar__container">

					<a className="navbar__logo-box" href="/" aria-label='main logo' >
						<div className='navbar__logo'>
							<img src={navLogo} alt="main logo" />
						</div>
						<div className="navbar__title-box">
							<p className="navbar__title">Union Smart Technology</p>
							<p className="navbar__subtitle">Simple solutions for complex problems</p>
						</div>
					</a>

					<div className="navbar__burger" onClick={handleNav}>
						<span className={`navbar__icon`} />
					</div>

					<ul className={`navbar__menu`}>
						<div className="navbar__wrapper">
							<div className="navbar__search"></div>
							<div className="navbar__sep"></div>
							<div className="navbar__lang"></div>
						</div>

						{menuList.map((link, index) => (
							<li className="navbar__el" key={link + index}><a className="navbar__link" href={`/${link}`}>{link}</a></li>
						))}
					</ul>
				</div>

			</div>

		</div>
	)
}

export default Navbar