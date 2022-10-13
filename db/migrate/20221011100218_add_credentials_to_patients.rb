class AddCredentialsToPatients < ActiveRecord::Migration[7.0]
  def change
    add_column :patients, :username, :string
    add_column :patients, :password_digest, :string
  end
end
