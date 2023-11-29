import React, {useState} from "react";
import Counter from "./components/Counter";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButtons from "./components/UI/buttons/MyButtons";
import MyInput from "./components/UI/input/MyInput";


function App() {
const [posts, setPosts] = useState([
    {id: 1, title: 'Javascrip', body: 'Discriptions'},
    {id: 2, title: 'Javascrip', body: 'Discriptions'},
    {id: 3, title: 'Javascrip', body: 'Discriptions'}
])
const [title, setTitle] = useState('')
    const addNewPost = () => {

    }


    return (
    <div className="App">
        <form>
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                     type="text" placeholder="Названия постов"/>
            <MyInput type="text" placeholder="Описания постов"/>
            <MyButtons onClick={addNewPost}>Создать Пост</MyButtons>
        </form>
        <PostList posts={posts} title="Список Постов 1"/>
    </div>
  );
}

export default App;
