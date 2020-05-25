function Hide(){
    console.log("open close")
    var temp =document.getElementById('menu');
    if(temp.style.display == 'block')
    {
        temp.style.display = 'none'
    }
    else{
        temp.style.display = 'block'
    }
}