import Image from 'next/image'

import Button from 'components/ui/Button'

import MainBanner from 'assets/images/MainBanner.png'

import styles from './styles.module.scss'


const Banner = () => {
	return (
		<div className={styles['banner']}>
			<div className={styles['content']}>
				<div className={styles['title']}>
					Комплексные <br />поставки промышленного
					инструмента и техоснастки
				</div>
				<div className={styles['description']}>
					Компания чётко ориентируется на&nbsp;рынке, ассортимент продукции постоянно расширяется, при этом качество продукции только растет. Все это отражается на&nbsp;ценовой политике и&nbsp;позволяет поддерживать ее&nbsp;на&nbsp;низком уровне
				</div>
				<div className={styles['buttons']}>
					<Button text='Подробнее' />
					<Button text='Связаться' dark />
				</div>
			</div>
			<div className={styles['image']}>
				<Image
					src={MainBanner}
					layout='fill'
					objectFit='contain'
					alt='Banner'
				/>
			</div>
		</div>
	)
}

export default Banner