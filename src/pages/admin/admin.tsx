import { useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';

const Admin = () => {
    const navigation = useNavigate();
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Vika");

    
    const handleAdmin = () => {
        navigation("/admin");
    };

    const handleUser = () => {
        navigation("/login");
    };
  
    const increment = () => {
      setCount(count + 1);
      return count;
    }

    useEffect(() => {
      console.log("🔥 Без зависимостей — вызывается после каждого рендера");
    }) 

    useEffect(() => {
      console.log("✅ Пустой массив — вызывается один раз при монтировании");
    }, [])

    useEffect(() => {
      console.log("👀 [count] — вызывается при изменении count");
    }, [count])

    useEffect(() => {
      console.log("👀 [name] — вызывается при изменении user и count");
    }, [name, count]);
 
    return (
      <>
        <h1>Admin</h1>
        <p>Counter: {count}</p>
        <p>User: {name}</p>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={() => setName(name === "Вика" ? "Пикачу" : "Вика")}>
            изменить имя
          </button>
          <button onClick={handleAdmin}>Admin</button>
          <button onClick={handleUser}>Login</button>
        </div>
      </>
    );
};

export default Admin;