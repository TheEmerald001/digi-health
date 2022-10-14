class AppointmentSerializer < ActiveModel::Serializer
  attributes :start, :end, :reason

  belongs_to :patient
  belongs_to :doctor
end
