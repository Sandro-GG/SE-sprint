import {has_value, Just, Nothing} from "../utils/Maybe";

export class WorldCell {
    constructor(obstructed, maybe_bug, food_amount, markers, maybe_base) {
        this.obstructed = obstructed;
        this.maybe_bug = maybe_bug;
        this.food = food_amount;
        this.markers = markers;
        this.maybe_base = maybe_base;
    }

    is_obstructed() {
        return this.obstructed;
    }

    is_occupied() {
        return has_value(this.maybe_bug);
    }

    set_bug(bug) {
        this.maybe_bug = new Just(bug);
        return true;
    }

    get_bug() {
        return this.maybe_bug;
    }

    remove_bug() {
        this.maybe_bug = new Nothing();
        return true;
    }

    set_food(food_amount) {
        this.food = food_amount;
    }

    get_food() {
        return this.food;
    }

    is_friendly_base(color) {
        if (has_value(this.maybe_base)) {
            return (color === this.maybe_base.get_value());
        }
        return false;
    }

    is_enemy_base(color) {
        if (has_value(this.maybe_base)) {
            return (color !== this.maybe_base.get_value());
        }
        return false;
    }

    // TODO implement these

    set_marker(color, marker_type) {

    }

    clear_marker(color, marker_type) {

    }

    is_friendly_marker(color, marker_type) {
        return false;
    }

    is_enemy_marker(color, marker_type) {
        return false;
    }

    cell_matches(bug_condition, color) {
        return false;
    }

    toString() {
        return `{
        Obstructed - ${(this.obstructed)}, 
        Bug - ${(this.maybe_bug)},
        Food - ${(this.food)},
        Markers - ${(this.markers)},
        Base - ${(this.maybe_base)}
        }`;
    }
}