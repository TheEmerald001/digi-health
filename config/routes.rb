Rails.application.routes.draw do
  resources :records, only: [:show, :create]
  resources :appointments, except: [:index]
  resources :patients, except: [:index]
  resources :doctors, except: [:index]
end
