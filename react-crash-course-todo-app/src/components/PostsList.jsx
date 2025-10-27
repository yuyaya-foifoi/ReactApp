import Post from './Post';
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import { useState } from 'react';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  
    function changeBodyHandler(event){
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event){
      setEnteredAuthor(event.target.value);
  }

  return (
    <>
    {isPosting ? (
    <Modal onClose={onStopPosting}>
      <NewPost onChangeBody={changeBodyHandler} onChangeAuthor={changeAuthorHandler}/>
    </Modal>) : null
    }
    
    
    <ul className={classes.posts}>
      <Post author={enteredAuthor} body={enteredBody}/>
      <Post author="mia" body="japan is awesome"/>
      {/* <Post author="mimi" body="japan is awesome"/>
      <Post author="rui" body="japan is awesome"/> */}
    </ul>
    </>
  );
}

export default PostsList;
