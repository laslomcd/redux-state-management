import React from 'react';

import './App.css';



import Posts from './components/posts.component/posts.component';
import PostForm from './components/post-form.component/post-form.component';

function App() {
    return (
        <div className="App">
            <PostForm />
            <hr />
            <Posts />
        </div>
    );
}

export default App;
