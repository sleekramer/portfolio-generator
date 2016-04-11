Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root 'portfolios#edit', as: :authenticated
  end
  resources :portfolios, only: [:index, :edit]
  get '/:id' => 'portfolios#show', defaults: {format: 'json'}
  get "/portfolios/*path" => 'portfolios#index'
  root 'welcome#index'
end
