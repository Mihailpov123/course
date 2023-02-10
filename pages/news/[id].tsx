import Image from 'next/image'

import News from 'assets/images/News/News1.png'

import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

type NewsPageProps = {
	id: number
	title: string
	date: string
	text: string[]
	image: string
}

const NewsPage = () => {

	const { query } = useRouter()

	const [newsContent, setNewsContent] = useState<NewsPageProps>()

	const getNews = async () => {

		try {
			const { data } = await axios.get(`https://mihailpov123.github.io/apidata/news${query.id}.json`);

			setNewsContent(data)

		} catch (error) {

			console.log('error', error);

		}

	}


	useEffect(() => {

		getNews()

	}, [])

	return (
		<div className={styles['news__wrap']}>
			<div className={styles['news']}>
				<div className={styles['title']}>
					{newsContent && newsContent.title}
				</div>
				<div className={styles['date']}>
					{newsContent && newsContent.date}
				</div>

				<div className={styles['image']}>
					<Image src={News} layout='fill' objectFit='fill' />
				</div>

				{
					newsContent && newsContent.text.map((news, index) =>
						<p className={styles['content']} key={index}>
							{news}
						</p>

					)
				}
			</div>

		</div>
	)
}

export default NewsPage