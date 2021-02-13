import mod from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            Мои посты
            <div>
                <textarea></textarea>
                <button>Добавить пост</button>
            </div>
            <Post message='ра-па-пам' likecount='15'/>
            <Post message='hey!' likecount='10'/>
            <Post message='frrrrr...' likecount='28'/>
        </div>
    );
}

export default MyPosts;