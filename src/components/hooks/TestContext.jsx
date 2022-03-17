import React from 'react';
import Context from '../store/context';

const TestContext = () => {
    const context = React.useContext(Context)
    return (
        <div>
            <button onClick={context.changeTextProp}>
                Change Text
            </button>
            <p>{context.stateProp}</p>
        </div>
    );
};

export default TestContext;