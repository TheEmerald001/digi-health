class SessionsController < ApplicationController
  
    def create
        # This will check whether a usr is stored in the DB, either as patient or a doctor
      user = Doctor.find_by(username: params[:username]) || user = Patient.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: "Invalid username or password" }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end
  
  end