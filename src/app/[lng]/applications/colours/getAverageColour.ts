

async function getAverageColor(imageUrl: string) {

    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "Anonymous"; // Enable cross-origin access to images
      image.src = imageUrl;
  
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
  
        // Set canvas dimensions to match the image dimensions
        canvas.width = image.width;
        canvas.height = image.height;
  
        if (context) {
        // Draw the image onto the canvas
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
  
        // Get pixel data from the canvas
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
  
        // Calculate average color (R, G, B)
        let totalR = 0, totalG = 0, totalB = 0;
        for (let i = 0; i < imageData.length; i += 4) {
          totalR += imageData[i];
          totalG += imageData[i + 1];
          totalB += imageData[i + 2];
        }
        const averageR = Math.round(totalR / (imageData.length / 4));
        const averageG = Math.round(totalG / (imageData.length / 4));
        const averageB = Math.round(totalB / (imageData.length / 4));
  
        console.log("got to here")
        // Resolve with the average color as RGB values
        resolve({ r: averageR, g: averageG, b: averageB });
    }
      };
  
      image.onerror = () => {
        reject(new Error("Failed to load image"));
      };
    });
}

export default getAverageColor;
  