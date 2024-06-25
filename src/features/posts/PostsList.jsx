import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';


const PostsList = () => {

  const[title,setTitle] = useState('');
  const[content,setContent] = useState('');

  const posts = useSelector(s=>s.posts);
  const dispatch = useDispatch();



  const submitData = (e)=>{

    e.preventDefault();
    //dispatch is a method used to send actions to the store
    dispatch(
      addData({
        id:nanoid(),
        title,
        content,
      })
    );
    
    setTitle('');
    setContent('');
  }
  

  return (
    <>
      <div>
        {
          posts.map(item=>{
            return(
              <div key={item.id}>
                <h3>Name:{item.title}</h3>
                <h3>Content:{item.content}</h3>
              </div>
            )
          })
        }
      </div>
      <hr/>

      <form>
        <label>Title:</label>
        <input type='text' onChange={e=>setTitle(e.target.value)} value={title}/><br /><br />
        <label>Content:</label>
        <input type='text' onChange={e=>setContent(e.target.value)} value={content}/><br /><br />
        <button type='submit' onClick={submitData}>Submit</button>
      </form>
    </>
    
  )
}

export default PostsList