import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ClipboardJS from "clipboard";
import Description from '@components/Description';

if (typeof window !== "undefined") {
  new ClipboardJS(".button");
}


export default function Home() {
   
  return (
    
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
        
      </Head>

      <main>


        

        <Header title="Welcome to Next Earth 🌍" />

        <Description description="Use this promo code to get a discount starting 5% and more, the more you use, the more you get discounts & remember... don't buy a single tile without a promo code, so that  you can  benefit! 🙂"/>

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



        
      </main>
      <Footer />
    </div>
  )
  
}

