import './HeaderInfo.scss'

const HeaderInfo = () => {

	const cards = [
		{ value: '4', descr: 'Года опыта' },
		{ value: '30', descr: 'Завершенных проектов' },
		{ value: '4', descr: 'Года опыта' },
		{ value: '4', descr: 'Года опыта' },
	]

	return (
		<div className="header-info">
			<div className="container">
				<div className="header-info__wrapper">
					{cards.map((item, i) => (
						<div className="header-info__card" key={item + i}>
							<p className='header-info__value'>{item.value}</p>
							<p className='header-info__descr'>{item.descr}</p>
						</div>
					))}
				</div>
			</div>

		</div>
	)
}

export default HeaderInfo