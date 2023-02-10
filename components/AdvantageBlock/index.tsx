import { FC, ReactNode } from 'react'

import {
	IconCheck,
	IconFinance,
	IconOrder,
	IconQuality,
	IconRocket
} from 'assets/icons/Advantages'

export const components = {
	icon_rocket: IconRocket,
	icon_check: IconCheck,
	icon_finance: IconFinance,
	icon_quality: IconQuality,
	icon_order: IconOrder,
}

type IconProps = {
	code: keyof typeof components
	className: string
}

import styles from './styles.module.scss'
import { AdvantageProps } from 'pages'


const AdvantageBlock: FC<AdvantageProps> = ({ icon, title, text }) => {
	return (
		<div className={styles['advantage-block']}>
			<Icon className={styles['icon']} code={icon} />
			<div className={styles['title']}>
				{title}
			</div>
			<div className={styles['info']}>
				{text}
			</div>
		</div>
	)
}

const Icon: FC<IconProps> = ({ code, className }) => {

	const IconStory = components[code];

	return <IconStory className={className} />;
}

export default AdvantageBlock