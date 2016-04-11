class PortfoliosController < ApplicationController
  before_action :authenticate_user!, only: [:edit]
  layout 'portfolio'
  def index
  end
  def show
    portfolio = Portfolio.find(params[:id])
    respond_to do |format|
      format.json { render json: portfolio.as_json(include: [:projects, :skills]) }
    end
  end

  def edit
    portfolio = current_user.portfolio
    portfolio.projects.new(name: "New Project")
    portfolio.skills.new(name: "New Skill")
    @portfolio = portfolio.to_json(include: [:projects, :skills])
  end

end
