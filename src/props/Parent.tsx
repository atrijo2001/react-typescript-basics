import {Child} from './Child'

const Parent = () => {
    return <Child color='Blue' onClick={()=> console.log('clicked')}/>;
};

export default Parent;