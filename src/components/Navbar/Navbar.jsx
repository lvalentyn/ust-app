import { useState } from 'react';
import { images } from '../../constants';
import './Navbar.scss';
const { headerBg } = images;

const Navbar = () => {
	const menuList = ['home', 'about', 'games', 'news', 'contacts', `terms and conditions of use`, 'secure payment',]

	const [toggler, setToggler] = useState(false)

	const menuToggler = () => {
		setToggler(toggler => !toggler)

		if (toggler) {
			document.body.classList.remove('no-scroll');
		} else {
			document.body.classList.add('no-scroll');
		}
	}

	return (
		<section className='navbar'>
			<div className="container">
				<div className="navbar__row navbar__row--top">
					<div className="navbar__logo">
						<a className="navbar__logo-link" href="/" aria-label='main-logo'>
							<img className="navbar__logo-img" src={headerBg} alt="logoMob" />
						</a>
					</div>

					<div className="navbar__btn-box none-to-md">
						<a className="navbar__btn btn" href="/"><span>Register</span></a>
						<a className="navbar__btn btn btn--alt" href="/"><span>Login</span></a>
					</div>

					<div className="navbar__burger none-md">
						<img src={headerBg} alt="burgermenu" onClick={() => menuToggler()} />
					</div>
				</div>
				<div className={`navbar__row navbar__row--bottom ${toggler ? 'open' : ''}`}>
					<nav className={`navbar__navigation`}>
						<ul className="navbar__list">
							{menuList.map((link, index) => (
								<li key={link + index} className="navbar__el">
									<a className="navbar__link" href={`#${link}`}>{link}</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="navbar__btn-box none-md">
						<a className="navbar__btn btn" href="/"><span>Register</span></a>
						<a className="navbar__btn btn btn--alt" href="/"><span>Login</span></a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Navbar;