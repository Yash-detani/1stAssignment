

document.getElementById('select').addEventListener('mouseover',function(){
    document.getElementById('places').style.display = 'block';
})
document.getElementById('places').addEventListener('mouseover',function(){
    document.getElementById('places').style.display = 'block';
})
document.getElementById('places').addEventListener('mouseout',function(){
    document.getElementById('places').style.display = 'none';
})
document.getElementById('select').addEventListener('mousedown')

document.getElementById('event1').addEventListener('mouseover',function(){
    document.getElementById('indore_btn').style.display = 'block';
})
document.getElementById('event1').addEventListener('mouseout',function(){
    document.getElementById('indore_btn').style.display = 'none';
})


document.getElementById('event2').addEventListener('mouseover',function(){
    document.getElementById('bhopal_btn').style.display = 'block';
})
document.getElementById('event2').addEventListener('mouseout',function(){
    document.getElementById('bhopal_btn').style.display = 'none';
})


document.getElementById('event3').addEventListener('mouseover',function(){
    document.getElementById('pune_btn').style.display = 'block';
})
document.getElementById('event3').addEventListener('mouseout',function(){
    document.getElementById('pune_btn').style.display = 'none';
})


// document.getElementById('indore_btn').addEventListener('click',function(){
//     document.getElementById('select').innerHTML = "Indore"; 
// })
indore_btn.onclick = function(){
    document.getElementById('select').innerHTML = "Indore";
}

bhopal_btn.onclick = function(){
    document.getElementById('select').innerHTML = "Bhopal";
}

pune_btn.onclick = function(){
    document.getElementById('select').innerHTML = "Pune";
}

