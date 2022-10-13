class RecordsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    # This route shall be used to render to a doctor, if any, a patients past medical records
    def index
        if params[:appointment_id]
            patient = Appointment.find_by_id(params[:appointment_id]).patient_id
            records = Record.find_by_id(patient)
        else
            records = render json: {error: "No Records Found for patient"}
        end
        render json: records         
    end
    # '/records/:id' show a record with the given id
    def show
        record = Record.find_by(params[:id])
        render json: record
    end

    # '/records' create a new record
    def create
        record = record.create!(record_params)
        render json: record, status: :created
    end

    private
    def record_params
        params.permit(:last_record, :patient_id, :doctor_id, :medication)
    end

    def render_not_found_response
        render json: { error: "Record not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
