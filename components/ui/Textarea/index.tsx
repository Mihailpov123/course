import classNames from 'classnames'
import { FC, TextareaHTMLAttributes } from 'react';

export interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	children?: React.ReactNode;
	error?: boolean
	classNameTextArea?: string
}

import styles from './styles.module.scss'

const Textarea: FC<InputProps> = ({ children, classNameTextArea, error, ...rest }) => {
	const { className, ...attr } = rest

	return (
		<div className={classNames(styles['wrap'], className && className)} >
			<textarea
				className={
					classNames(
						styles['input'],
						error && styles['input--error'],
						classNameTextArea && classNameTextArea,
					)
				}
				{...attr}
			/>
			{children}
		</div>

	)
}

export default Textarea