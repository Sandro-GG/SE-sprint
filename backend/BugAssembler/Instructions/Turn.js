export class Turn extends Instruction {
    constructor(direction, next) {
        super(); // direction here is LEFT or RIGHT
        this.direction = direction
        this.next = next;
    }

    perform(bug) {
        // TODO add functionality
    }
}