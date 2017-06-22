const res = document.querySelector('#result');

function getProfile(id){
  console.log("You clicked me!")
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const dat = JSON.parse(this.responseText)
      console.log(dat)
      const htmlDat = `
        <table id="profiles">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${dat.person.name}</td>
              <td>${dat.person.age}</td>
              <td>${dat.person.comments}</td>
            </tr>
          </tbody>
        </table>`
      document.getElementById("result").innerHTML = htmlDat
    }
  };
  xhttp.open("GET", "/api/team/"+id, true);
  xhttp.send();
}