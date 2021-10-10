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
    
    return false;
  }
  
  document.querySelector("#order").onsubmit = function() {
    
    const li = document.createElement('li');
    
     let task_text = document.querySelector('#priorty').value;
    
     document.querySelector("#order_list").append(li);
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
  
