import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Content from './components/Content'
import './App.css'

function RootLayout() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="h-screen w-screen grid grid-cols-[64px_1fr] grid-rows-[auto_1fr]">
      <aside className="row-span-2 col-start-1 col-end-2">
        <Nav />
      </aside>
      <header className="col-start-2 col-end-3 row-start-1 row-end-2">
        <Header />
      </header>
      <main className="col-start-2 col-end-3 row-start-2 row-end-3 overflow-auto">
        <Content />
      </main>
    </div>
    </>
  )
}

export default RootLayout
