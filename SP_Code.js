let SP_Code = {}
/**
 * Draws the text on top of an already existing image.
 * @param {ImageData} image The image to draw on
 * @param {String} text The text to add to the image
 * @param {number} shift The amount of subpixels to shift the image, higher shift, higher the image size, 0 is the smallest
 * @param {number} x x position of where to draw the text in the image
 * @param {number} y y position of where to draw the text in the image
 * @return {ImageData} The original image with the text drawn on at x / y position
 */
export function drawTextOnPicture(image, text = "", shift = 0, x = 10, y = 10) {
    let imageToDraw = SP_Code.createImage(text, shift, 255)
    let background = document.createElement("canvas")
    let backgroundCtx = background.getContext("2d")
    let foreground = document.createElement("canvas")
    SP_Code.drawOnCanvas(image, background)
    SP_Code.drawOnCanvas(imageToDraw, foreground)
    if (image.width - 10 < imageToDraw.width || image.height - 10 < imageToDraw.height) {
        throw new Error("The image to be drawn can't be bigger than the generated image")
    }
    if (imageToDraw.width > 765) {
        throw new Error("Text is too big! Lower the shift")
    }
    backgroundCtx.drawImage(foreground, x, y)
    let imageData = backgroundCtx.getImageData(0, 0, canvas.width, canvas.height)
    let data = imageData.data
    data[0] = 2
    data[1] = x
    data[2] = y
    data[3] = 255
    //if the value is below 0 or above 255, it will become 0 and 255 respectively 
    //so it's safe to just subtract it directly
    data[4] = imageToDraw.width
    data[5] = imageToDraw.width - 255
    data[6] = imageToDraw.width - 510
    data[7] = 255
    return new ImageData(data, imageData.width, imageData.height)
}
