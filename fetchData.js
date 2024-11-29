const URL = "https://jsonplaceholder.typicode.com/users";

fetch(URL)
  .then((response) => {
    // console.log(response);
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }
    return response.json();
  })
  .then((datas) => {
    datas.map((data, key) => {
      console.log(`ID: ${data.id}, Name: ${data.name}`);
    });
  })
  .catch((error) => console.error(`Error: ${error.message}`));

async function fetchApi() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }
    const datas = await response.json();
    datas.forEach((data) => {
      console.log(`ID: ${data.id}, Name: ${data.name}`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

fetchApi();
