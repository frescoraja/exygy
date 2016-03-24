class Project < ActiveRecord::Base
  has_many :project_users
  has_many :users, through: :project_users
  has_many :tasks

  accepts_nested_attributes_for :tasks
end
