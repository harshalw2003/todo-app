

var form= document.getElementById('form');

form.addEventListener('submit',toDoApp);
let taskarr=[];



function toDoApp(event){

    event.preventDefault();

    var task_value= document.getElementById('task').value;
    var prio_value= document.getElementById('priority').value;
    let taskobj={
        task: task_value,
        prior: prio_value
    };

    taskarr.push(taskobj);
    displayTable(taskarr);
    deleteRow(taskarr);

}

function displayTable(taskarr){

    document.querySelector("tbody").innerHTML="";

    
    taskarr.forEach(elem => {
        let row=document.createElement("tr");

        let col1=document.createElement("td");
        col1.innerText=elem.task;
        
        let col2= document.createElement("td");
        col2.innerText=elem.prior;
    
        if(elem.prior=="High"){
    
            col2.style.backgroundColor="red";
        }
        else{
    
            col2.style.backgroundColor="green";
        }
    
    
        let col3= document.createElement("td");
        col3.classList.add("del-btn");
        col3.innerText="Delete";
       
        col3.style.color="red";
        row.append(col1,col2,col3);
        // console.log(row);
        row.classList.add('row');
        document.querySelector("tbody ").append(row);
    
    });




}

function deleteRow(taskarr){

    var del=document.querySelectorAll(".del-btn");
   for(let i=0;i<del.length;i++){

        del[i].addEventListener('click',(event)=>{

            for( let elem=0; elem<taskarr.length; elem++)

            if(event.target.parentNode.childNodes[0].innerHTML==taskarr[elem].task){

                taskarr.splice(taskarr.indexOf(taskarr[elem]),1);
                // console.log(taskarr);
                event.target.parentNode.remove();
            }
        

            });

      

   }
}




