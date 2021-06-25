import {useState} from 'react'


const users = [
    {name: 'Sarah', age: 20},
    {name: 'alex', age: 20},
    {name: 'Micheal', age: 20}
]
const UserSearch: React.FC = () => {

    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>()

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        })

        setUser(foundUser)
    }
    return (
        <div>
            User Search
            <input type="text" onChange={e => setName(e.target.value)}/>
            <button onClick={onClick}>Search</button>
            {user&&<div>Name: {user.name}   Age: {user.age}</div>}
        </div>
    )
}

export default UserSearch
