document.addEventListener('DOMContentLoaded', function() {
  
  document.querySelector("#new-task").onsubmit = function() {
    
    const li = document.createElement('li');
    
    let task_text = document.querySelector('#task').value;
    let new_task_html = ` 
    
                         <span> ${task_text} </span>
                         <button class = "remove"> Remove </button>
                        `;
    li.innerHTML = new_task_html
    
    document.querySelector("#task_list").append(li);
    document.querySelector("#task").value = '';
    
    const li = document.createElement('li'); 
    
    
    let task_list = document.querySelector('#priorty').value;
   
    
    document.querySelector("#task_list").append(li);
    document.querySelector("#priorty").value = '';
    
    
    return false;
  }
  
  

  
  document.addEventListener('click', function(event){
    element = event.target;
    if (element.className === 'remove') {
      element.parentElement.remove();
    }
  })
  
});
  
