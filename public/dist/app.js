//id firebase 
var database = firebase.database();
var USER_ID = getUserId();



$(document).ready(function() {

  function autoCompleteType() {
    var autoCompleteType = [];
    for (type in  listMedicaments) {       
    var name = listMedicaments[type].name
    autoCompleteType.push(name)
  }
    $(function() {
      $("#input-task").autocomplete({
        source: autoCompleteType
      });
  });
}
autoCompleteType();
  getUserTasksFromDB();
  $(".send-task").click(addTasks);
});

function getUserId() {
  var queryString = window.location.search;
  var regExpForUserId = new RegExp(/\?userId=(.+)/);
  return queryString.match(regExpForUserId)[1];
}
//

function addTasks(event) {
  event.preventDefault();

  var taskText = $(".task-input").val();
  var isTextEmpty = taskText === "";

  if (!isTextEmpty) {
    var newTask = addTaskToDB(taskText);
    var taskId = newTask.getKey();

    createTaskItem(taskText, taskId);
  }

  $(".task-input").val("");
}

function addTaskToDB(text) {
  return database.ref('tasks/' + USER_ID).push({ text: text });
}

//adicionando lista de medicamentos
function getUserTasksFromDB() {
  database.ref('tasks/' + USER_ID).once('value')
  .then(function(snapshot) {
    renderTasksList(snapshot);
  });
}

function renderTasksList(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var task = childSnapshot.val();
    createTaskItem(task.text, childSnapshot.key);
  });
}

// **********//

    
var inter = [];
var todosInter = [];
var  medOneTwo =[] ;
var med1 ='';
var med2 = '';


function createTaskItem(text, key) {
    $(".task-list").append(`<div class="col-lg-2 col-md-3 col-sm-3 mt-3 ">
    <div class="card ">
         
    <div class="card"  card-color>
      <div class="card-body">
      <div class='d-flex justify-content-center mb-4' > <i class="fas fa-pills"></i> </div>
        <h6 class=" d-flex justify-content-center card-subtitle mb-2"> <b> ${text}</b> </h6>
        <hr>
        <input type="checkbox"  class="new" data-id=${key} /> <span class ='card-font'> Verificar interação </span> <br>
        <a class ='info' href="#" class="card-link" data-id=${text} data-toggle='modal' data-target='#modalInfo'> <i class="fas fa-info-circle"></i></a> <span   class ='card-font'>Mais informação </span><br>
        <a class='removerItens' href="#" class="card-link" data-id=${key}><i class="fas fa-trash-alt"></i></a><span> Remover </span>
      </div>
    </div>
    </div>
</div>`
);
// remover
$(`.removerItens[data-id='${key}']`).click(function() {
  console.log(key)
  var listItem = $(this).parent();
  console.log(listItem)
  deleteTask(listItem, key);
});
 

function deleteTask(listItem, key) {
deleteTaskFromDB(key);
listItem.remove();
}

function deleteTaskFromDB(key) {
database.ref(`tasks/${USER_ID}/${key}`).remove();
}
 

// ver mais informação
$(`.info[data-id='${text}']`).click(function(){
 
  $('#title-info').html('');
  $('#classe-info').html('');
  $('#posologia-info').html('');
  $('#alimentar-info').html('');
  // console.log(text)
    for (i in listMedicaments){ 
     
      if (text == listMedicaments[i].name) {
        var nameInfo = listMedicaments[i].name.toUpperCase()
          
        $('#title-info').append('<strong>'+nameInfo + '</strong>') 
        $('#classe-info').append(listMedicaments[i].classe)
        $('#posologia-info').append(listMedicaments[i].posologia)
        $('#alimentar-info').append(listMedicaments[i].interAlimentos)
      } 
    }
  })
// remover item
 
 

$(`input[data-id='${key}']`).click(function() {
$('#input-section-two').css('display','none') 


// var texto = text; 
 
$('#texto').append('<input class=" comparar mt-5 ml-5 "type="text" value =' + text + '>')
return element ()
  })
} 
  //Pegando os nomes dos medicamentos do input
function element () {

var medHtml = document.getElementsByClassName('comparar');
for ( i in medHtml ){
  
  medOneTwo.push(medHtml[i].value);
 
 }
  }//fim element 
  //more infor
 


//função para verificar interação
 $('.btn-inter').click(function(){
  med1= medOneTwo[0];
  med2 = medOneTwo[5];
  var med3 = document.getElementById('med1').value.toLowerCase();
 
  var med4 = document.getElementById('med2').value.toLowerCase();
 
//pegando o  medicamento 1 ou 3
 listMedicaments.map(function(med){
 
  if (med1 == med.name || med3 ==med.name) {
    
  inter.push(med.interacao) ;
 } 
  return interaction;
 })
 
  
 //comparar o med1 com 2 ou med3 com 4
 var interaction = inter.map(function (inter) {
   for (i in inter){
     if (med2 == inter[i].nome || med4==inter[i].nome) {
      $('#descricao').html('');
      $('#med1').val('')
      $('#med2').val('')
      $('.comparar').val('')
      
   $('#descricao').append(inter[i].descricao)
   } 
     else if ( med2 != inter[i].nome || med4 != inter[i].nome){
       $('#descricao').append( 'Não foram encontradas interações entre os medicamentos consultados.');
       console.log('Não há interação.')
      }

 
  }  
 }); //fim interaction
}) //fim do click
  
// $('#descricao').append('<div class= col s12 m7><div class="card horizontal card-panel teal"><div class="card-image"> </div <div class="card-stacked"><div class="card-content"><p>' +inter[i].descricao + '</p> </div> </div></div></div>')
// } 


// function deleteTask(listItem, key) {
//   deleteTaskFromDB(key);
//   listItem.remove();
// }

// function deleteTaskFromDB(key) {
//   database.ref(`tasks/${USER_ID}/${key}`).remove();
// }


 