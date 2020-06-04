import { useState, useEffect } from "react";

export default function ReturnJSon(props) {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(props.url)
      .then((result) => result.json())
      .then(
        (result) => {
          setList(result);
        },

        (error) => {
          setError(error);
        },
      );
  }, [props.url]);

  if (error !== null) {
    return error;
  } else  {
    return JSON.stringify(list);
  }
}
