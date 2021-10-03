/**
 * Gets the text from an image 
 * @param {ImageData} image The image to get the text from
 * @return {String} The text contained in the image
 */
 export function getTextFromImage(image) {
    let data = image.data
    //iterates through the imageData, when it finds a 254 it means the character ended and the number
    //can be converted back to a string
    //255 is ignored as it's not used 
    if (data[0] == 2) {
        //if it's inside another picture
        let canvas = document.createElement("canvas")
        canvas.width = image.width
        canvas.height = image.height
        let ctx = canvas.getContext("2d")
        ctx.putImageData(image, 0, 0)
        //1 is the x pos, 2 is the y pos, 4 is the width/height, the limitation is a width of 255px
        let width = data[4] + data[5] + data[6]
        data = ctx.getImageData(data[1], data[2], width, width).data
    }
    // if the type of data is only ascii, it doesn't need the letter breaks
    let length = (data[5] << 24) + (data[4] << 16) + (data[2] << 8) + data[1];
    let arrayToDecode = []
    for (let i = 6; i < data.length; i++) {
        if ((i + 1) % 4 != 0 && data[i] != 0) arrayToDecode.push(data[i])
    }
    arrayToDecode = arrayToDecode.splice(0, length)
    // arrayToDecode = arrayToDecode.splice(length, arrayToDecode.length)
    return new TextDecoder("utf-8").decode(Uint8ClampedArray.from(arrayToDecode))
}