export default function chooseColor(type) {
    
    if (type === "cases") {
      return "blue";
    } else if (type === "deaths") {
      return "red";
    } else {
      return "green";
    }
  }