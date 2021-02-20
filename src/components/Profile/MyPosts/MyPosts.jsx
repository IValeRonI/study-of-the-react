import mod from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, text: 'ра-па-пам', likecount:15},
        {id: 2, text: 'hey!', likecount:10},
        {id: 3, text: 'frrrrr...', likecount:28}
    ];

    let postsElements = posts.map(
        (p) => { return <Post text={p.text} likecount={p.likecount} />}
    );

    return (
        <div>
            <h3>Мои посты</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div className={mod.addButton}>
                    <button>Добавить</button>
                </div>
            </div>
                {postsElements}
        </div>
    );
}

export default MyPosts;