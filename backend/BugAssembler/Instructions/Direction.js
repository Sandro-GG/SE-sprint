export class Direction extends Instruction {
    constructor(direction, positive, negative) { // direction here is from 0 to 5
        super();
        this.direction = direction;
        this.positive = positive;
        this.negative = negative;
    }

    perform(bug) {
        super.perform(bug);
    }
}