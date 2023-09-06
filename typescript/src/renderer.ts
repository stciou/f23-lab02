import {Shape} from "./shpaes/shape.js";

function newRenderer(rectangle: Rectangle) {
    return {
        draw() {
            const area: number = rectangle.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }