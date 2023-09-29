//============= Add ===============
document.getElementById('btn').addEventListener('click', function(e) {
    let temp = e.target.previousElementSibling.value
    if( temp != '' )
    {
        
       let x = document.createElement('div')
       x.classList.add('row', 'w-100')
       x.innerHTML = `
       <input onclick="_input()" type='checkbox' />
       <h2>${temp}</h2>
       <button id="edit"><svg onclick="_edit(event)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
       <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
     </svg></button>
       <button id="delete" ><i onclick="_delete(event)" class="bi bi-trash3-fill"></i>
       </button>
       `

       document.getElementById('list').appendChild(x)
       e.target.previousElementSibling.value = null
       e.target.previousElementSibling.focus()
    }
    else
    {
        alert ('لطفا مقداری را وارد نمایید')
    }
})

//============= Remove ===============
function _delete(e) {
    e.target.parentElement.parentElement.remove()
}

//============= line-through ===============
function _input() {
    let chk = document.querySelectorAll('.w-100 input')
    //    console.log(chk);
    chk.forEach(function(val){
        if(val.checked){
            val.nextElementSibling.style.textDecoration = "line-through"
        }
        else{
            val.nextElementSibling.style.textDecoration = "none"
        }
        
    })     
}


//============= RemoveAll ===============
function _deleteAll() {
    let inp = document.querySelectorAll('.w-100 input')
       console.log(inp);
    inp.forEach(function(val){
        if(val.checked){
            val.parentElement.remove()
        }
        
    })     
}


//============= Edit ===============
function _edit(e) {
    document.getElementById('input-temp').value = e.target.parentElement.previousElementSibling.innerHTML
    e.target.parentElement.parentElement.remove()
}


