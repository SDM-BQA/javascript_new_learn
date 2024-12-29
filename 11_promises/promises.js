// promise
const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  setTimeout(function () {
    console.log("Async Task is Complete");
    resolve();
  }, 1000);
});

// connected with resolve
promiseOne.then(function () {
  console.log("Promise ConsumedS");
});

// 2nd syntax
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Async 2 task resolved");
});

// Passing Data
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "sdm", email: "sdm@3.com" });
  }, 3000);
});

promiseThree.then((user) => {
  console.log(user);
});

// with catch
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "sdm-bqa", password: "12455" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Code Executed");
  });

// using async - await

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "sdmbqa", password: "12345" });
    } else {
      reject("Error: JS Error");
    }
  }, 5000);
});

const consumeProFive = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
consumeProFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("E: ", err);
  }
}

getAllUsers();

// new
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
