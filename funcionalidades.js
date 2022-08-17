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
            document.getElementById('tabelaMain').style.display = 'grid';
            document.getElementById('pesquisa').style.display = 'grid';
            document.getElementById('tabelaHistorico').style.display = 'none';
                          
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
            document.getElementById('tabelaMain').style.display = 'grid';
            document.getElementById('pesquisa').style.display = 'grid';
            document.getElementById('tabelaHistorico').style.display = 'none';
                          
        }
    }
}

function filterG() {
    let input = ""
    input=input.toLowerCase();
    let x = document.getElementsByClassName('linha');
      
    for (i = 0; i < x.length; i++) { 
        var display = document.getElementById('tabelaMain').style.display;
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }        
        else {
            x[i].style.display= "";
            document.getElementById('tabelaMain').style.display = 'grid';
            document.getElementById('pesquisa').style.display = 'grid';
            document.getElementById('tabelaHistorico').style.display = 'none';
                          
        }
    }
}

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    var display2 = document.getElementById('pesquisa');
    if(display == "none" && display2 =="none"){
        document.getElementById(el).style.display = 'block';
        
        }
    else{ 
        document.getElementById(el).style.display = 'none';}
        document.getElementById('pesquisa').style.display = 'none';
        document.getElementById('tabelaHistorico').style.display = 'grid';}

function showIt() {
    document.getElementById('desc').style.visibility = 'visible';
}