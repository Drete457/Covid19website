export const dataFormater = (cases) => {
  if (cases > 8000000) {
    return (cases / 1000000).toString() + " M";
  } else if (cases > 1000) {
    return (cases / 1000).toString() + " K";
  } else {
    return cases.toString();
  }
};
