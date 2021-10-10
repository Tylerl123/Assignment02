document.addEventListener('DOMContentLoaded', function() {
  
  let all_tasks = [];
    all_tasks.toString = () => {
        array.forEach(element => {
            return `element.innerHTML\n`
        });
    }
    
  document.querySelector("#new-task").onsubmit = function() {
    
    let li = document.createElement('li');
    
    let task_text = document.querySelector('#task').value;
    let task_list = document.querySelector('#priorty').value;
    
    let new_task_html = ` 
                         <t class="displayed-task_text">${task_title}</t>
                        
                         
                         <button class = "remove"> Remove </button>
                         <span class="displayed-task_list"></span>
                        `;
    li.innerHTML = new_task_html
    
    document.querySelector("#task_list").append(li);
  
    
    
    /*
    
    let task_list = document.querySelector('#priorty').value;
    let new_list_html = ` 
    
                         <span style: "text-align: center" > ${task_list} </span>
                        
                        `;
    li.innerHTML = new_list_html
    
    document.querySelector("#task_list").append(li);
    document.querySelector("#priorty").value = '';
    
    */
  
  }
  
  

  
  li.addEventListener('click', function(event){
    
   
    element = event.target;
    if (element.className === 'remove') {
      element.parentElement.remove();
    }
    
    return false;
  })
  
  
  
  
});
  
