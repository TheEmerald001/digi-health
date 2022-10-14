class RecordSerializer < ActiveModel::Serializer
  attributes :last_record_date, :patient_id, :medication

  belongs_to :patient
end
