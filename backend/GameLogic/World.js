export class World {
    constructor(horizontal_size, vertical_size, map) {
        this.horizontal_size = horizontal_size
        this.vertical_size = vertical_size
        this.map = map
    }

    toString() {
        return `Size is - (${(this.horizontal_size)}, ${(this.vertical_size)})`;
    }

    cell_at(position) {
        return this.map[position.x][position.y];
    }

    adjacent(position, direction) {
        return this.cell_at(position.get_adjacent_by_direction(direction));
    }

    turn(direction, turn) {
        return (direction + turn) % 6;
    }

    is_obstructed_at(position) {
        this.cell_at(position).is_obstructed();
    }

    is_occupied_at(position) {
        this.cell_at(position).is_occupied();
    }

    set_bug_at(position, bug) {
        return this.cell_at(position).set_bug(bug);
    }

    get_bug_at(position) {
        return this.cell_at(position).get_bug();
    }

    remove_bug_at(position) {
        return this.cell_at(position).remove_bug();
    }

    set_food_at(position, new_food_amount) {
        this.cell_at(position).set_food(new_food_amount);
    }

    get_food_at(position) {
        return this.cell_at(position).get_food();
    }

    is_friendly_base_at(position, color) {
        return this.cell_at(position).is_friendly_base(color);
    }

    is_enemy_base_at(position, color) {
        return this.cell_at(position).is_enemy_base(color);
    }

    set_marker_at(position, color, marker_type) {
        this.cell_at(position).set_marker(color, marker_type);
    }

    clear_marker_at(position, color, marker_type) {
        this.cell_at(position).clear_marker(color, marker_type);
    }

    is_friendly_marker_at(position, color, marker_type) {
        return this.cell_at(position).is_friendly_marker(color, marker_type);
    }

    is_enemy_marker_at(position, color, marker_type) {
        return this.cell_at(position).is_enemy_marker(color, marker_type);
    }



}