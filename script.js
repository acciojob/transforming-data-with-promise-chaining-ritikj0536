document.getElementById("btn").addEventListener("click", function () {
  const inputVal = document.getElementById("ip").value.trim();
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.textContent = "";

  // Validate input
  if (inputVal === "") {
    outputDiv.textContent = "Please enter a number!";
    return;
  }

  const num = parseFloat(inputVal);

  // Step 1: Initial Promise (resolves after 2 seconds)
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    // Step 2: Multiply by 2 (after 2 seconds)
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val * 2;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    // Step 3: Subtract 3 (after 1 second)
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val - 3;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    // Step 4: Divide by 2 (after 1 second)
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val / 2;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    // Step 5: Add 10 (after 1 second)
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val + 10;
          outputDiv.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .catch((err) => {
      console.error("Error:", err);
    });
});
