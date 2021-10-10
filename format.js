alert ('niggga');

document.addEventListener('DOMContentLoaded', function() {
 
 let the_task = [];
 the_task.tostring = () => {
  array.forEach(element => {
   return `element.innerHTML\n`
  });
 }
 
 
 
 
  document.querySelector("#new-task").onsubmit = function a() {
    
    let li = document.createElement('li');
    
    let task_text = document.querySelector('#task').value;
    let task_li = document.querySelector('#priorty').value;
    
    let new_task_html = ` 
                         <span> ${task_text} </span> 
                         
                         <button class ="remove">Remove</button>
                         <h4> ${task_li} </h4> <br>
                        
                        `;
    
    li innerHTML = new_task_html
    document.querySelector("#task_list").append(li);
    the_task.push(li)
    
     return false;
    
   
  
  }
  
  

  
  document.addEventListener('click', function(event){
    
   
    element = event.target;
    if (element.className === 'remove') {
        element.parentElement.remove();
        index= the_task.indexOf(element.parentElement);
        the_task.splice(index, 1)
    }
    
   
  });
  
  
  
  
});
  
