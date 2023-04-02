import {Position} from "../utils/Position";

export class Bug {
    constructor(id, color, state, resting, direction, position, hasFood, brain) {
        this.id = id;
        this.color = color;
        this.state = state;
        this.resting = resting;
        this.direction = direction;
        this.position = position;
        this.hasFood = hasFood;
        this.brain = brain;
    }

    toString() {
        return `{${(this.id)}}`;
    }

    kill() {
        this.set_position(new Position(-1, -1));
    }

    get_position() {
        return this.position;
    }

    set_position(newPosition) {
        this.position = newPosition;
    }

}