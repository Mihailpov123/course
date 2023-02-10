import axios from 'axios';
import NewsItem from 'components/NewsItem';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss'

type NewsItemProps = {
	id: number
	image: string
	title: string
	date: string
}

const AllNewsPage = () => {

	const [news, setNews] = useState<NewsItemProps[]>([])

	const getNews = async () => {

		try {
			const { data } = await axios.get(`https://mihailpov123.github.io/apidata/news.json`);

			setNews(data.news)

		} catch (error) {

			console.log('error', error);

		}

	}


	useEffect(() => {

		getNews()

	}, [])

	return (
		<div className={styles['all-news-page']}>
			<div className={styles['title']}>
				Новости
			</div>

			<div className={styles['news']}>
				{
					news.map(item =>
						<NewsItem {...item} key={item.id} />

					)
				}
			</div>
		</div>
	)
}

export default AllNewsPage