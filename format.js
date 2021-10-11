document.addEventListener('DOMContentLoaded', function() {
   document.addEventListener('input', function() {
        if (document.querySelector("#task").value.length == 0) {
            document.querySelector("#submit").disabled = true;
        }
        else {
            document.querySelector("#submit").disabled = false;
        }
    })
  let the_tasks = [];
    the_tasks.toString = () => {
        array.forEach(element => {
            return `element.innerHTML\n`
        });
    }
  
document.querySelector("#new-task").onsubmit = function () {
  let li = document.createElement('li');
  let new_task = document.querySelector('#task').value;
  let new_priorty = document.querySelector('#priorty').value;
  let new_tasks = `
  <h3 id = "status"> PENDING </h3> <br>
  <h5> ${new_task} </h5> <br>
  <h4> ${new_priorty} </h4> <br>
  <input type = "radio" class = "remove"> <p> Remove from List </p>
  <input type = "radio" class = "completed"> <p> Mark as Completed </p>
  `;
  
  li.innerHTML = new_tasks
  
  document.querySelector("#task_list").append(li);
  the_tasks.push(li)
  document.querySelector("#task").value = '';
  return false;
}

  document.addEventListener('click', function(event) {
  element = event.target;
  if (element.className === 'remove') {
    element.parentElement.remove();
    index = the_tasks.indexOf(element.parentElement);
    the_tasks.splice(index,1)
  }
  else if (element.className === 'completed') { 
   document.querySelector("#point").style.textDecoration = "line-through";
   document.querySelector("#status").innerHTML = "COMPLETED";
  }
  
    document.querySelector("#submit").disabled = true;
});
});

