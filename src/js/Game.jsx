import React from 'react';
import ReactDOM from 'react-dom';
import HitButton from './components/hitButton.jsx';
import Bee from './components/bee.jsx';
import Config from './Config.json';

class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            config: Config,
            board: [],
            status: "in_game"
        };
        this.populateBoard();
    }

    populateBoard() {
        for (let alpha in this.state.config.bees) {
            let beeCount = this.state.config.bees[alpha].count;
            while (beeCount) {
                //The JSON is a work around to ensure that we don't assign by reference.
                this.state.board.push(
                    JSON.parse(
                        JSON.stringify(
                            Object.assign({}, this.state.config.bees[alpha], {status: "dormant"})
                        )
                    )
                );
                beeCount--;
            }
        }
    };


    handleClick() {
        let board = this.state.board;
        this.setAllBeesDormant(board);

        const random = this.getIndexOfRandomBee();
        let beeBeingHit = board[random];
        beeBeingHit.lifespan = beeBeingHit.lifespan - beeBeingHit.damage;

        //And now setting the hit, so we can indicate which be got hit.
        beeBeingHit.status = "hit";
        if (beeBeingHit.lifespan <= 0) {
            board.splice(random, 1);
            this.state.status = beeBeingHit.type == 'queen' ? 'game_over' : 'in_game';
        } else {
            board[random] = beeBeingHit;
        }

        this.setState(Object.assign({}, this.state, {board: board}));
    }

    setAllBeesDormant(board) {
        board.map((bee) => {
            return bee.status = "dormant"
        });
    }

    getIndexOfRandomBee() {
        return Math.floor(Math.random() * this.state.board.length);
    }

    renderBoard() {
        let counter = 0;
        const beeElements = this.state.board.map((bee) => {
                return <Bee key={counter++} bee={bee} status={bee.status}/>
            }
        );
        return (
            <div>
                <div className="row">
                    {beeElements}
                </div>
                <div className="row">
                    <HitButton onClick={() => this.handleClick()}/>
                </div>
            </div>
        );
    }

    renderGameOver() {
        return <div className="row"><h1>Game Over</h1></div>;
    }

    render() {
        return this.state.status == 'in_game' ? this.renderBoard() : this.renderGameOver();
    }
}

ReactDOM.render(<Game/>, document.getElementById('game'));