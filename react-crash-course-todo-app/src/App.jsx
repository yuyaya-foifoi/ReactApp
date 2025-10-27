import {useState} from 'react';
import PostList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModelHandler(){
      setModalIsVisible(true);
    }

  function hideModelHandler(){
      setModalIsVisible(false);
    }
  
  
  return <>
  <MainHeader onCreatePost={showModelHandler}/>
  <main>
    <PostList isPosting={modalIsVisible} onStopPosting={hideModelHandler}/>
  </main>
  </>;
}

export default App;
