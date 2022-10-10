Rails.application.routes.draw do
  resources :doctors
  resources :patients, except: [:index]
  resources :records, only: [:show, :create]
  resources :appointments, except: [:index]
  
  
end
