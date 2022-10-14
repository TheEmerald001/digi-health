class RecordSerializer < ActiveModel::Serializer
  attributes :id, :last_record_date, :patient_id, :medication

  belongs_to :patient
end
