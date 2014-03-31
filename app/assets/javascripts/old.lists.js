
//   $(document).on("click", "a[data-ajax=true]", function(e){
//     e.preventDefault();
//     $.getScript($(e.target).attr("href"))
//   })

//   $(document).on("submit", "form[data-ajax=true]", function(e){
//   e.preventDefault()
//   var formString = $(e.target).serialize();

//   $.ajax($(e.target).attr("action"), {
//     method: "POST",
//     data: formString,      
//     dataType: "script"
//   });
// })


// $(document).ready(function(){ 
//   // Make sure our document is ready before we bind a bunch
//   // of events. We could use $(function(){}) also as shorthand for this.
//   bindFilters();    
//   activateDeleteLinks();
//   activateCheckbox();
//   // 1. Bind an event to the form submit
//   $("form#new_task").on("submit", function(e){
//     // 2. prevent the form from doing its normal thing
//     e.preventDefault();
    
//     // 3. get the form data thats in the input
//     var formString = $(this).serialize();

//     // 4. submit the post request with the form data
//     $.ajax($(this).attr("action"), {
//       method: "POST",
//       data: formString,      
//     });


//   })







// });

// // Old Functions
// // function filterCompleted(e){
// //   e.preventDefault();
// //   $("ul#filters a").removeClass("selected")
// //   $(this).addClass("selected")
// //   $("#todo-list li").show();
// //   $("#todo-list li").not(".completed").hide();
// // }

// // function bindActiveLinks(){
// //   $("a[data-filter=active]").on("click", function(e){
// //     e.preventDefault();
// //     $("ul#filters a").removeClass("selected")
// //     $(this).addClass("selected")
// //     $("#todo-list li").show();
// //     $("#todo-list li.completed").hide();
// //   });
// // }

// // function bindCompletedLinks(){
// //   $("a[data-filter=completed]").on("click", filterCompleted);
// // }

// function activateCheckbox(){
//   // When you click on the checkbox of class toggle
//   $("input[type=checkbox].toggle").on("click", function(e){
//     // see whether the checkbox is checked
//     if ($(this).prop("checked")){
//       $(this).parents("ul#todo-list li").addClass("completed");
//     } else if(!$(this).prop("checked")){
//       $(this).parents("ul#todo-list li").removeClass("completed");
//     }

//     var completedCount = $("li.completed").size()
//     $("button#clear-completed").text("Clear completed ("+ completedCount +")")
//   });
// }

// function activateDeleteLinks(){
//   $("ul#todo-list").on("click", 'button.destroy.task', DeleteLink);
// }

// function DeleteLink(e){
//   // I need to submit a request letting the server know the task was deleted
//   // DELETE /lists/:list_id/tasks/:id
//   var $button = $(this);

//   var $task = $button.parents("ul#todo-list li");

//   $.ajax($button.data("href"), {
//     method: "DELETE",
//     success: function(response, xhr){
//       console.log(response, xhr)
//       $task.fadeOut(function(){
//         $task.remove()
//       });
//     }
//   });
// };

