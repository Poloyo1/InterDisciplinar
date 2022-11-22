let count = 1;
document.getElementById("slide1").checked = true;

setInterval(function()
{
    nextImg()
}, 2000);

function nextImg(){
    count++;
    if(count>5){
        count=1;
    }

    document.getElementById("slide"+count).checked = true;

}
