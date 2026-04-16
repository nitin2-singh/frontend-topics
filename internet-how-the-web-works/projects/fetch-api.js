async function getData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log("Fetched data:", result, response);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

getData();
