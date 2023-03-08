function changeClass(givenId){
    if(document.getElementById(givenId).style.filter == "grayscale(100%)"){
    document.getElementById(givenId).style.filter ="grayscale(0%)"
    }
    else{
        document.getElementById(givenId).style.filter ="grayscale(100%)"
    }
    
}
window.onload = function(){
    const ids = document.querySelectorAll("img");
    ids.forEach(element => {
        document.getElementById(element.id).addEventListener('click',function () {changeClass(element.id)});
    });

}
