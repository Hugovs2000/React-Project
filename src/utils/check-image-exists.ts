import convertToUrl from "./convert-image-string";

export default async function checkIfImageExists(
  imgKey: string,
): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = convertToUrl(imgKey);
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
}
