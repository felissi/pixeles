export async function getThumbnail( file: File, [desiredWidth, desiredHeight]: [number, number] ) {
  const reader = new FileReader();
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  return new Promise<string>((resolve) => {
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        [canvas.width, canvas.height] = [desiredWidth, desiredHeight];
        let cropWidth: number, cropHeight: number;
        if (img.width <= img.height) {
          [cropWidth, cropHeight] = [ img.width, (img.width * desiredHeight) / desiredWidth, ];
        } else {
          [cropWidth, cropHeight] = [ (img.height * desiredWidth) / desiredHeight, img.height, ]; 
        }
        const cropOrigin = [ (img.width - cropWidth) / 2, (img.height - cropHeight) / 2, ];
        const cropRegion = [cropWidth, cropHeight];
        const drawOrigin = [0, 0];
        const drawRegion = [desiredWidth, desiredHeight];
        // @ts-ignore
        if (ctx) ctx.drawImage( img, ...cropOrigin, ...cropRegion, ...drawOrigin, ...drawRegion );
        return resolve(
          getBlob(canvas).then((blob) => URL.createObjectURL(blob))
        );
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

async function getBlob(canvas: HTMLCanvasElement) {
  return new Promise<Blob>((resolve) => {
    // @ts-ignore
    canvas.toBlob(resolve, "image/jpeg", 0.95);
  });
}
