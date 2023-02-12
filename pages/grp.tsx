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
                <img src='./psych.png' className='w-full h-auto'/>
            </div>
            <div className='md:py-24 flex flex-col gap-6 md:w-1/2 w-full'>
                <h1 className='font-poppins text-3xl md:text-5xl font-semibold'>Support Groups at Coral</h1>
                <div className='h-[4px] w-1/3 bg-gradient-to-r from-primary to-secondary'></div>
                <p className='text-xl font-cabin text-light'>
                In a support group, members provide each other with various types of help, usually nonprofessional and nonmaterial, for a particular shared, usually burdensome, characteristic. Members with the same issues can come together for sharing coping strategies, to feel more empowered and for a sense of community. The help may take the form of providing and evaluating relevant information, relating personal experiences, listening to and accepting others' experiences, providing sympathetic understanding and establishing social networks. A support group may also work to inform the public or engage in advocacy.
                </p>
            </div>
        </div>

      <Footer />

    </div>
  )
}
