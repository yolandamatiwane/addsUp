let inp = document.querySelector('input')
let btn = document.querySelector('button')
let ans = document.querySelector('span')
 

btn.addEventListener('click',()=>{
    let arr = inp.value.split(',').map(Number);
    let addition=0
    for (let i = 0; i < arr.length; i++) {
        addition += arr[i];
    }
    ans.innerText = addition
})
