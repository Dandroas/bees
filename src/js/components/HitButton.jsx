import React, { PropTypes } from 'react'

const hitButton = ({onClick}) => {
    return(<button onClick={() => onClick()}>Hit</button>);
};

hitButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default hitButton;