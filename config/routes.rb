Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'addresses/index'
    end
  end
  root 'addresses#index'
end
