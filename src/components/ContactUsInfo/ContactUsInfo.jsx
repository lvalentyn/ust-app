import Socials from '../Socials/Socials'
import './ContactUsInfo.scss'

const ContactUsInfo = () => {
	return (
		<div className="contact-us-info">
			<p className="contact-us-info__text">
				У вас есть уже существующий проект, который вы хотите усовершенствовать? Вы хотите воплотить в жизнь смелую идею, но вам нужна помощь? Или вы вообще не знаете, с чего начать реализацию проекта?
			</p>
			<div className="contact-us-info__row">
				<div className="contact-us-info__item">
					<div className="contact-us-info__title">Словения</div>
					<a href="mailto:contact@unionsmarttech.ru" className="contact-us-info__link" aria-label='email link'>contact@unionsmarttech.com</a>
					<a href="tel:421494539852" className="contact-us-info__link" aria-label='phone link'>+421 494 539-852</a>
				</div>
				<div className="contact-us-info__item">
					<div className="contact-us-info__title">Словения</div>
					<a href="mailto:contact@unionsmarttech.ru" className="contact-us-info__link" aria-label='email link'>contact@unionsmarttech.com</a>
					<a href="tel:421494539852" className="contact-us-info__link" aria-label='phone link'>+421 494 539-852</a>
				</div>
			</div>

			<Socials />
		</div>
	)
}

export default ContactUsInfo