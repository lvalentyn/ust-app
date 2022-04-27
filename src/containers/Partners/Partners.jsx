import { images } from '../../constants'

import './Partners.scss'

const { partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4 } = images

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