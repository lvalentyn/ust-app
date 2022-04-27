import { images } from '../../constants'

import './Partners.scss'

const { partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4 } = images

const Partners = () => {
	const partners = [partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo1, partnerLogo2]

	return (
		<div className="partners">
			{partners.map((item, i) => (
				<div className="partners__img" key={item + i}>
					<img src={item} alt="partner logo" />
				</div>
			))}

		</div>
	)
}

export default Partners