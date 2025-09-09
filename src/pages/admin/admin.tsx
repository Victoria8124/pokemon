import { useNavigate } from "react-router-dom";


const Admin = () => {
    const navigation = useNavigate();

    
    const handleAdmin = () => {
        navigation("/admin");
    };

    const handleUser = () => {
        navigation("/login");
    };
    
    return (
    <>
      <h1>Admin</h1>
      <div>
        <button onClick={handleAdmin}>Admin</button>
        <button onClick={handleUser}>Login</button>
      </div>
    </>
  );
};

export default Admin;