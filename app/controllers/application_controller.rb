class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def sandbox
    respond_to do |f|
      f.html
      f.js 
    end
  end
end
