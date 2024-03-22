import { useLoaderData, useNavigate } from "react-router-dom"


function Postdetails() {
  const navigate = useNavigate()
    const post = useLoaderData();
    console.log(post);
    const {userId,title,id} = post;
    const handleclick = () => {
navigate(-1)
    } 
     return (
    <div>
        <h1>post user id : {userId}</h1>
        <p>title : {title}</p>
        <h2>id : {id}</h2>

        <button onClick={handleclick}>go back</button>
    </div>
  )
}

export default Postdetails