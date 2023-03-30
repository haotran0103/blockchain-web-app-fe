import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cardo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
        <Main />
        <NextScript />
        <Script src="./public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script src="./public/assets/vendor/swiper/swiper-bundle.min.js"></Script>
        <Script src="./public/assets/vendor/glightbox/js/glightbox.min.js"></Script>
        <Script src="./public/assets/vendor/aos/aos.js"></Script>
        <Script src="./public/assets/vendor/php-email-form/validate.js"></Script>
        <Script src="./public/assets/js/main.js"></Script>
      </body>
    </Html>
  )
}
