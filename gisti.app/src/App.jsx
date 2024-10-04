
import './App.css'
import { Dashboard } from './pages/dashboard'
import { Navbar } from './components/navbar'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { PublicPage } from './pages/publicPage'
import { Viewgist } from './pages/viewgist'
function App() {
  // const [count, setCount] = useState(0)

  return <div className='bg-cyan-900 h-full'>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Dashboard/>} /> 
        <Route path='/publicPage' element={<PublicPage/>} /> 
        <Route path='/publicgist/viewgist' element={<Viewgist/>} />
      </Routes>
    </BrowserRouter>
  {/* <Navbar/>
  <Dashboard/> */}
  </div>
}

export default App
