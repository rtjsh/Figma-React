import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [SearchTerm, setSearchTerm] = useState("");
  return (
    <main>
        <div className='pattern'>
            <div div className="wrapper">
                <header>
                    <img src="/images/hero.png" alt="" />
                    <h1>Find <span className='text-gradient'>Movie</span> You'll enjoy Without the Hassle</h1>
                </header>
                <Search SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
            </div>
        </div>
    </main>
  )
}

export default App
