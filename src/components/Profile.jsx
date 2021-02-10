import modules from './css-modules/Profile.module.css'

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
      </div>
      <div>
        avatar + discription
        </div>
      <div>
        My posts
          <div>
          Window + button (New post)
          </div>
        <div className={modules.posts}>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
          <div>
            post ..n
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;