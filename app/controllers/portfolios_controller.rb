class PortfoliosController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :update]
  layout 'portfolio'
  def index
  end
  def show
    portfolio = Portfolio.find(params[:id])
    respond_to do |format|
      format.json { render json: portfolio.as_json({except: [:created_at, :update_at, :user_id], include: [{projects: {except: [:created_at, :updated_at, :portfolio_id]}}, {skills: {except: [:created_at, :updated_at, :portfolio_id]}}]}) }
    end
  end

  def edit
    portfolio = current_user.portfolio
    portfolio.projects.new(name: "New Project")
    portfolio.skills.new(name: "New Skill")
    skills = portfolio.skills
    projects = portfolio.projects
    @portfolio = portfolio.to_json({except: [:created_at, :updated_at, :user_id], include: [{projects: {except: [:created_at, :updated_at, :portfolio_id]}}, {skills: {except: [:created_at, :updated_at, :portfolio_id]}}]})
  end

  def update
    portfolio = Portfolio.find(params[:id])
    if portfolio.update(portfolio_params)
      portfolio.projects.new(name: "New Project")
      portfolio.skills.new(name: "New Skill")
      respond_to do |format|
        format.json { render json: portfolio.to_json({except: [:created_at, :updated_at, :user_id], include: [{projects: {except: [:created_at, :updated_at, :portfolio_id]}}, {skills: {except: [:created_at, :updated_at, :portfolio_id]}}]}), status: 200 }
      end
    else
      respond_to do |format|
        format.json {render json: {}.to_json, status: :unprocessable_entity}
      end
    end
  end

  private

  def portfolio_params
    params.require(:portfolio).permit(:full_name, :bio, projects_attributes: [:id, :name, :description, :features], skills_attributes: [:id, :name])
  end
end
