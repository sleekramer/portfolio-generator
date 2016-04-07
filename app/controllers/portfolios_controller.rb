class PortfoliosController < ApplicationController
  before_action :authenticate_user!, only: [:edit]
  layout 'portfolio'

  def show
  end

  def edit
  end
end
