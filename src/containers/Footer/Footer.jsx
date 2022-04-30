import { Socials } from '../../components/'

import './Footer.scss'

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer__box">

					<div className="footer__col footer__col--adress">
						<p className="footer__title">Словакская команда</p>
						<a className='footer__link' href="mailto:contact@unionsmarttech.com" aria-label='email link'>contact@unionsmarttech.com</a>
						<a className='footer__link' href="tel:79119329029" aria-label='phone link'>+7911932-90-29</a>
						<a className='footer__link' href="/" aria-label='adress link'>24 Entuziastov street, Saint Petersburg, 191 119</a>
					</div>
					<div className="footer__col footer__col--adress">
						<p className="footer__title">Словакская команда</p>
						<a className='footer__link' href="mailto:contact@unionsmarttech.com" aria-label='email link'>contact@unionsmarttech.com</a>
						<a className='footer__link' href="tel:79119329029" aria-label='phone link'>+7911932-90-29</a>
						<a className='footer__link' href="/" aria-label='adress link'>24 Entuziastov street, Saint Petersburg, 191 119</a>
					</div>
					<div className="footer__col footer__col--menu">
						<a className='footer__link' href="/" aria-label='footer link'>Главная</a>
						<a className='footer__link' href="/" aria-label='footer link'>Команда</a>
						<a className='footer__link' href="/" aria-label='footer link'>Услуги</a>
					</div>
					<div className="footer__col footer__col--menu">
						<a className='footer__link' href="/" aria-label='footer link'>Карьера</a>
						<a className='footer__link' href="/" aria-label='footer link'>Портфолио</a>
						<a className='footer__link' href="/" aria-label='footer link'>Контакты</a>
					</div>
					<div className="footer__col footer__col--soc">
						<Socials />
					</div>
					<a href='/' className="footer__col footer__col--term footer__link" aria-label='footer link'>Политика конфиденциальности</a>
				</div>

			</div>
		</div>
	)
}

export default Footer