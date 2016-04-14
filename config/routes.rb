Rails.application.routes.draw do
  devise_for :users, sign_out_via: [:get]
  authenticated :user do
    root 'portfolios#edit', as: :authenticated
  end
  resources :portfolios, only: [:index, :edit]
  get 'portfolio/:id' => 'portfolios#show', defaults: {format: 'json'}
  match 'portfolio/:id' => 'portfolios#update', via: [:put, :patch], defaults: {format: 'json'}
  get "/portfolios/*path" => 'portfolios#index'
  root 'welcome#index'
end
