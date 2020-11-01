Rails.application.routes.draw do

  root 'links#index'

  get '/change_score', to: 'score#change_score'
  get '/get_random_photo', to: 'image#get_random_photo'
  
  get '/links/get_new_link'
  get '/links/:code', to: 'links#get'
  
  
end  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
