// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(response => response.json())
    .then(data => {
      const idElement = document.createElement("div");
      idElement.textContent = data.id;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement("div");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}