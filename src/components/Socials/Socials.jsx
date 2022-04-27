import './Socials.scss'

const Socials = () => {
	const socials = ['in', 'google', 'fb', 'web', 'inst']

	return (
		<div className="socials">
			{socials.map((item, i) => (
				// eslint-disable-next-line jsx-a11y/anchor-has-content
				<a aria-label={`${item} link`} href="/" key={item + i} className={`socials__link socials__link--${item}`}></a>
			))}
		</div>
	)
}

export default Socials