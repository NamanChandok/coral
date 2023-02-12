import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='h-screen overflow-y-scroll scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-secondary/80 scroll-smooth'>
      <Head>
        <title>Coral | Always There For You</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.png" />      
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&family=Poppins:wght@600&family=Lato:wght@400&display=swap"
          rel="stylesheet"/>
      </Head>

      <Navbar />

        <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-6 md:px-48 md:pt-24 py-10'>
            <div className='w-full md:w-1/2 pt-28 md:pt-0'>
                <img src='./phys.png' className='w-full h-auto'/>
            </div>
            <div className='md:py-24 flex flex-col gap-6 md:w-1/2 w-full'>
                <h1 className='font-poppins text-3xl md:text-5xl font-semibold'>Support Groups at Coral</h1>
                <div className='h-[4px] w-1/3 bg-gradient-to-r from-primary to-secondary'></div>
                <p className='text-xl font-cabin text-light'>
                Physiotherapists help people affected by injury, illness or disability through movement and exercise, manual therapy, education and advice. They maintain health for people of all ages, helping patients to manage pain and prevent disease. We here at coral, have great physiotherapists who are always ready to help you out.
                </p>
            </div>
        </div>

      <Footer />

    </div>
  )
}
