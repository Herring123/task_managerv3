class TasksController < ApplicationController

  def index
    @tasks = Task.all
    @user = current_user
    @task= Task.new
    # @tasks = Task.where(user: current_user)
  end

  def show
    @task = Task.find(params[:id])
  end

  def new
    @task = Task.new
    # @user = current_user
  end

  def create
    @task = Task.new(task_params)
    @task.save
    redirect_to tasks_path
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])

    @task.update(task_params)
    redirect_to task_path
  end

   def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to tasks_path
  end




    private

  def task_params
    params.require(:task).permit(:name, :description)
  end

end
