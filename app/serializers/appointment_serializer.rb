class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :doctor_id, :start, :end, :reason

  belongs_to :patient
  belongs_to :doctor
end
