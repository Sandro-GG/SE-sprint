export class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `{${(this.x)}, ${(this.y)}}`;
    }

    get_adjacent_by_direction(direction) {
        switch (direction) {
            case 0:
                return new Position(this.x + 1, this.y);
            case 1:
                return new Position(this.x + 1, this.y + 1);
            case 2:
                return new Position(this.x - 1, this.y + 1);
            case 3:
                return new Position(this.x - 1, this.y);
            case 4:
                return new Position(this.x - 1, this.y - 1);
            case 5:
                return new Position(this.x + 1, this.y - 1);
        }
        throw new Error("Direction should be the number between 0 and 5");
    }

    validate(field_size_horizontal, field_size_vertical) {
        return (this.x >= 0) && (this.x < field_size_horizontal) && (this.y >= 0) && (this.y < field_size_vertical);
    }
}