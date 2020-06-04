export default async function Data(url) {
  return await fetch(url).then(
    (result) => {
      return result.json();
    },
    (error) => {
      throw new Error(error);
    },
  );
}
