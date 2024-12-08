
/**
 * download file to local file system
 * @param blob
 * @param filename
 */
export function downloadToSave(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click()
}

/**
 * get array buffer from file
 * @param file {file | Blob}
 * @returns {Promise<Uint8Array>}
 */
export function getFileAsUnit8Array(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(new Uint8Array(reader.result));
    reader.onerror = () => reject(Error("Failed to read file"));
    reader.readAsArrayBuffer(file);
  });
}

/**
 * render page to canvas and return it warped in promise
 * @param page {PDFPageProxy}
 * @param options {Object}
 * @returns {Promise<HTMLCanvasElement>}
 */
export async function getRenderedCanvas(page, options) {
  const viewport = page.getViewport({scale: options.viewportScale}),
    canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  canvas.style.width = "100%";
  canvas.style.objectFit = "contain";

  await page.render({
    canvasContext: context,
    viewport: viewport
  }).promise;

  return canvas;
}

/**
 * remove file extension from filename
 * @param filename
 * @returns {string}
 */
export function removeFileExtension(filename) {
  return filename.replace(/\.[^/.]+$/, "")
}