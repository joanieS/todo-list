class TasksController < ApplicationController


  def create
    @list = List.find(params[:list_id])
    @task = @list.add_task(task_params)
    @task.save

    respond_to do |f|
      f.html {redirect_to @list}
      f.js
    end

  end
  
  def update
    @list = List.find(params[:list_id])
    @task = @list.tasks.find(params[:id])

    @task.update(task_params)
  end

  def destroy
    @list = List.find(params[:list_id])
    @task = @list.tasks.find(params[:id]).destroy

    respond_to do |f|
      f.js
    end
  end

  private
    def task_params
      params.require(:task).permit(:description, :status)
    end
end
