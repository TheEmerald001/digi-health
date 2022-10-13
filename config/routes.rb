Rails.application.routes.draw do
  resources :doctors, only: [:index]
  resources :patients, except: [:index, :create, :show]
  resources :records, only: [:show, :create]
  resources :appointments

  #Custom routes definition, this will be harmonized to a single route later
  # Meanwhile, a) Patients
  post "/patients", to: "patients#create"
  get "/patients/:id", to: "patients#show"

  #b) Doctors
  post "/doctors", to: "doctors#create"
  get "/doctors/:id", to: "doctors#show"

  # c) This routes shall work to authenticate both patints and doctors, and subsequently help log them out
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  
end
