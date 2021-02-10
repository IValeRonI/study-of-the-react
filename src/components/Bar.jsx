import modules from './css-modules/Bar.module.css';

const Bar = () => {
    return (
        <nav className={modules.bar}>
            <div className={modules.bar_blocktext}>
                <div className={`${modules.item} ${modules.active}`}>
                    <a>Профиль</a>
                </div>
                <div className={modules.item}>
                    <a>Сообщения</a>
                </div>
                <div className={modules.item}>
                    <a>Новости</a>
                </div >
                <div className={modules.item}>
                    <a>Музыка</a>
                </div>
                <div className={modules.item}>
                    <a>Настройки</a>
                </div>
            </div>
        </nav>
    );
}

export default Bar;