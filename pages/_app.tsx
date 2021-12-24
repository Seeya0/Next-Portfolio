import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 px-5 my-32 sm:px-20 md:px-32 lg:px-48'>
        <div className='lg:col-span-3 col-span-12 bg-[#FFFAF0] dark:bg-dark-500 rounded-2xl p-4 text-center overflow-hidden shadow-custom-light dark:shadow-custom-dark'>
          <SideBar />
        </div>

        <div className='lg:col-span-9 col-span-12 bg-[#FFFAF0] dark:bg-dark-500 rounded-2xl flex flex-col overflow-hidden shadow-custom-light dark:shadow-custom-dark'>
          <NavBar />

          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
