import { InputHTMLAttributes } from 'react'
import classNames from 'classnames'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode;
	error?: boolean
	classNameInput?: string
}

import styles from './styles.module.scss'

const Input: React.FC<InputProps> = ({ children, classNameInput, error, ...rest }) => {

	const { className, ...attr } = rest

	return (
		<div className={classNames(styles['wrap'], className && className)} >
			<input
				className={
					classNames(
						styles['input'],
						error && styles['input--error'],
						classNameInput && classNameInput,
					)
				}
				{...attr}
			/>
			{children}
		</div>

	)
}

export default Input