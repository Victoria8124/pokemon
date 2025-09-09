//import { useState } from "react";
import { useNavigate } from "react-router";

const User = () => {
   const navigation = useNavigate();
   // const [users, setUsers] = useState();

const handleAdmin = () => { 
      navigation("/admin");
}
    return ( 
      <>
      <button onClick={handleAdmin}>Admin</button>
       <div>User</div>
      </>
       
     );
}
export default User;