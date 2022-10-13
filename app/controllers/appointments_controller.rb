class AppointmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # This shall handle seeing all the appointments listed with an users id
    def index
        if params[:doctor_id]
          doctor = Doctor.find(params[:doctor_id])
          appointments = doctor.appointments
        else
          appointments = render json: {error: "No appointments found for doc"}
        end
        render json: appointments
    end
    def myappointments
        if params[:patient_id]
            patient = Patient.find(params[:patient_id])
            appointments = patient.appointments
        else
            appointments = render json: {error: "You do not have any appointments yet"}
        end
        render json: appointments
        
    end
    def show
        appointment = find_appointment
        render json: appointment
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update
        appointment = find_appointment
        appointment.update!(appointment_params)
        render json: appointment
    end

    def destroy
        appointment = find_appointment
        appointment.destroy
        head :no_content
    end

    private
    
    def find_appointment
        Appointment.find(params[:id])
    end

    def appointment_params
        params.permit(:patient_id, :doctor_id, :start, :end, :reason)
    end

    def render_not_found_response
        render json: { error: "Appointment not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
