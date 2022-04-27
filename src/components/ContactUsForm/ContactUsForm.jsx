import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import "yup-phone";

import './ContactUsForm.scss'

const ContactUsForm = () => {
	return (
		<Formik
			className='contact-us-form'
			initialValues={{
				name: '',
				email: '',
				phone: '',
				text: '',
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.min(2, 'Минимум 2 символа для заполнения')
					.required('Обязательное поле!'),
				email: Yup.string()
					.email('Неправильный email адрес')
					.required('Обязательное поле!'),
				phone: Yup.string()
					.phone("UA", true)
					.required('Обязательное поле!'),
				text: Yup.string()
					.min(10, 'Не менее 10 символов'),
			})}
			onSubmit={values => console.log(JSON.stringify(values, null, 2))}
		>
			<Form className="contact-us-form__wrap">
				<p className='contact-us-form__title'>Оставьте свою контактную информацию, и мы с радостью свяжемся с Вами!</p>
				<MyTextInput
					label="Имя"
					id="name"
					name="name"
					type="text"
					autoComplete="off"
				/>
				<MyTextInput
					label="Почта"
					id="email"
					name="email"
					type="email"
					autoComplete="off"
				/>
				<MyTextInput
					label="Телефон"
					id="phone"
					name="phone"
					type="phone"
					autoComplete="off"
				/>

				<div className='contact-us-form__item'>
					<Field
						className='contact-us-form__textarea'
						id="text"
						name="text"
						as="textarea"
						placeholder='Сообщение'
					/>
					<ErrorMessage component="div" className="error" name="text" />
				</div>

				<div className="contact-us-form__btn-box">
					<p className="contact-us-form__terms">
						Ваши персональные данные обрабатываются в соответствии с нашей <a className='contact-us-form__link' href="/" aria-label='term link'>      Политикой кофиденциальности </a>
					</p>

					<button className='contact-us-form__btn btn' type="submit">Подать заявку</button>
				</div>

			</Form>
		</Formik>
	)
}

export default ContactUsForm

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className='contact-us-form__item'>
			<input className='contact-us-form__input' {...field} {...props} placeholder={label} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};