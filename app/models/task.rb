class Tasks < ActiveRecord::Base
  validates :name, :description, :status, :project_id, presence :true

  belongs_to :project
end
