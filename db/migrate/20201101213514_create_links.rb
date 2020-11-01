class CreateLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :links do |t|
      t.string :code
      t.json :score

      t.timestamps
    end
  end
end
