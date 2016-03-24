class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :status, index: true, null: false, default: "unstarted"
      t.references :project, index: true

      t.timestamps
    end
  end
end
