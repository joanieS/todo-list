class ListsController < ApplicationController

  def index
    @list = List.new
    @lists = List.all

    respond_to do |f|
      f.xml {render :xml => @lists}
      f.json {render :json => @lists}
      f.html
    end
  end

  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to @list
    else
      @lists = List.all
      render :index
    end
  end

  def show
    @list = List.find(params[:id])
    @task = Task.new
  end

  private
    def list_params
      params.require(:list).permit(:name)
    end
end
