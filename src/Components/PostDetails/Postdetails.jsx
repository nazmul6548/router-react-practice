import { useLoaderData } from "react-router-dom"


function Postdetails() {
    const post = useRouteData();
    console.log(Post);
    const {userId,title,id} = post;
  return (
    <div>
        <h1>post user id : {userId}</h1>
        <p>{title}</p>
        <h2>{id}</h2>
    </div>
  )
}

export default Postdetails