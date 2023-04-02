export class Sense extends Instruction {
    constructor(cellDirection, bugCondition, positive, negative) {
        super();
        this.cellDirection = cellDirection;
        this.bugCondition = bugCondition;
        this.positive = positive;
        this.negative = negative;
    }

    perform(bug) {
        // TODO add functionality
    }
}