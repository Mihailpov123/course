
import axios from 'axios'
import VacancyConditionsGroup from 'components/VacancyConditionsGroup'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

type VacancyProps = {
	id: number
	title: string
	preview: string[]
	conditions: {
		title: string
		content: string[]
	}[]
}


const VacancyPage = () => {

	const { query } = useRouter()

	console.log('query', query);


	const [vacancy, setVacancy] = useState<VacancyProps>()

	const getVacancy = async () => {

		try {
			const { data } = await axios.get(`https://mihailpov123.github.io/apidata/vacancy${query.id}.json`);

			setVacancy(data)

		} catch (error) {

			console.log('error', error);

		}

	}


	useEffect(() => {

		getVacancy()

	}, [])


	return (

		<div className={styles['vacancy-page__wrap']}>
			<div className={styles['vacancy-page']}>
				<div className={styles['title']}>
					{vacancy?.title}
				</div>

				<div className={styles['preview']}>
					{
						vacancy?.preview.map((item, index) =>
							<div key={index}>
								<span className={styles['preview__dash']}>&mdash;&nbsp;</span>
								<span className={styles['preview__item']}>{item}</span>
							</div>
						)
					}
				</div>

				{
					vacancy?.conditions.map((item, index) =>
						<VacancyConditionsGroup
							key={index}
							title={item.title}
							conditions={item.content}
						/>
					)
				}
			</div>
		</div>
	)
}

export default VacancyPage