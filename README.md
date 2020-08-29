# SP Code
Javascript library to create SP Code images, a way to put/get any text inside an image or create an image from text

# Description

This library allows you to put any text inside an image or create an image from plain text, those images can then be converted back to text.
# Use cases

You can use this library to hide text inside a picture to be decoded later, for example an album image with hidden inside it the lyrics for each song.
Another use case would be to compress text, in fact the image is usually from 25 to 50 percent smaller in size than the plain text variant, this thanks to the png being compressed using a loss-less algorithm.

***This image contains the whole library code inside it***<br>
<img src="examples/SP_Code.png" width=200 height=200>

***This image contains the tetris code in javascript***<br>
<img src="examples/Tetris.png" width=200 height=200>

***This contains 60kb of text***<br>
<img src="examples/60kbWords.png" width=200 height=200>

# Usage

To use the library in your website, include it in a script tag:
```html
<script src="/path/SP_Code.js"></script>
```
Once imported there will be a global object called SP_Code which contains all the functions of the library
### Functions
The main function, turns text into an image by converting the character to R G B values
```js
SP_Code.createImage(text, shift, fill)
```

Gets back the text from the image, it accepts ImageData as input and outputs a string with the text inside the image.
```js
SP_Code.getTextFromImage(ImageData)
```
Draws text inside of an existing image at x y position
```js
SP_Code.drawTextOnPicture(ImageData, text, shift, x, y)
```
An utility function to download any imageData as .png 
```js
SP_Code.downloadImageFromData(ImageData, fileName)
```
An utility function to download any canvas as .png
```js
SP_Code.downloadImageFromCanvas(Canvas, fileName)
```
An utility function to draw an image on a canvas
```js
SP_Code.drawOnCanvas(ImageData, Canvas)
```
# Demo

You can try a demo of the library in my <a href="https://specy-wot.github.io/apps/SP_Code/index.html"> portfolio website </a>.
Download one of the images above and then select them with the "scan image" button on top right

# Warning

Compressing or cutting the images will result in the text not being able to be extracted, make sure to send and scan the exact image that the library outputted 
