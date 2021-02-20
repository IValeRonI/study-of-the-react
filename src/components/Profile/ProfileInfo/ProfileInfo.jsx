import mod from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={mod.background_profile}>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
            </div>
            <div>
                аватар + описание
            </div>
        </div>
    );
}

export default ProfileInfo;