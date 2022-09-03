
//array of Numbers
let nums = [1,2,3,6,9,8,7,4];
const ids = [1,2,3,6,9,8,7,4];

let num5 = [1,4,7,8,9,6,3,2]
let id5 = [1,4,7,8,9,6,3,2]

// calling the butons and setting the numbers
const keys = document.querySelectorAll(".key")

//setting a function for each key
let key1=document.getElementById("key1");
key1.addEventListener('click', function(){
    nums.push(nums.shift());
    for (i = 7; i >= 0; i--) {
        document.getElementById("key" + ids[i]).innerHTML = nums[i];
    }
});

let key2=document.getElementById("key2");
key2.addEventListener('click', function(){
    nums.push(nums.shift());
    for (i = 7; i >= 0; i--) {
        document.getElementById("key" + ids[i]).innerHTML = nums[i];
    }
});

let key3=document.getElementById("key3");
key3.addEventListener('click', function(){
    nums.push(nums.shift());
    for (i = 7; i >= 0; i--) {
        document.getElementById("key" + ids[i]).innerHTML = nums[i];
    }
});

let key4=document.getElementById("key4");
key4.addEventListener('click', function(){
    nums.push(nums.shift());
    for (i = 7; i >= 0; i--) {
        document.getElementById("key" + ids[i]).innerHTML = nums[i];
    }
});

let key5=document.getElementById("key5");
key5.addEventListener('click', function(){
    num5.push(num5.shift());
    for (i = 7; i >= 0; i--) {
        document.getElementById("key" + id5[i]).innerHTML = num5[i];
    }
});

let key6=document.getElementById("key6");
key6.addEventListener('click', function(){
    nums.push(nums.shift());
    for (i = 7; i >= 0; i--) {
        document.getElementById("key" + ids[i]).innerHTML = nums[i];
    }
});

let key7=document.getElementById("key7");
key7.addEventListener('click', function(){
    nums.push(nums.shift());
    for (i = 7; i >= 0; i--) {
        document.getElementById("key" + ids[i]).innerHTML = nums[i];
    }
});

let key8=document.getElementById("key8");
key8.addEventListener('click', function(){
    nums.push(nums.shift());
    for (i = 7; i >= 0; i--) {
        document.getElementById("key" + ids[i]).innerHTML = nums[i];
    }
});

let key9=document.getElementById("key9");
key9.addEventListener('click', function(){
    nums.push(nums.shift());
    for (i = 7; i >= 0; i--) {
        document.getElementById("key" + ids[i]).innerHTML = nums[i];
    }
});


// Javascript code for the view instruction button
let openBtn = document.querySelector('#open-btn');
let instructContainer = document.querySelector('#instruct-container');
let closeBtn = document.querySelector('#close-btn');
let bgColor = document.querySelector('#body')


function open () {
    instructContainer.style.display = 'block';
    // bgColor.style.backgroundColor = '#74d37cad'
};
openBtn.addEventListener('click', open);

// another way to do the above function
closeBtn.addEventListener('click', function(){
    instructContainer.style.display = 'none';
    // bgColor.style.backgroundColor = ' #ceecd1ad'
});