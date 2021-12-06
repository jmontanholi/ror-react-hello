Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'greeting', to: 'greetings#random'
  end

  get '*page', to: 'users#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'users#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
