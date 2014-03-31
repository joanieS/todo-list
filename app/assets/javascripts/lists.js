function filterTasks(e, obj){
  e.preventDefault();
  $("ul#filters a").removeClass("selected");  
  $(obj).addClass("selected");
  $("#todo-list li").show();
  
  switch($(obj).data("filter")){
    case "all":
      break;
    case "active":
      $("li.completed").hide();
      break;
    case "completed":
      $("ul#todo-list li").not(".completed").hide();
      break;
  }
}

function bindFilters(){
  $("a[data-filter]").on("click", function(e){
    filterTasks(e, this)
  });
}

function updateTask(e){
  var $li = $(this).parents("li")
  var task_id = $li.data("id");
  var list_id = $li.parents("ul#todo-list").data("id");
  var status = +$li.find(":checkbox").prop("checked"); // + will cast true/false to 1/0
  var description = $li.children("input:text").val();

  $.ajax({
    url: "/lists/"+list_id+"/tasks/"+ task_id,
    dataType: "script",
    method: "PATCH",
    data: {task: {status: status, description: description}}
  });    
};

$(document).ready(function(){
  bindFilters();
  $("ul#todo-list").on("dblclick", "li label", function(e){
    // $(this).parents("div.view").hide();
    $(this).parents("li").toggleClass("editing");
    $(this).parents("li").children("input:text").focus();
  });

  $("ul#todo-list").on("change", 'li :checkbox.toggle', updateTask);
  $("ul#todo-list").on("blur", "li input.edit", updateTask);
  $("ul#todo-list").on("keypress", "li input.edit", function(e){
    if (e.which==13){
      var $li = $(this);
      updateTask.call($li, e);
    }
  });
});

