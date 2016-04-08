class SkillsController < ApplicationController
  skip_before_action :verify_authenticity_token, if: :json_request?
  before_action :authenticate_user!
  def new
  end

  def update
  end
end
