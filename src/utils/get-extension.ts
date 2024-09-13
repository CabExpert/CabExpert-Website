const mimeTypesMapping = new Map<string, string>();
mimeTypesMapping.set("image/jpeg", "jpg");
mimeTypesMapping.set("image/png", "png");
mimeTypesMapping.set("image/gif", "gif");
mimeTypesMapping.set("image/bmp", "bmp");
mimeTypesMapping.set("image/webp", "webp");

export const getExtension = (filename: string, mimeType?: string) => {
  const arr = filename?.split(".");

  let extension = arr?.length > 1 ? arr[arr.length - 1] : "";

  if (!extension) {
    extension = "";

    if (mimeType) {
      extension = mimeTypesMapping?.get(mimeType) || "";
    }
  }

  return extension;
};

// var patt1 = /\.([0-9a-z]+)(?:[\?#]|$)/i;
// var m1 = ("filename-jpg").match(patt1);

export default getExtension;
