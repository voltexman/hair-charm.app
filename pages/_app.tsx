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
      <Script src="/js/jquery-3.4.1.min.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/modernizr.custom.js" />
      {/* <script src="/js/jquery.easing.js"></script> */}
      {/* <script src="/js/jquery.appear.js"></script> */}
      <Script src="/js/jquery.scrollto.js" />
      <Script src="/js/menu.js" />
      <Script src="/js/materialize.js" />
      <Script src="/js/tweenmax.min.js" />
      <Script src="/js/slideshow.js" />
      <Script src="/js/imagesloaded.pkgd.min.js" />
      <Script src="/js/isotope.pkgd.min.js" />
      <Script src="/js/jquery.flexslider.js" />
      <Script src="/js/owl.carousel.min.js" />
      <Script src="/js/jquery.magnific-popup.min.js" />
      {/* <script src="/js/hero-form.js"></script> */}
      {/* <script src="/js/contact-form.js"></script> */}
      {/* <script src="/js/comment-form.js"></script> */}
      {/* <script src="/js/booking-form.js"></script> */}
      {/* <script src="/js/jquery.datetimepicker.full.js"></script>
      <script src="/js/jquery.validate.min.js"></script>
      <script src="/js/jquery.ajaxchimp.min.js"></script> */}

      <Script src='/js/custom.js' />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
