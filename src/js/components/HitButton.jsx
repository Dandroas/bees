import React from 'react';

let hitButton = class HitButton extends React.Component {
    render() {
        return <button onClick={() => this.props.onClick()}>Hit</button>
    }
};

export default hitButton;