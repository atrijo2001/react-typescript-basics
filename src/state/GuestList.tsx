import {useState} from 'react'

const GuestList: React.FC = () => {

    const [name, setName] = useState('');
    const [guest, setGuest] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuest([...guest, name])
    }
    return(
        <div>
            <h3>Guest  List</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onClick}>Add Guest</button>
            <ul>
                {guest.map(g => <li>{g}</li>)}
            </ul>
        </div>
    )
}

export default GuestList