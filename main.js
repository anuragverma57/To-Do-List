let addbtn = document.getElementById('add');
let todoconatainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

addbtn.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph')
    paragraph.innerText = inputfield.value;
    todoconatainer.appendChild(paragraph);
    inputfield.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        todoconatainer.removeChild(paragraph);
    })
    
})

addbtn.addEventListener('keydown', function(e){
    var key = e.keyCode();

	if (key === 13) {
       console.log("Enter");
    }
})
