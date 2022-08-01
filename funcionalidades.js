function search() {
    let input = document.getElementById('search').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('linha');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display= "";
                          
        }
    }
}

function filterR() {
    let input = "reagente"
    input=input.toLowerCase();
    let x = document.getElementsByClassName('linha');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display= "";
                          
        }
    }
}

function filterV() {
    let input = "vidraçaria"
    input=input.toLowerCase();
    let x = document.getElementsByClassName('linha');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display= "";
                          
        }
    }
}

function filterG() {
    let input = ""
    input=input.toLowerCase();
    let x = document.getElementsByClassName('linha');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display= "";
                          
        }
    }
}