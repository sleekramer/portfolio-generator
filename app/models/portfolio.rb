class Portfolio < ActiveRecord::Base
  belongs_to :user
  has_many :projects, dependent: :destroy
  has_many :skills, dependent: :destroy
end
