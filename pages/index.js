import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ClipboardJS from "clipboard";
import Description from '@components/Description';
import Script from 'next/script'

if (typeof window !== "undefined") {
  new ClipboardJS(".button");
}


export default function Home() {
   
  return (
    
   <html>
      <Head>
        <title>Next Earth Promo</title>
        <meta name="title" content="Next Earth Promo Code - VP64TEEA75 - Up to 10%"/>
        <meta name="keywords" content="nextearth., next earth promo, next earth promo code, promo code nextearth.io, coupon codes, deals, discount, promo code>"></meta>
        <meta name="description" content="Next Earth Promo Code. Get 10% discount on Next Earth metaverse. Get nextearth.io coupon codes, discounts and promos and save up to 10%"></meta>
        
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
        

        {/* Facebook  Open Graph*/}
        <meta property="og:title" content="Next Earh Promo - VP64TEEA75 - Up to 10%" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextearthpromo.com" />
        <meta property="og:image" content="https://nextearthpromo.com/earth.png" />
        <meta property="og:description" content="Next Earth Promo Code. Get 10% discount on Next Earth metaverse. Get nextearth.io coupon codes, discounts and promos and save up to 10%" />


        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Next Earh Promo - VP64TEEA75 - Up to 10%" />
        <meta name="twitter:description" content="Next Earth Promo Code. Get 10% discount on Next Earth metaverse. Get nextearth.io coupon codes, discounts and promos and save up to 10%" />


        </Head>
        <body>
         <div className="container">
        <main>
          <Header title="Welcome to Next Earth 🌍" />

          <Description description="What is a Promo Code & why to use it specially  in Next Earth? Promo code is the only thing that helps you save, and have discounts on your every single purchase starting from 5% and more... The more you use this code the more it increases and benefits you. Use this promo code to get your discounts. And remember... don't buy a single tile without a promo code, in order not to miss the Lovely discounts ! 🙂"/>

          <h3 className="text-center">
            Use the Promo Code  
          </h3>
          <h3>
          <code id="promo1">VP64TEEA75</code>
          <div className='button btn' data-clipboard-action="copy" data-clipboard-target="#promo1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
                  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
                </svg>

              </div>
          </h3>

          <img class="img-fluid" src="earth.gif"/>
        </main>
        <Footer />

        
        {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script src="https://www.google-analytics.com/analytics.js"></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VWZ2P1T855" />
        <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-VWZ2P1T855');`,
            }}
          />
        
      </div>
    </body>

    </html>
  )
  
}

