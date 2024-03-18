import convertToUrl from "./convert-image-string";

export default function checkImage(imgKey: string) {
  let request = new XMLHttpRequest();
  request?.open("GET", convertToUrl(imgKey), false);
  request?.send();

  return request;
}
