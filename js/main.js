// selectors
let mouseEvBtn = document.getElementById('mouse');
let keyboardEvBtn = document.getElementById('keyboard');
let APIBtn = document.getElementById('API');
let container = document.getElementById('container');
let mDivs = document.getElementsByClassName('mouse');
let inputs = document.getElementsByClassName('form-control');

// on amount
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhttp.send();

// handelrs
const toggleMouseEv = () => {
    if(!container.contains(mDivs[0])){
        container.innerHTML = `
            <div id="click" class="mouse">Click me</div>
            <div id="dbclick" class="mouse">Double click on me</div>
            <div id="mouseenter" class="mouse">Enter mouse here</div>
            <div id="mouseleave" class="mouse">Leave mouse from here</div>
            <div id="mousedown" class="mouse">Something happend befor click mouse</div>
            <div id="mouseup" class="mouse">Something happend when leave click</div>
        `;
        //toggle visibility for first div 
        document.getElementById('click').addEventListener('click', () => {
            if(!(mDivs[1].style.visibility == 'hidden')){
                for(i=0; i<mDivs.length; i++){
                    if(i == 0){
                        continue
                    }
                    mDivs[i].style.visibility = 'hidden';
                }
            }else{
                for(i=0; i<mDivs.length; i++){
                    if(i == 0){
                        continue
                    }
                    mDivs[i].style.visibility = 'visible';
                }
            }
        })
        
        //toggle visibility for second div 
        document.getElementById('dbclick').addEventListener('dblclick', () => {
            if(!(mDivs[0].style.visibility == 'hidden')){
                for(i=0; i<mDivs.length; i++){
                    if(i == 1){
                        continue
                    }
                    mDivs[i].style.visibility = 'hidden';
                }
            }else{
                for(i=0; i<mDivs.length; i++){
                    if(i == 1){
                        continue
                    }
                    mDivs[i].style.visibility = 'visible';
                }
            }
        })

        //toggle visibility for third div 
        document.getElementById('mouseenter').addEventListener('mouseenter', () => {
            if(!(mDivs[0].style.visibility == 'hidden')){
                for(i=0; i<mDivs.length; i++){
                    if(i == 2){
                        continue
                    }
                    mDivs[i].style.visibility = 'hidden';
                }
            }else{
                for(i=0; i<mDivs.length; i++){
                    if(i == 2){
                        continue
                    }
                    mDivs[i].style.visibility = 'visible';
                }
            }
        })
        
        //toggle visibility for fourth div 
        document.getElementById('mouseleave').addEventListener('mouseleave', () => {
            if(!(mDivs[0].style.visibility == 'hidden')){
                for(i=0; i<mDivs.length; i++){
                    if(i == 3){
                        continue
                    }
                    mDivs[i].style.visibility = 'hidden';
                }
            }else{
                for(i=0; i<mDivs.length; i++){
                    if(i == 3){
                        continue
                    }
                    mDivs[i].style.visibility = 'visible';
                }
            }
        })
        
        //toggle visibility for fifth div 
        document.getElementById('mousedown').addEventListener('mousedown', () => {
            if(!(mDivs[0].style.visibility == 'hidden')){
                for(i=0; i<mDivs.length; i++){
                    if(i == 4){
                        continue
                    }
                    mDivs[i].style.visibility = 'hidden';
                }
            }else{
                for(i=0; i<mDivs.length; i++){
                    if(i == 4){
                        continue
                    }
                    mDivs[i].style.visibility = 'visible';
                }
            }
        })

        //toggle visibility for sixth div 
        document.getElementById('mouseup').addEventListener('mouseup', () => {
            if(!(mDivs[0].style.visibility == 'hidden')){
                for(i=0; i<mDivs.length; i++){
                    if(i == 5){
                        continue
                    }
                    mDivs[i].style.visibility = 'hidden';
                }
            }else{
                for(i=0; i<mDivs.length; i++){
                    if(i == 5){
                        continue
                    }
                    mDivs[i].style.visibility = 'visible';
                }
            }
        })
    }else{
        container.innerHTML = `
            <h1 class="text-center mt-5">Choose above ☝︎☝︎</h1>
        `;
    }
}

const toggleKeyboardEv = () => {
    if(!container.contains(inputs[0])){
        container.innerHTML = `
            <input id="Keyup" class="form-control my-3" placeholder="Keyup">
            <input id="Keydown" class="form-control my-3" placeholder="Keydown">
            <input id="Keypress" class="form-control my-3" placeholder="Keypress">
            <input id="Focus" class="form-control my-3" placeholder="Focus">
            <input id="Blur" class="form-control my-3" placeholder="Blur">
            <input id="Change" class="form-control my-3" placeholder="Change">
        `;

        // switching background color every time 
        document.getElementById('Keyup').addEventListener('keyup', function() {
            if(this.style.background == "cadetblue"){
                this.style.background = "bisque";
            }else{
                this.style.background = "cadetblue";
            }
        })
        // switching background color every time 
        document.getElementById('Keydown').addEventListener('keydown', function() {
            if(this.style.background == "cadetblue"){
                this.style.background = "bisque";
            }else{
                this.style.background = "cadetblue";
            }
        })

        // switching background color every time 
        document.getElementById('Keypress').addEventListener('keypress', function() {
            if(this.style.background == "cadetblue"){
                this.style.background = "bisque";
            }else{
                this.style.background = "cadetblue";
            }
        })

        // switching background color every time 
        document.getElementById('Focus').addEventListener('focus', function() {
            if(this.style.background == "cadetblue"){
                this.style.background = "bisque";
            }else{
                this.style.background = "cadetblue";
            }
        })

        // switching background color every time 
        document.getElementById('Blur').addEventListener('blur', function() {
            if(this.style.background == "cadetblue"){
                this.style.background = "bisque";
            }else{
                this.style.background = "cadetblue";
            }
        })

        // switching background color every time 
        document.getElementById('Change').addEventListener('change', function() {
            if(this.style.background == "cadetblue"){
                this.style.background = "bisque";
            }else{
                this.style.background = "cadetblue";
            }
        })
    }else{
        container.innerHTML = `
            <h1 class="text-center mt-5">Choose above ☝︎☝︎</h1>
        `;
    }
}

// get data from API
function getData(){
     if(!(container.contains(document.getElementById('apiData')))){//chech if container containes data to add it on it or replace it with h1
        xhttp.onload =  container.innerHTML = "<div id = 'apiData' class = 'container'>" + xhttp.responseText + "</div>";
     }else{
        container.innerHTML = `
            <h1 class="text-center mt-5">Choose above ☝︎☝︎</h1>
        `;
    }
}

// events
mouseEvBtn.addEventListener('click', toggleMouseEv);
keyboardEvBtn.addEventListener('click', toggleKeyboardEv);
APIBtn.addEventListener('click', getData);