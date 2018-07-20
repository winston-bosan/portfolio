import React from 'react';

const Centerer = props => {
    return (
        <div
            style={Object.assign({
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                boxSizing: 'border-box',
                height: '100%',
                maxWidth: '100vw'
            }, props.style)}
            className={props.className}
        >
            <div
                style={{
                    alignSelf: 'center',
                    width: 'auto',
                    height: 'auto',
                    boxSizing: 'border-box'
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

export default Centerer;
