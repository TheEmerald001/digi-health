# This file shall seed the db with sample data for the dev phase
# usefull emojis "🌱-seed" "🌐-search""⏳-hourglass not done""⌛-hourglass done" "💾-save""✅-check""❎-fail"
puts "
    🌱Seeding data....
    Please wait ⏳....
"

10.times do
    #Creates 10 doctors who are available for appointment requests
    Doctor.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        image_url: Faker::LoremFlickr.image,
        description: "I treat diseases of the heart",
        location: Faker::Address.full_address

    )
    
end
30.times do
    #creates 30 Patients who are signed up for the application
    Patient.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        age: Faker::Date.birthday(min_age: 18, max_age: 65),
        image_url: Faker::LoremFlickr.image,
        location: Faker::Address.full_address
    )
end
20.times do
    #Creates 20 appointment requests by registered patients
    Appointment.create(
        patient_id: rand(1..20),
        doctor_id: rand(1..10),
        start: Faker::Date.between(from: '2022-10-11', to: '2022-10-20'),
        end: Faker::Date.between(from: '2022-10-11', to: '2022-10-20'),
        reason: "Medical care"
    )
end
10.times do
    #Creates 10 medical records for signed up patients
    Record.create(
        patient_id: rand(1..10),
        last_record_date: Faker::Date.between(from: '2021-10-11', to: '2022-10-01'),
        record: "Gonococcus",
        medication: "azithro"
    )


end

puts "
    💾Success!
    Done seeding!✅
"
 

