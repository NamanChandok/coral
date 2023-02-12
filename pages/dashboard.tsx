import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {feedData} from '../data/feedData'
import Card from '../components/Card'
 

function Dashboard() {

  const user = {
    name: "Naman Chandok",
    email: "namanchandok1@gmail.com",
    diagnosis: "Moderate Indication of Anxiety Disorder"
  }

  const feed = feedData;

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

      <Navbar logged />

      <div className='flex flex-col gap-8 px-6 md:px-36 pt-32 py-10' >

        <h1 className='font-poppins text-3xl font-semibold'>Welcome, <span className='underline decoration-secondary'>{user.name}</span></h1>

        <div className='flex flex-col md:flex-row md:space-x-16'>

          {user.diagnosis ? 
            <div className='bg-secondary/80 hover:bg-secondary p-6 rounded-lg w-full md:w-2/3 gap-4 flex flex-col md:flex-row transition-all duration-150 ease-in-out'>
              <img src='./quiz.png' className='w-full md:h-28 md:w-1/4 object-contain' />
              <div className='w-full md:w-3/4'>
                <h3 className='text-2xl text-[#af5c6f] font-bold font-poppins tracking-tight'>Your Diagnosis</h3>
                <p className='font-cabin pt-1 pb-3'>{user.diagnosis}</p>
                <a className='py-1 px-4 bg-white text-[#af5c6f] rounded-2xl uppercase transition ease-in-out duration-150 hover:shadow-lg text-sm' href='dash-psych'>CHECK PSYCHOLOGISTS NEAR YOU</a>
              </div>
            </div> :
            <div className='bg-secondary/80 hover:bg-secondary p-6 rounded-lg w-full md:w-2/3 gap-4 flex flex-col md:flex-row transition-all duration-150 ease-in-out'>
              <img src='./quiz.png' className='w-full md:h-28 md:w-1/4 object-contain' />
              <div className='w-full md:w-3/4'>
                <h3 className='text-2xl text-[#af5c6f] font-bold font-poppins tracking-tight'>Take Our Diagnosis Test</h3>
                <p className='font-cabin pt-1 pb-3'>A short quiz prepared by coral to find out your current mental status.</p>
                <a className='py-1 px-4 bg-white text-[#af5c6f] rounded-2xl uppercase transition ease-in-out duration-150 hover:shadow-lg text-sm' href='quiz'>Take the test</a>
              </div>
            </div>
          }
          

          <div className='hidden flex-col space-y-8 w-full md:w-1/3 py-4 md:py-0 items-center justify-center md:flex'>
            <img src='./home-text.png' alt="coral always there for you" className='md:h-32 md:w-auto w-full h-auto'/>
          </div>
        </div>

        <div className='flex flex-col md:flex-row overflow-scroll w-full scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary md:space-x-8'>
          
          {feed.map((card, i) => ( 
              <Card key={i} {...card} />
          ))}

        </div>

      </div>

      <Footer logged/>

    </div>
  )
}

export default Dashboard;