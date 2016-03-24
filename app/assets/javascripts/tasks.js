$(".project.show").ready(function() {

  var $taskListButton = $('.task-list-btn');
  var project_id = $taskListButton.attr('data_project_id');
  var tasks_url = "/projects/" + project_id + "/tasks";
  var project_tasks;

  $.getJSON(tasks_url, function(tasks) {
    project_tasks = tasks;
  });

  $taskListButton.click(function(event){
    event.preventDefault();
    $this = $(event.currentTarget);
    if ($this.hasClass("off")) {
      $this.toggleClass("adding-tasks");
      table_html = "\
      <th>Name</th> \
      <th>Description</th> \
      <th>Status</th> \
      <th>Created</th>";
      var $taskContainer = $(".tasks");
      var $taskTable = $("<table>").addClass("table").html(table_html);

      project_tasks.forEach(function(taskObj) {
        var $newRow = $("<tr>");
        $newRow.append($("<td>").html(taskObj["name"]))
        $newRow.append($("<td>").html(taskObj["description"]))
        $newRow.append($("<td>").html(taskObj["status"]))
        $newRow.append($("<td>").html(taskObj["created_at"]));
        $taskTable.append($newRow);
      });
      $taskContainer.append($taskTable);
      $taskListButton.text("Hide Tasks");
      $this.toggleClass("off")
    } else if ($this.hasClass("adding-task")) {
      return;
    } else {

    };
  });
});
