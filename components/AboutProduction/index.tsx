import axios from 'axios';
import AboutProductionBlock from 'components/AboutProductionBlock';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { StaticImageData } from 'next/image';
import AboutCompany from 'assets/images/AboutProduction/AboutProduction.png'
import AboutCompany2 from 'assets/images/AboutProduction/AboutProduction2.png'
import AboutCompany3 from 'assets/images/AboutProduction/AboutProduction3.png'


export type AboutProductionProps = {
	id: number
	title: string
	image: StaticImageData
}

const AboutProduction = () => {

	const [production, setProduction] = useState<AboutProductionProps[]>()

	const getProductionData = async () => {

		try {
			const { data } = await axios.get(`https://mihailpov123.github.io/apidata/production.json`);

			setProduction(data.production)

		} catch (error) {

			console.log('error', error);

		}

	}


	useEffect(() => {

		getProductionData()

	}, [])

	return (
		<div className={styles['about-production']}>
			<div className={styles['title']}>
				О производстве
			</div>

			<div className={styles['blocks']}>

				<AboutProductionBlock
					id={1}
					image={AboutCompany}
					title='Производтсво типовых изделий'
					content='Описание блока'
				/>
				<AboutProductionBlock
					id={2}
					image={AboutCompany2}
					title='Доставка продукции транспортом'
					content='Описание блока'
				/>
				<AboutProductionBlock
					id={3}
					image={AboutCompany3}
					title='Производство изделий'
					content='Описание блока'
				/>
			</div>



		</div>
	)
}

export default AboutProduction