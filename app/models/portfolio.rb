class Portfolio < ActiveRecord::Base
  belongs_to :user
  has_many :projects, dependent: :destroy
  has_many :skills, dependent: :destroy

  accepts_nested_attributes_for :projects, :skills, reject_if: :invalid_project
  accepts_nested_attributes_for :skills, reject_if: :invalid_skill

  private

  def invalid_project(attrs)
    attrs[:name].blank? || attrs[:name] == "New Project" || attrs[:description].blank? || attrs[:features].blank?
  end

  def invalid_skill(attrs)
    attrs[:name].blank? || attrs[:name] == "New Skill"
  end
end
