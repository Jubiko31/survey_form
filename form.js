
const projectName  = "Survey_Form";

// limitation on checkboxes (select max 3 boxes):

/*
$("input:checkbox").click(function() {
var bol = $("input:checkbox:checked").length >= 3;     
$("input:checkbox").not(":checked").attr("disabled",bol);
});
*/

let data =[];

const addData = (ev) => {
    ev.preventDefault();  //to stop form submitting
    let newData = {
        id : Date.now(),
        name: document.getElementById("name").value,
        email : document.getElementById("email").value,
        age : document.getElementById("number").value
    }
    data.push(newData);
    document.forms[0].reset(); //to clear form for next entries

    //display purposes only
    /*
    console.warn('added', {data});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(data, '\t', 2);
    */
   localStorage.setItem('MySurveyData', JSON.stringify(data));
}

    //saving to local storage
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('submit').addEventListener('click', addData);
});