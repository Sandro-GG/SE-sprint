export class Unmark extends Instruction {
    constructor(marker_type, next) {
        super();
        this.marker_type = marker_type;
        this.next = next;
    }

    perform(bug) {
        // TODO add functionality
    }
}