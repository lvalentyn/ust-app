import './Supply.scss'

const Supply = () => {
	const cards = [
		{ logo: `analize`, title: 'Анализируем', descr: 'Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.' },
		{ logo: `prototype`, title: 'Прототипируем', descr: 'Прорабатываем пользовательские сценарии, проектируем логику приложения, скечируем основные экраны.' },
		{ logo: `design`, title: 'Дизайним', descr: 'Адаптируем фирменный стиль заказчика к гайдлайнам платформ. Рисуем удобные и понятные интерфейсы.' },
		{ logo: `prog`, title: 'Программируем', descr: 'Создаём расширяемую архитектуру, пишем чистый и стабильный код. Интегрируемся с технологиями заказчика.' },
		{ logo: `testing`, title: 'Тестируем', descr: 'Проводим ручное функциональное тестирование и пишем UI-автотесты. Готовим чек-листы и тест-кейсы.' },
		{ logo: `sup`, title: 'Поддерживаем', descr: 'Работаем по SLA. Следим за стабильностью работы приложения, обновляем под новые устройства и версии iOS и Android.' },
	]

	return (
		<div className="supply">
			<div className="supply__box">
				{cards.map((item, i) => (
					<div className="supply__card t-center-to-md" key={item + i}>
						<div className={`supply__logo supply__logo--${item.logo}`} />
						<p className="supply__title">{item.title}</p>
						<p className="supply__descr">{item.descr}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Supply