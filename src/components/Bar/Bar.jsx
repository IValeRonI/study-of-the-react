import mod from './Bar.module.css';

const Bar = () => {
    return (
        <nav className={mod.bar}>
            <div className={mod.bar_blocktext}>
                <div className={`${mod.item} ${mod.active}`}>
                    <a>Профиль</a>
                </div>
                <div className={mod.item}>
                    <a>Сообщения</a>
                </div>
                <div className={mod.item}>
                    <a>Новости</a>
                </div >
                <div className={mod.item}>
                    <a>Музыка</a>
                </div>
                <div className={mod.item}>
                    <a>Настройки</a>
                </div>
            </div>
        </nav>
    );
}

export default Bar;