/**
 * Creates an image from text alone
 * @param {String} text The text to draw as image
 * @param {Number} shift The subpixels to shift the text, higher shift means bigger size but the image might look better 
 * @param {Number} fill The subpixel value to fill the remaining empty pixels
 * @return {ImageData} The image generated from the text
 */
 export function createImage(text, shift = 0, fill = 0) {
    let encoder = new TextEncoder("utf-8")
    let length = encoder.encode(text).length
    let charBytes = [
        1, //type of image, 1 is only text, 2 is inside a picture
        //turning the length into 4 bytes
        length & 0xFF,
        (length >> 8) & 0xFF,
        (length >> 16) & 0xFF,
        (length >> 24) & 0xFF
    ]
    //convert all letters to number
    charBytes.push(...encoder.encode(text))
    if (shift) {
        let position = 6
        let shiftArray = new Array(shift).fill(0)
        let charBytesLength = charBytes.length
        for (let i = 0; i < charBytesLength; i += 2) {
            position += 2 + shift
            charBytes.splice(position, 0, ...shiftArray)
        }
    }
    let subDivision = [charBytes[0]]
    //splits the previous array into 4 subdivisions which mean R G B A , the alpha MUST be 255 or the RGB values will be changed
    for (let i = 1; i < charBytes.length; i++) {
        if (i % 3 == 0) subDivision.push(255)
        subDivision.push(charBytes[i])
    }
    let width = Math.round(Math.sqrt(subDivision.length / 4) + 1)
    let height = width
    let imageData = new Uint8ClampedArray(width * height * 4).fill(fill)
    //to make sure a subdivision was completed 
    subDivision.push(...new Array(3).fill(255))
    for (let i = 0; i < subDivision.length; i++) {
        imageData[i] = subDivision[i]
    }
    return new ImageData(imageData, width, height)
}