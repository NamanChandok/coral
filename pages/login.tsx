import Head from 'next/head'
import Link from 'next/link'

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


      <div className="h-screen w-screen flex flex-row items-center justify-center bg-[url('/form-texture.svg')] bg-cover p-4">
            <div className='flex flex-col w-full md:w-3/5 bg-white rounded-lg shadow-md text-center items-center justify-center p-8 md:p-16 space-y-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent max-h-full'>
                <h1 className='font-poppins text-4xl md:text-5xl font-semibold'>Login</h1>
                <div className='h-[4px] w-1/3 bg-gradient-to-r from-primary to-secondary'></div>
                <form className='flex flex-col space-y-3 w-3/5 mx-auto' action='/dashboard'>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="outline-none bg-slate-400/10 rounded-md border-b border-gray-600 px-6 py-4 text-gray-500 placeholder-gray-900/70 transition-all focus:text-gray-900 focus:border-primary"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="outline-none bg-slate-400/10 rounded-md border-b border-gray-600 px-6 py-4 text-gray-500 placeholder-gray-900/70 transition-all focus:text-gray-900 focus:border-primary"
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-primary/80 text-gray-900 font-semibold cursor-pointer px-6 py-3 w-full rounded-md hover:bg-primary transition transition-400 ease-in-out"
                    />
                </form>
                <p className='text-md font-cabin'>Don&apos;t have an account? <a href='signup' className='text-primary font-semibold'>Sign Up</a></p>      
                <hr className='border w-full'/>
                <Link href='/'><img src='./home-text.png' alt='coral always there for you' className='w-full md:w-auto md:h-16'/></Link>          
            </div>
        </div>


    </div>
  )
}
