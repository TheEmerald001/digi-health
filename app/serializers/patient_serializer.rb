class PatientSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :age, :image_url, :location
end
