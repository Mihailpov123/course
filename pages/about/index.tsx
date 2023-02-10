/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import AboutProduction from 'components/AboutProduction'
import Image from 'next/image'
import NumberBlock from 'components/NumberBlock'
import classNames from 'classnames'
import { DataProps } from 'pages'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import AboutCompany from 'assets/images/AboutCompany/AboutCompany.png'
import AboutCompany2 from 'assets/images/AboutCompany/AboutCompany2.png'
import AboutCompany3 from 'assets/images/AboutCompany/AboutCompany3.png'

const AboutPage = () => {

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

	const numbers = [
		{
			number: '4000',
			text: (
				<div>м<sup>3</sup>&nbsp;площадь складов</div>
			)
		},
		{
			number: '700+',
			text: (
				<div>количество	клиентов</div>
			)
		},
		{
			number: '200+',
			text: (
				<div>деталей в день</div>
			)
		},
	]

	return (
		<div className={styles['about-page__wrap']}>
			<div className={styles['about-page']}>
				<div className={styles['title']}>
					О компании
				</div>
				<div className={styles['numbers']}>
					{
						numbers.map((item, index) =>
							<NumberBlock
								number={item.number}
								text={item.text}
								key={index}
							/>
						)
					}
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

					<div className={styles['warranty']}>
						<div className={styles['warranty__leftArea']}>
							<div className={styles['warranty__title']}>
								ГК «Инструмент»<b /> гарантирует
							</div>
							<div className={styles['warranty__item']}>
								<div className={styles['warranty__dash']} />
								<div className={styles['warranty__content']}>
									Прочность<b /> изделий
								</div>
							</div>

							<div className={styles['warranty__item']}>
								<div className={styles['warranty__dash']} />
								<div className={styles['warranty__content']}>
									Высокую степень<b /> качества
								</div>
							</div>

							<div className={styles['warranty__item']}>
								<div className={styles['warranty__dash']} />
								<div className={styles['warranty__content']}>
									Устойчивость к<b /> нагрузкам
								</div>
							</div>
						</div>

						<div className={styles['warranty__rightArea']}>
							Большой выбор товарных позиций предоставляет возможность приобрести продукцию для разных областей строительства: для гражданского и промышленного строительства. Также изготавливаем изделия по индивидуальным чертежам заказчика.
							В собственности предприятия имеются: автотехника, автокраны. Это позволяет осуществлять круглосуточное изготовление и доставку изделий нашим клиентам. Предлагаем несколько вариантов доставки изделий с склада: автотранспортом, по железной дороге, водным транспортом и комбинированными способами доставки.
						</div>
					</div>
					<AboutProduction />
				</div>
			</div>
		</div>
		</div>	
	</div>			
	)
}

export default AboutPage