class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :features
      t.references :portfolio, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
