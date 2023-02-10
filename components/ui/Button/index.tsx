import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string | ReactNode
	dark?: boolean
	disabled?: boolean
}

import styles from './styles.module.scss'


const Button: FC<ButtonProps> = ({ text, dark = false, disabled, ...attr }) => {

	const { className, ...rest } = attr

	return (
		<button
			className={classNames(styles['button'], dark && styles['button--dark'], disabled && styles['button--disabled'], className)}
			{...rest}
		>
			{text}

		</button>
	)
}

export default Button