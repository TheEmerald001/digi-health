Rails.application.routes.draw do
  resources :doctors, only: [:index, :create, :show] do
    # nested resource for appointments
    resources :appointments, only: [:index] do
      # nested resource for record on appointment holder
      resources :records, only: [:index]
    end


  end
  resources :patients, except: [:index] do
    # nested resource for appointments
    get "/appointments", to: "appointments#myappointments"


  end
  resources :records, only: [:show, :create]
  # We nolonger neer R-CRUD, this  we can access  via a doctor or a patient, as a nested route
  resources :appointments, except: [:index, :show]

  #Custom routes definition, this will be harmonized to a single route later
  # Meanwhile, a) Patients
  # post "/patients", to: "patients#create"
  # get "/patients/:id", to: "patients#show"
  # The above have been harmonized to the resource macro "patients, whilst incorporating a nested route of appointments"

  #b) Doctors
  # post "/doctors", to: "doctors#create"
  # get "/doctors/:id", to: "doctors#show"
  # The above have been harmonized to the resource macro "doctors, whilst incorporating a nested route of appointments"

  # c) This routes shall work to authenticate both patints and doctors, and subsequently help log them out
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  
end
