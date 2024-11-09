import React from 'react'
import { Footer, Header } from './pages'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <section>
       <Header />
       <main className='min-h-screen'>
          <Outlet />
       </main>
       <Footer/>
    </section>
  )
}

export default App