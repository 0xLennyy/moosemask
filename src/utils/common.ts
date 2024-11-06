export const copyToClipBoard = (value?: string) => {
  if (value) {
    const copyAux = document.createElement("textarea");
    copyAux.value = value;
    document.body.appendChild(copyAux);
    copyAux.select();
    document.execCommand("copy");
    document.body.removeChild(copyAux);
    return true;
  } else {
    return false;
  }
};
