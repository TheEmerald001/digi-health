class DoctorsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index, :create]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # '/doctor' Displays all doctors
    def index
        doctors = Doctor.all
        render json: doctors
    end
    
    # "/post" Creates a new instance of a doctor (Create)
    def create
        doctor = Doctor.create!(doctor_params)
        render json: doctor, status: :created
    end

    # '/doctor/:id' displays a doctor of id in params(Read by show in rails)
    def show
        doctor = find_doctor
        render json: doctor
    end

    # '/doctor/:id' edits a doctor of id in params(Update)
    def update
        doctor = find_doctor
        doctor.update!(doctor_params)
        render json: Doctor
    end
    # '/doctor/:id' deletes a doctor of id in params(Delete by destroy)
    def destroy
        doctor = find_doctor
        doctor.destroy
        head :no_content
    end

    private
    
    def find_doctor
        Doctor.find(params[:id])
    end

    def doctor_params
        params.permit(:first_name, :last_name, :image_url, :description, :location, :username, :password, :password_confirmation)
    end

    def render_not_found_response
        render json: { error: "Doctor not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
