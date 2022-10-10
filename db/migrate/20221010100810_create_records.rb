class CreateRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :records do |t|
      t.datetime :last_record_date
      t.text :record
      # Allow this to be created automatically as foreign keys.
      # This will look like this:
      # t.index ["patient_id"], name: "index_records_on_patient_id"
      #   #tip: while gen resources do, rails g resource name column:belongs_to
      # ....
      # add_foreign_key "patients"
      t.belongs_to :patient, null: false, foreign_key: true
      # t.integer :doctor_id ~> no relation!
      t.string :medication

      t.timestamps
    end
  end
end
