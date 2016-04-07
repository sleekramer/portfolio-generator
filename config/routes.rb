Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root 'portfolios#edit', as: :authenticated
  end
  resources :portfolios, only: [:show]

  root 'welcome#index'
end
