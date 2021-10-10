document.addEventListener('DOMContentLoaded', function() {
 
  document.querySelector("#new-task").onsubmit = function() {
    
    const li = document.createElement('li');
    
    let task_text = document.querySelector('#task').value;
    let task_list = document.querySelector('#priorty').value;
    
    let new_task_html = ` 
                         <h4> ${task_text} </h4> <br> 
                         <h4> ${task_list} </h4> <br>
                        
                         
                        
                        `;
    li.innerHTML = new_task_html
    
    document.querySelector("#task_list").append(li);
    document.querySelector("#task").value = '';
    
     return false;
    
   
  
  }
  
  

  
  document.addEventListener('click', function(event){
    
   
    element = event.target;
    if (element.className === 'remove') {
      element.parentElement.remove();
    }
    
   
  });
  
  
  
  
});
  
