import ReactDOM from 'react-dom';
import UserSearch from './state/UserSearch'

const App = () => {
    return(
        <div className="">
            <UserSearch/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);