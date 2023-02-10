import { FC } from 'react'
import styles from './styles.module.scss'

type VacancyConditionsGroupProps = {
	title: string
	conditions: string[]
}

const VacancyConditionsGroup: FC<VacancyConditionsGroupProps> = ({ title, conditions }) => {
	return (
		<div className={styles['conditions']}>
			<div className={styles['conditions__title']}>
				{title}
			</div>
			{
				conditions.map((condition, index) =>
					<div key={index}>
						<span className={styles['conditions__dash']}>&mdash;&nbsp;</span>
						<span className={styles['conditions__item']}>
							{condition}
						</span>
					</div>
				)
			}
		</div>
	)
}

export default VacancyConditionsGroup