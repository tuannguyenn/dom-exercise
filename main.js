function getOptions(){
    var y = []
    var x = document.getElementById("mySelect").children;
    for(var i = 0 ; i < x.length ; i++){
        y.push(x[i].innerHTML)
    }

    alert('There are '+x.length+' items: ' + y.join(', '))
}