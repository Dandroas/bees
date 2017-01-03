import React, {PropTypes} from 'react'

const bee = ({bee}) => {
    let lifeSpanClassName = bee.status == 'hit' ? "lifespan active" : "lifespan";
    return <div>
        <div className={bee.type}>
        </div>
        <p className={lifeSpanClassName}>{bee.lifespan}</p>
    </div>;
};

bee.propTypes = {
    bee: PropTypes.object.isRequired
};

export default bee;