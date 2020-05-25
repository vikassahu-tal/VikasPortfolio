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
function restartAbout(){
    var temp=document.getElementById('about-section');
    console.log(temp);
    temp[0].style.display ='none';
    temp[0].style.display = 'flex'; 
}