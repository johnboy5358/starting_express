const res = document.querySelector('#result');

function getProfile(id){
  console.log("You clicked me!")
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText)
      console.log(typeof this.responseText)
      const dat = JSON.parse(this.responseText)
      console.log(dat)
      const htmlDat = `<span>${dat.person.name}</span>`
      document.getElementById("result").innerHTML = htmlDat
    }
  };
  xhttp.open("GET", "/api/team/"+id, true);
  xhttp.send();
}