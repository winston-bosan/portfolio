import React from 'react';
import './Container.css';

const Container = props => {
    return (
        <div
            className={
                props.veryStrict
                    ? 'customContainerVeryStrict'
                    : props.strict
                        ? 'customContainerStrict'
                        : 'customContainer'
            }
            style={{
                marginTop: props.topMargin,
                marginBottom: props.topMargin,
                paddingLeft:
                    props.containerWidth > 700
                        ? props.sidePadding
                        : '20px',
                paddingRight:
                    props.containerWidth > 700 ? props.sidePadding : '20px',
                paddingTop: props.verticalPadding,
                ...props.style
            }}
        >
            {props.children}
        </div>
    );
};

Container.defaultProps = {
    sidePadding: '40px'
};

export default Container;
