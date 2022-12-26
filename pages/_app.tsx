import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/css/menu.css';
import '../styles/css/owl.carousel.min.css';
import '../styles/css/owl.theme.default.min.css';
import '../styles/css/flexslider.css';
import '../styles/css/pink-theme.css';
import '../styles/css/responsive.css';

import Script from 'next/script';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>


      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
