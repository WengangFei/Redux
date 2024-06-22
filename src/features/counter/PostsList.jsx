

import { useSelector } from "react-redux";
// import { selectAllPosts } from "./postsSlice";

const PostList = () => {


  const posts = useSelector(state=>console.log(state));


  return (
    <div>
      Postlist
      {
        posts.map(item=>{
          return(
            <div key={item.id}>
              <div>{item.title}</div>
              <div>{item.content}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostList