import React from 'react';
import PostForm from './components/posts/PostForm';
import Posts from './components/posts/Posts';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/configStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <PostForm />
        <hr/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
