import { useLoaderData } from "react-router-dom"


function Userdetails() {
    const userdetailsstyle = {
        border:"2px solid purple",
        padding:"10px",
    }
    const userdetails = useLoaderData() ;
    const {name,phone} = userdetails;
  return (
    <div style={userdetailsstyle}>
        <h2>het this is user details : {name}</h2>
        <h4>het this is user details : {phone}</h4>
    </div>
  )
}

export default Userdetails