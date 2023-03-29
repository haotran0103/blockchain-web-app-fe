import '@/public/assets/css/main.css'
import '@/public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '@/public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '@/public/assets/vendor/swiper/swiper-bundle.min.css'
import '@/public/assets/vendor/glightbox/css/glightbox.min.css'

import Layout from '../components/layout/layout.jsx'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
