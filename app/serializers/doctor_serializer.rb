class DoctorSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :image_url, :description, :location
end
