export class BugCondition {
    constructor(name, marker_index = -1) {
        this.name = name;
        this.marker_index = marker_index;
    }

    getCondition() {
        return this.name;
    }

    getMarkerIndex() {
        return this.marker_index;
    }
}