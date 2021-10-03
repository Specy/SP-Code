/**
 * Draws an image on a canvas 
 * @param {ImageData} image The image to draw to the canvas
 * @param {HTMLCanvasElement} canvas The canvas to draw to
 * @return {undefined} doesn't have a return 
 */
 export function drawOnCanvas(image, canvas) {
    let ctx = canvas.getContext("2d")
    canvas.width = image.width
    canvas.height = image.height
    canvas.style.imageRendering = "pixelated"
    ctx.putImageData(image, 0, 0)
    ctx.getImageData(0, 0, canvas.width, canvas.height) // refreshes the canvas
}