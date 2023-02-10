import { AboutCompany } from 'assets/images/AboutCompany'
import { FC } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

import IconClose from 'assets/icons/IconClose.svg'

type PopupProp = {
	title: string
	image: StaticImageData
	content: string
	setVisiblePopup: (visible: boolean) => void

}

const Popup: FC<PopupProp> = ({ title, image, content, setVisiblePopup }) => {
	return (
		<div className={styles['popup__wrap']}>
			<div className={styles['popup']}>
				<IconClose
					className={styles['iconClose']}
					onClick={() => setVisiblePopup(false)}
				/>
				<div className={styles['title']}>
					{title}
				</div>

				<div className={styles['image']}>
					<Image src={image} layout='fill' objectFit='contain' />
				</div>

				<div className={styles['content']}>
					{content}
				</div>
			</div>
		</div>

	)
}

export default Popup