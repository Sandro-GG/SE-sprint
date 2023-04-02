export const Color = Object.freeze({
    RED: "RED",
    BLACK: "BLACK"
});

export function opposite_color(color) {
    if(color === Color.RED) {
        return Color.BLACK;
    } else if (color === Color.BLACK) {
        return Color.RED;
    } else {
        throw new Error("Color should be either Color.RED or Color.BLACK!");
    }
}