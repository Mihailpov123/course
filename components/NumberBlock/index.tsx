import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

type NumberBlockProps = {
	number: string
	text: string | ReactNode
}


const NumberBlock: FC<NumberBlockProps> = ({ number, text }) => {
	return (
		<div className={styles['number-block']}>
			<div className={styles['number']}>
				{number}
			</div>
			<div className={styles['content']}>
				{text}
			</div>
		</div>
	)
}

export default NumberBlock