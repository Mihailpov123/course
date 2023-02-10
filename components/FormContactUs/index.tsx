import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import Button from 'components/ui/Button'
import Input from 'components/ui/Input'

import Textarea from 'components/ui/Textarea'
import Checkbox from 'components/ui/CheckBox'

import IconSend from 'assets/icons/IconSend.svg'
import IconPreloader from 'assets/icons/IconPreloader.svg'

import styles from './styles.module.scss'


const FormContactUs = () => {

	const [attemptSubmit, setAttemptSubmit] = useState<boolean>(false)

	const [selectAgree, setSelectAgree] = useState<boolean>(false)

	const [loadingSend, setLoadingSend] = useState<boolean>(false)

	const [messageSuccessSubmit, setMessageSuccessSubmit] = useState<boolean>(false)


	const onSubmitForm = () => {

		selectAgree && setAttemptSubmit(true)
	}

	useEffect(() => {

		setTimeout(() => {
			setMessageSuccessSubmit(false)
		}, 3000);

	}, [messageSuccessSubmit])


	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Это поле обязательно для заполнения'),
		email: Yup.string().email('Логин должен быть действительным адресом электронной почты')
			.required('Это поле обязательно для заполнения'),
		message: Yup.string()
	})


	const initialValues = {
		name: '',
		email: '',
		message: '',
	}


	const formik = useFormik({
		validationSchema,
		initialValues,
		validateOnBlur: false,
		validateOnChange: attemptSubmit,
		initialStatus: false,

		onSubmit: async (values) => {

			if (selectAgree) {
				const message = encodeURI(`
				Имя: ${values.name}
				Email: ${values.email}
				Сообщение: ${values.message}
			`)

				setLoadingSend(true)

				try {
					const { data } = await axios.post(`https://api.telegram.org/bot${process.env.token}/sendMessage?chat_id=${process.env.chat_id}&parse_mode=html&text=${message}`);

					setAttemptSubmit(false)

					setLoadingSend(false)

					setMessageSuccessSubmit(true)

					formik.resetForm()

				} catch (error) {

					console.log('error', error);

					setLoadingSend(false)

				}
			}
		}
	})


	return (
		<div className={styles['form__wrap']}>

			<form className={styles['form']} onSubmit={formik.handleSubmit} autoComplete="off">
				<div className={styles['title']}>
					Связаться с нами
				</div>

				{
					messageSuccessSubmit &&
					<div className={styles['form__messageSuccess']}>
						Ваша заявка отправлена
					</div>
				}

				<div className={styles['fields']}>
					<div className={styles['field']}>
						<Input
							name='name'
							value={formik.values.name}
							onChange={formik.handleChange}
							placeholder='Имя'
							onBlur={() => formik.errors.name && formik.validateField('name')}
							error={attemptSubmit && formik.errors.name ? true : false}
						/>
						{
							attemptSubmit && formik.errors.name && <div className={styles['form__inputError']}>{formik.errors.name}</div>
						}
					</div>


					<div className={styles['field']}>
						<Input
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							placeholder='Email'
							onBlur={() => formik.errors.email && formik.validateField('email')}
							error={attemptSubmit && formik.errors.email ? true : false}
						/>
						{
							attemptSubmit && formik.errors.email && <div className={styles['form__inputError']}>{formik.errors.email}</div>
						}
					</div>

				</div>

				<div className={styles['fields']}>
					<Textarea
						name='message'
						value={formik.values.message}
						onChange={formik.handleChange}
						placeholder='Ваше сообщение'
					/>
				</div>

				<div className={styles['bottom']}>
					<Button
						className={styles['btnSubmit']}
						text={
							!loadingSend ?

								<div className={styles['btnSubmit__text']}>
									<IconSend />
									<div>
										Отправить
									</div>
								</div>
								:
								<IconPreloader className={styles['btnSubmit__preloader']} />
						}
						onClick={() => onSubmitForm()}
						dark={loadingSend}
						disabled={!selectAgree}
						type='submit'
					/>

					<Checkbox label={
						<div className={styles['checkbox__text']}>
							Я&nbsp;согласен&nbsp;
							<Link href='#'>
								<a className={styles['checkbox__link']}>
									с&nbsp;политикой конфиденциальности и&nbsp;использования запрашиваемых данных
								</a>
							</Link>
						</div>
					}
						checked={selectAgree}
						onChange={(e) => setSelectAgree(e.target.checked)}
						id={'checkbox'}

					/>
				</div>


			</form>

		</div>
	)
}

export default FormContactUs
