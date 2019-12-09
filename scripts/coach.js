window.onload=()=>{
        



}

const handleSubmit =()=>{
    const selectElementValue = document.querySelector('select').value;
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const name3 = document.getElementById('name3').value;
    const class1 = document.getElementById('class1').value;
    const class2 = document.getElementById('class2').value;
    const class3 = document.getElementById('class3').value;
    const section1 = document.getElementById('section1').value;
    const section2 = document.getElementById('section2').value;
    const section3 = document.getElementById('section3').value;
    let jsonobj = {
        "eventID":selectElementValue,
        "firstName":name1,
        "firstSection":section1,
        "firstClass":class1,
        "secondName":name2,
        "secondSection":section2,
        "secondClass":class2,
        "thirdName":name3,
        "thirdSection":section3,
        "thirdClass":class3,
    }
    fetch(`https://event-certificate-service.herokuapp.com/recordResults`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(jsonobj) // body data type must match "Content-Type" header
      }).then((response)=>{
        return response.json()
      }).then((response)=>{
        if(response.success===true){
            window.location.href='./submitdone.html';
        }
      })

}