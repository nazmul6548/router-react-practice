import { useLoaderData } from "react-router-dom"
import User from "../User/User";


function Users() {
    const Users =useLoaderData();
    console.log(Users);
    const usersty={
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: "1rem",
        padding: "10px"
    }
  return (
    <div  >
        <h2>our user : {Users.length}</h2>
        <h1>hi i am user</h1>
        <div style={usersty}>
        {
            Users.map(user => <User key={user.id} user={user}></User>)
        }
        </div>
    </div>
  )
}

export default Users