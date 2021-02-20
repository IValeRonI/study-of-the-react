import mod from './Header.module.css';

const Header = (props) => {
    return (
        <header className={mod.header}>
            <div className={mod.header_text}>Jungla</div>
        </header>
    );
}

export default Header;