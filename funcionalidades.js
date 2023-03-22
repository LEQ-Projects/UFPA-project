function acent(inStr) {
    return inStr.replace(
      /([àáâãäå])|([çčć])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])/g, 
      function (str, a, c, e, i, n, o, s, u, y, ae) {
        if (a) return 'a';
        if (c) return 'c';
        if (e) return 'e';
        if (i) return 'i';
        if (n) return 'n';
        if (o) return 'o';
        if (s) return 's';
        if (u) return 'u';
        if (y) return 'y';
        if (ae) return 'ae';
      }
    );
  }

function search() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('linha');
    input = acent(input)
      
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
            document.getElementById('tabelaMain').style.display = 'table';
            document.getElementById('pesquisa').style.display = 'flex';
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
            document.getElementById('tabelaMain').style.display = 'table';
            document.getElementById('pesquisa').style.display = 'flex';
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
            document.getElementById('tabelaMain').style.display = 'table';
            document.getElementById('pesquisa').style.display = 'flex';
            document.getElementById('tabelaHistorico').style.display = 'none';
                          
        }
    }
}

function filterOther() {
    let input = "Outros"
    input=input.toLowerCase();
    let x = document.getElementsByClassName('linha');
      
    for (i = 0; i < x.length; i++) { 
        var display = document.getElementById('tabelaMain').style.display;
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }        
        else {
            x[i].style.display= "";
            document.getElementById('tabelaMain').style.display = 'table';
            document.getElementById('pesquisa').style.display = 'flex';
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
    var display = document.getElementById('tabelaDescricao').style.display;
    if(display == "none"){
        document.getElementById('tabelaDescricao').style.display = 'table-cell';
        
        }
    else{ 
        document.getElementById('tabelaDescricao').style.display = 'none';}
    
}