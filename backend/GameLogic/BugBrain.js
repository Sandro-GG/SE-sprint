export class BugBrain {
    constructor(instructions, pos) {
        this.instructions = instructions
        this.current_pos = pos
    }

    get_next_instruction() {
        return this.instructions[this.current_pos];
    }
}