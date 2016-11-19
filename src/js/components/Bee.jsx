import React from 'react'

let bee = class Bee extends React.Component {
    render() {
        let bee = this.props.bee;
        let lifeSpanClassName = bee.status == 'hit' ? "lifespan active" : "lifespan";
        return <div>
            <div className={bee.type}>
            </div>
            <p className={lifeSpanClassName}>{bee.lifespan}</p>
        </div>;
    }
};

export default bee;