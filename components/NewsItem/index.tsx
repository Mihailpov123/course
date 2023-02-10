import { FC, ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'

import Button from 'components/ui/Button'

import styles from './styles.module.scss'
import { NewsItemProps } from 'pages'

import News1 from 'assets/images/News/News1.png'
import { useRouter } from 'next/router'



const NewsItem: FC<NewsItemProps> = ({ id, image, title, date }) => {

	const router = useRouter()

	return (
		<div className={styles['news-item']}>
			<div className={styles['image']}>
				<Image src={News1} layout='fill' alt='image' objectFit='contain' />
			</div>
			<div className={styles['title']}>
				{title}
			</div>
			<div className={styles['date']}>
				{date}
			</div>
			<Button
				onClick={() => router.push(`news/${id}`)}

				className={styles['btnMore']}
				text='Подробнее'
			/>
		</div>
	)
}

export default NewsItem