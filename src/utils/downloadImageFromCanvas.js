/**
 * Downloads the canvas as .png
 * @param {HTMLCanvasElement} canvas The canvas to download the image from
 * @param {String} fileName the name of the file, without the extension
 * @return {undefined} doesn't have a return 
 */
 export function downloadImageFromCanvas(canvas, fileName = "SP_Code") {
    var link = document.createElement('a');
    link.style.display = 'none';
    link.download = fileName + '.png';
    canvas.style.imageRendering = "pixelated"
    link.href = canvas.toDataURL("image/png", 1)
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);
}