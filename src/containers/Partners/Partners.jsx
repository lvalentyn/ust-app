import './Partners.scss'

const Partners = () => {
	const partners = ['cinzano', 'atol', 'cinzano', 'atol', 'cinzano', 'atol']

	return (
		<div className="partners">
			{partners.map((item, i) => (
				<div className={`partners__img partners__img--${item}`} key={item + i} />
			))}

		</div>
	)
}

export default Partners