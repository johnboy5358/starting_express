(function($){

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

  $('#profiles tbody tr').on('click', function(evt){
    let data = {}
    let $tds = $(this).find('td')
    $.each($tds, function () {
      Object.assign(data, {[$(this).attr('class')]: ($(this).text())})
    })

    console.log(data)

    $('#profiles tbody tr').each(function () {
      if($(this).hasClass('selected')) {
        $(this).removeClass('selected')
      }
    })

    if ($(this).hasClass('selected')){
      $(this).removeClass('selected')
    } else {
      $(this).addClass('selected')
    }

    let selected = 0
    $('#profiles tbody tr').each(function () {
      if($(this).hasClass('selected')) {
        selected++
      }
    })
    if (selected>0) {
      $('#contact-selected').toggleClass('visible')
    }

    $('#contact-selected #name').val(data.name)
    $('#contact-selected #email').val(data.email)
  })

}(jQuery))