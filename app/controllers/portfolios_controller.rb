class PortfoliosController < ApplicationController
  before_action :authenticate_user!, only: [:edit]
  layout 'portfolio'

  def show
    @portfolio = Portfolio.find(params[:id])
    @project = @portfolio.projects.first
  end

  def edit
  end

  def update
  end
end
