import Link from 'next/link'
import classNames from 'classnames'

import IconLogo from 'assets/icons/IconLogo.svg'
import IconPin from 'assets/icons/IconPin.svg'

import styles from './styles.module.scss'
import routes from 'routes'

const Footer = () => {

	const date = new Date()


	return (
		<footer className={styles['footer']}>

			<div className={styles['row']}>
				<div className={classNames(styles['navigation'], styles['container'])}>
					<Link href='#' >
						<a>
							<IconLogo />
						</a>
					</Link>

					{
						routes.map(route =>
							<Link href={route.href} key={route.id} >
								<a className={classNames(styles['link'], styles['link--navigation'])}>
									{route.name}
								</a>
							</Link>
						)
					}
				</div>
			</div>

			<div className={styles['row']}>
				<div className={classNames(styles['info'], styles['container'])}>
					<div className={styles['contacts']}>
						<a
							className={classNames(styles['phone'], styles['link'])}
							href="tel: +78314235304"
						>
							7 831 42-35-304
						</a>
						<a
							className={classNames(styles['email'], styles['link'])}
							href="mailto: info@instrument52.ru"
						>
							info@instrument52.ru
						</a>
					</div>

					<div className={styles['address']}>
						<IconPin />
						<div className={styles['address__info']}>
							Нижний&nbsp;Новгород,
							Базовый проезд, 1
						</div>
					</div>
				</div>
			</div>

			<div className={classNames(styles['bottom'], styles['container'])}>
				{date.getFullYear()}, ГК&nbsp;Инструмент комплексные поставки промышленного инструмента и&nbsp;техоснастки
			</div>
		</footer>
	)
}

export default Footer