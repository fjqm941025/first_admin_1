function xml_create(){

    let url = 'http://13.209.12.175:8080/xml_create'
    // let url = 'http://localhost:8080/xml_create'
    fetch(url, {
        method: 'GET',
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });

};


const btn = document.querySelector("#btn");
btn.addEventListener("click", xml_create);
