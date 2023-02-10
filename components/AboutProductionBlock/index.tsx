/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import styles from './styles.module.scss'
import AboutCompany from 'assets/images/AboutCompany/AboutCompany.png'
import { FC, useEffect, useState } from 'react'
import { AboutProductionProps } from 'components/AboutProduction'
import Button from 'components/ui/Button'
import Popup from 'components/ui/Popup'
import axios from 'axios'


interface AboutProductionBlockProps extends AboutProductionProps {
	content: string
}

const AboutProductionBlock: FC<AboutProductionBlockProps> = ({ id, title, image, content }) => {

	const [visiblePopup, setVisiblePopup] = useState(false)

	const [productionData, setProductionData] = useState<AboutProductionBlockProps>()

	const getProduction = async () => {

		try {
			const { data } = await axios.get(`https://mihailpov123.github.io/apidata/production${id}.json`);

			setProductionData(data)

		} catch (error) {

			console.log('error', error);

		}

	}

	const onClickPopup = () => {

		setVisiblePopup(true)

		getProduction()

	}


	return (
		<div className={styles['about-production-block']}>
			<div className={styles['image']}>
				<Image src={image} layout='fill' objectFit='contain' />
			</div>

			<div className={styles['title']}>
				{title}
			</div>

			<Button
				onClick={() => onClickPopup()}
				className={styles['btnMore']}
				text='Подробнее'
			/>

			{
				visiblePopup &&
				<Popup
					image={image}
					setVisiblePopup={setVisiblePopup}
					title={title}
					content={content}
				/>
			}

		</div>
	)
}

export default AboutProductionBlock