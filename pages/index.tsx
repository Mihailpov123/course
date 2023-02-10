import { useEffect, useState } from 'react'
import axios from 'axios'
import classNames from 'classnames'
import Image from 'next/image'

import AboutCompany from 'assets/images/AboutCompany/AboutCompany.png'
import AboutCompany2 from 'assets/images/AboutCompany/AboutCompany2.png'
import AboutCompany3 from 'assets/images/AboutCompany/AboutCompany3.png'

import Button from 'components/ui/Button'


import NewsItem from 'components/NewsItem'
import AdvantageBlock from 'components/AdvantageBlock'



export type AboutCompanyProps = {
	id: number
	text: string
	image: string
}

export type AdvantageProps = {
	id: number
	icon: 'icon_rocket' |
	'icon_check' |
	'icon_finance' |
	'icon_quality' |
	'icon_order'
	title: string
	text: string
}

export type NewsItemProps = {
	id: number
	image: string
	title: string
	date: string
}

export type DataProps = {
	about_company: AboutCompanyProps[]
	advantages: AdvantageProps[]
	news: NewsItemProps[]
}

import styles from './styles.module.scss'


const MainPage = () => {

	const [data, setData] = useState<DataProps>()

	const getAboutCompanyData = async () => {

		try {
			const { data } = await axios.get(`https://mihailpov123.github.io/apidata/db.json`);

			setData(data)

		} catch (error) {

			console.log('error', error);

		}

	}


	useEffect(() => {

		getAboutCompanyData()

	}, [])


	return (
		<div className={styles['main-page']}>

			<div className={styles['aboutCompany__wrap']}>
				<div className={classNames(styles['aboutCompany'], styles['container'])}>
					<div className={styles['title']}>
						О компании
					</div>
					<div className={styles['aboutCompanyBlocks']}>
						<div className={styles['aboutBlocks']}>
							<div className={classNames(styles['about-company-block'])}>
								<div className={classNames(styles['block'], styles['block--text'])}>
								Более 13 лет мы оптимизируем и запускаем новые технологические производственные процессы, поставляем инструмент и оснастку от ведущих мировых производителей для реализации задач вашего производства. Ключевой ресурс компании - ценные кадры. В нашем деле, для того чтобы двигаться вперёд, необходима надёжная, сплочённая команда профессионалов своего дела. Теперь, наши специалисты в 15 городах России.
								</div>
							<div className={classNames(styles['block'], styles['block--image'])}>
								<div className={styles['image']}>
								<Image src={AboutCompany} layout='fill' objectFit='contain' />
								</div>
							</div>
						</div>
						<div className={styles['aboutBlocks']}>
							<div className={classNames(styles['about-company-block'], styles['about-company-block--reverse'])}>
								<div className={classNames(styles['block'], styles['block--text'])}>
								Более 13 лет мы оптимизируем и запускаем новые технологические производственные процессы, поставляем инструмент и оснастку от ведущих мировых производителей для реализации задач вашего производства. Ключевой ресурс компании - ценные кадры. В нашем деле, для того чтобы двигаться вперёд, необходима надёжная, сплочённая команда профессионалов своего дела. Теперь, наши специалисты в 15 городах России.
								</div>
							<div className={classNames(styles['block'], styles['block--image'])}>
								<div className={styles['image']}>
								<Image src={AboutCompany2} layout='fill' objectFit='contain' />
								</div>
							</div>
						</div>
						<div className={styles['aboutBlocks']}>
							<div className={classNames(styles['about-company-block'])}>
								<div className={classNames(styles['block'], styles['block--text'])}>
								Более 13 лет мы оптимизируем и запускаем новые технологические производственные процессы, поставляем инструмент и оснастку от ведущих мировых производителей для реализации задач вашего производства. Ключевой ресурс компании - ценные кадры. В нашем деле, для того чтобы двигаться вперёд, необходима надёжная, сплочённая команда профессионалов своего дела. Теперь, наши специалисты в 15 городах России.
								</div>
							<div className={classNames(styles['block'], styles['block--image'])}>
								<div className={styles['image']}>
								<Image src={AboutCompany3} layout='fill' objectFit='contain' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={classNames(styles['advantages'], styles['container'])}>
				<div className={styles['title']}>
					Наши преимущества
				</div>
				<div className={styles['advantages__content']}>
					{
						data?.advantages.map(advantage =>
							<AdvantageBlock {...advantage} key={advantage.id} />

						)
					}
				</div>
			</div>

			<div className={classNames(styles['news'], styles['container'])}>
				<div className={styles['title']}>
					Новости
				</div>
				<div className={styles['news__wrap']}>
					{
						data?.news.map(item =>
							<NewsItem {...item} key={item.id} />
						)
					}
				</div>
				<Button className={styles['btnAllNews']}
					text='Все новости' />
			</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPage
