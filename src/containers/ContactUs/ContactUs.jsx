import { ContactUsForm, ContactUsInfo } from '../../components/'

import './ContactUs.scss'

const ContactUs = () => {
	return (
		<div className="contact-us">
			<div className="contact-us__box">
				<div className="contact-us__col">
					<h4 className="h4">Связаться с нами</h4>
					<ContactUsForm />
				</div>
				<div className="contact-us__col contact-us__col--bg">
					<h4 className="h4">Есть идея?</h4>
					<ContactUsInfo />
				</div>

			</div>

		</div>
	)
}

export default ContactUs