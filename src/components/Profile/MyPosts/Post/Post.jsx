import mod from './Post.module.css';

const Post = (props) => {
    return (
        <div className={mod.item}>
            <div>
                <img src='https://www.meme-arsenal.com/memes/49071e21f0cb7d1090b8820fbb37f925.jpg' />
            </div>
            <div>{props.message}</div>
            <div>{props.likecount} likes</div>
        </div>
    );
}

export default Post;