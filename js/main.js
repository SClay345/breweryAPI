//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = "https://api.openbrewerydb.org/breweries/search?query=" + choice;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.getElementById("name").innerHTML = data[0].name;
      document.getElementById("state").innerHTML =
        data[0].street + " \n" + data[0].city + ", " + data[0].state;
      document.getElementById("type").innerHTML = data[0].brewery_type;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
