import { NavLink } from 'react-router-dom';
import mod from './Bar.module.css';

const Bar = (props) => {
    return (
        <nav className={mod.bar}>
            <div className={mod.bar_blocktext}>
                <div className={mod.item}>
                    <NavLink to='/profile' activeClassName={mod.active}>Профиль</NavLink>
                </div>
                <div className={mod.item}>
                    <NavLink to='/dialogs' activeClassName={mod.active}>Сообщения</NavLink>
                </div>
                <div className={mod.item}>
                    <NavLink to='/news' activeClassName={mod.active}>Новости</NavLink>
                </div >
                <div className={mod.item}>
                    <NavLink to='/music' activeClassName={mod.active}>Музыка</NavLink>
                </div>
                <div className={mod.block_settings}>
                    <div className={mod.item}>
                        <NavLink to='/settings' activeClassName={mod.active}>Настройки</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Bar;