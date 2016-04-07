class Portfolio < ActiveRecord::Base
  belongs_to :user
  has_many :projects
  has_many :skills
end
