import Footer from 'components/Footer'
import FormContactUs from 'components/FormContactUs'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import Header from '../components/Header'

import '../scss/main.scss'

function MyApp({ Component, pageProps }: AppProps) {

	const { pathname } = useRouter()

	return (
		<>
			<Header visibleBanner={pathname === '/'} />
			<Component {...pageProps} />
			<FormContactUs />
			<Footer />
		</>
	)
}

export default MyApp
