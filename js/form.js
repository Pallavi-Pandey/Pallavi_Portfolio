var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.add('success');
    status.insertAdjacentHTML("afterbegin","Thanks for your submission");
    form.reset()
  }).catch(error => {
    alert("Error while submitting, refreshing the page")
    location.reload();
  });
}
form.addEventListener("submit", handleSubmit)