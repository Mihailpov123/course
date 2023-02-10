import { InputHTMLAttributes, ReactElement } from 'react'
import classNames from 'classnames'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	label: string | ReactElement
	id: string
}

import styles from './styles.module.scss'

const Checkbox: React.FC<CheckboxProps> = ({ className, label, ...rest }) => {

	return (
		<div className={classNames(styles['checkbox'], className)} >
			<input
				className={
					classNames(
						styles['control'],
					)
				}
				type="checkbox"
				{...rest}
			/>
			<label htmlFor={rest.id}>{label}</label>

		</div>
	)
}

export default Checkbox
