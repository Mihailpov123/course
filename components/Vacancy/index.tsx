import Button from 'components/ui/Button'
import { useRouter } from 'next/router'
import { VacanciesPageProps } from 'pages/vacancies'
import { FC } from 'react'
import styles from './styles.module.scss'

const Vacancy: FC<VacanciesPageProps> = ({ id, title, conditions, price }) => {

	const router = useRouter()

	return (
		<div className={styles['vacancy']}>
			<div className={styles['title']}>
				{title}
			</div>

			<div className={styles['preview']}>
				{
					conditions.map((item, index) =>
						<div className={styles['preview__item']} key={index}>
							{item}
						</div>
					)
				}
			</div>

			<div className={styles['price']}>
				{price}
			</div>

			<Button
				className={styles['btnMore']}
				onClick={() => router.push(`/vacancy/${id}`)}
				text='Подробнее'
			/>





		</div>
	)
}

export default Vacancy