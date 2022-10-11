class PatientsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    # '/patients' creates a new patient
    def create
        patient = Patient.create!(patient_params)
        render json: patient, status: :created
    end

    #'/patients/:id' reads patient by id provided in params
    def show
        patient = find_patient
        render json: patient
    end

    # '/patients/:id' updates patient data with id in params
    def update
        patient = find_patient
        patient.update!(patient_params)
        render json: patient
    end

    # '/patients/:id' deletes patient data with id in params
    def destroy
        patient = find_patient
        patient.destroy
        head :no_content
    end

    private
    
    def find_patient
        Patient.find(params[:id])
    end

    def patient_params
        params.permit(:first_name, :last_name, :age, :image_url, :location, :username, :password, :password_confirmation)
    end

    def render_not_found_response
        render json: { error: "Patient not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
