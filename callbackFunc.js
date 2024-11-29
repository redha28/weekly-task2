function getDataFromServer(status, callback) {
  setTimeout(() => {
    if (status) {
      callback(["Product 1", "Product 2", "Product 3"], null);
    } else {
      const err = new Error("failed to fetch data");
      err.name = "Error";
      callback(null, err);
    }
  }, 3000);
}

function processData(result, error) {
  try {
    if (error) {
      throw error;
    }
    console.log(`Result: ${result}`);
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
}

getDataFromServer(true, processData);
