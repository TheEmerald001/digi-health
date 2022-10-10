class CreateRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :records do |t|
      t.datetime :last_record
      # Allow this two to be created automatically as foreign keys.
      # This will look like this:
      # t.index ["user_id"], name: "index_recipes_on_user_id"
      # ....
      # add_foreign_key "patients"
      t.integer :patient_id
      t.integer :doctor_id
      t.text :medication

      t.timestamps
    end
  end
end
