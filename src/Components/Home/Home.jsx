import { Outlet } from "react-router-dom"
import Header from "../Header/Header"


function Home() {
  return (
    <div>
        
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default Home