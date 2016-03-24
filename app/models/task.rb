class Task < ActiveRecord::Base
  validates :name, :description, :status, :project_id, presence: true
  validates_inclusion_of :status, in: %w(started unstarted finished)

  scope :finished, -> { where(status: "finished") }
  scope :started, -> { where(status: "started") }
  scope :unstarted, -> { where(status: "unstarted") }

  belongs_to :project
end
