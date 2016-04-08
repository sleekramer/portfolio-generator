Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root 'users#edit', as: :authenticated
  end
  resources :users, only: [:show]
  resources :portfolios, only: [:show, :edit, :update]
  resources :skills, only: [:new, :update]
  resoureces :projects, only: [:new, :update]

  root 'welcome#index'
end
