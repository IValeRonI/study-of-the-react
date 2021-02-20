import { NavLink } from 'react-router-dom';
import mod from './Dialogs.module.css';

const Interlocutor = (props) => {
    return (
        <div className={mod.interlocutor}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={mod.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={mod.message}>{props.text}</div>
    );
}

const Dialogs = (propr) => {

    let dialogsData = [
        {id: 1, name: 'Валерий'},
        {id: 2, name: 'Игорь'},
        {id: 3, name: 'Алексей'},
        {id: 4, name: 'Павел'},
        {id: 5, name: 'Владислав'}
    ];

    let dialogsElements = dialogsData.map(
        (d) => { return  <Interlocutor id={d.id} name={d.name} />}
    );

    let messagesData = [
        {id: 1, text: 'УУУУ'},
        {id: 2, text: 'привет, друг!'},
        {id: 3, text: 'как дела?'}
    ];

    let messagesElements = messagesData.map(
        (m) => { return <Message text={m.text}/> }
    );

    return (
        <div className={mod.dialogs}>
            <div className={mod.interlocutors}> {/* interlocutor(s) - собеседник(и) */}
                {dialogsElements}
            </div>
            <div className={mod.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;