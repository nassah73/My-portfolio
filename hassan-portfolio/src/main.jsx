import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './about/About.jsx'

createRoot(document.getElementById('root')).render(
        
              <div className="bg-[#1f1f1f] w-screen h-screen z-0 relative">
                <Router>
                    <Routes>
                       <Route path='/' element={<App/>}/>
                       <Route path='/About' element={<About/>}/>
                       <Route path='/Projects' element={<Projects/>}/>
                       <Route path='/Skills' element={<Skills/>}/>
                       <Route path='/Contact' element={<Contact/>}/>
                    </Routes>
                </Router>
                
              </div>
    
)
