//array of Numbers
let nums = [1, 2, 3, 6, 9, 8, 7, 4];
let ids = [1, 2, 3, 6, 9, 8, 7, 4];

let num5 = [1, 4, 7, 8, 9, 6, 3, 2];
let id5 = [1, 4, 7, 8, 9, 6, 3, 2];

// calling the butons and setting the numbers
let key5 = document.getElementById("key5");

key5.addEventListener("click", function () {
  num5.push(num5.shift());
  for (i = 0; i <= num5.length; i++) {
    document.getElementById("key" + id5[i]).innerHTML = num5[i];
  }
});

let keys = document.querySelectorAll(".x");

for (let i = 0; i <= keys.length; i++) {
  keys[i].addEventListener("click", function () {
    nums.push(nums.shift());
    for (i = 0; i <= nums.length; i++) {
      document.getElementById("key" + ids[i]).innerHTML = nums[i];
    }
  });
}
