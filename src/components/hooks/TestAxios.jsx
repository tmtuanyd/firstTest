import React from 'react';
import axios from 'axios';

const TestAxios = (props) => {
    const [state, setState] = React.useState()
    React.useEffect(()=>{
    axios.get(props.url).then(res => setState(res.data))
    }, [props.url])

    return (
        <div>
            <h1>Axios test</h1>
            {state ? <p data-testid='title'>{state.title}</p>:<p>...Loading</p>}
        </div>
    );
};

export default TestAxios;