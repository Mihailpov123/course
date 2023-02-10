import axios from 'axios'
import Vacancy from 'components/Vacancy'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export type VacanciesPageProps = {
	id: number
	title: string
	conditions: string[]
	price: string
}

const VacanciesPage = () => {

	const [vacancies, setVacancies] = useState<VacanciesPageProps[]>([])

	const getVacancies = async () => {

		try {
			const { data } = await axios.get(`https://mihailpov123.github.io/apidata/vacancies.json`);

			setVacancies(data.vacancies)

		} catch (error) {

			console.log('error', error);

		}

	}


	useEffect(() => {

		getVacancies()

	}, [])

	return (
		<div className={styles['vacancies-page']}>
			<div className={styles['title']}>
				Вакансии
			</div>

			<div className={styles['vacancies']}>
				{
					vacancies.map(vacancy =>
						<Vacancy {...vacancy} key={vacancy.id} />
					)
				}

			</div>
		</div>
	)
}

export default VacanciesPage