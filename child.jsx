import React from 'react';

function child(props){
    return (
        <div>
            <h2>Count: {props.count}</h2>
        </div>
    );
}
export default child;