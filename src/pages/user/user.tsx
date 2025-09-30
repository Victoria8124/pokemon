import { useState } from "react";
import { useNavigate } from "react-router";

type Post = {
  id: number;
  title: string;
  body: string;
};
import axios from "axios";


const User = () => {
   const navigation = useNavigate();
   // const [users, setUsers] = useState();
   const [posts, setPosts] = useState<Post[]>([]);
   const [isActive, setIsActive] = useState<boolean>(true);

const handleAdmin = () => { 
      navigation("/admin");
}

const activPost = async () => {
  const rest = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(rest.data);
  const filterPosts = rest.data.filter((posts: Post) => posts.id  !== 4)
  setPosts(filterPosts);
};

const sortTitle = () => {
      const sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
      setPosts(sortedPosts);
}

const sortId = () => {
  const sortedId = [...posts].sort((a, b) => isActive ? b.id - a.id : a.id - b.id);
      setIsActive(!isActive);
  setPosts(sortedId);
}


    return (
      <>
        <button onClick={handleAdmin}>Admin</button>
        <div>User</div>
        <button onClick={activPost}>Post</button>
        <button onClick={sortTitle}>Sort: title</button>
        <button onClick={sortId}>Sort: id</button>
        {posts.map((post) => (
          <div key={post.id}>
            {post.id}. {post.title}
          </div>
        ))}
      </>
    );
}
export default User;