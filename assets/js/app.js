var apiUrl = "https://indreed.herokuapp.com/api/jobs?";
var input = document.querySelector(".query-input");

function getJobData() {
    let querystring = apiUrl + "q=" + input.value;
    axios.get(querystring)
        .then(function (response) {
            data = response.data;
            console.log(response.data);
        })
        .catch(function (error) {
        });
}

var button = document.querySelector(".query-button");
button.addEventListener("click", getJobData);
