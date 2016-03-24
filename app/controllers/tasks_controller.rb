class TasksController < ApplicationController
  before_action :set_project

  def index
    @tasks = @project.tasks
  end

  def destroy
    @task = Task.find(params[:task_id])
    @task.destroy
  end

  private
  def set_project
    @project = Project.find(params[:project_id])
  end

  def task_params
    params.require(:task).permit(:name, :description, :status)
  end
end
