import { FC } from 'react'
import classNames from 'classnames'

import Link from 'next/link'

import Banner from 'components/Banner'

import IconLogo from 'assets/icons/IconLogo.svg'


type HeaderProps = {
	visibleBanner?: boolean
}

import styles from './styles.module.scss'
import routes from 'routes'


const Header: FC<HeaderProps> = ({ visibleBanner = false }) => {
	return (
		<header className={classNames(styles['header'], visibleBanner && styles['header--banner'])}>
			<div className={styles['container']}>
				<div className={classNames(styles['row'], styles['row--top'])}>
					<div className={styles['rowTop__item']}>
						Нижний Новгород, Базовый проезд, 1
					</div>
					<a
						className={classNames(styles['rowTop__item'], styles['rowTop__item--link'])}
						href="mailto: info@instrument52.ru"
					>
						info@instrument52.ru
					</a>
					<a
						className={classNames(styles['rowTop__item'], styles['rowTop__item--link'])}
						href="tel: +78314235304"
					>
						+7 (831) 423 53 04
					</a>
				</div>
			</div>

			<div className={styles['container']}>
				<div className={classNames(styles['row'], styles['row--bottom'])}>
					<Link href='/' >
						<a className={styles['logo']}>
							<	IconLogo />
						</a>
					</Link>

					<div className={styles['navigation']}>
						{
							routes.map(route =>
								<Link href={route.href} key={route.id} >
									<a className={styles['navLink']}>
										{route.name}
									</a>
								</Link>
							)
						}
					</div>
				</div>
			</div>

			{
				visibleBanner &&
				<Banner />
			}

		</header >
	)
}

export default Header