import MyPosts from './MyPosts/MyPosts'
import mod from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <hr />
            <MyPosts />
        </div>
    );
}

export default Profile;