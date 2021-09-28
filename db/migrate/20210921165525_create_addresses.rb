class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :property_type
      t.string :street
      t.string :city
      t.string :state
      t.integer :zip
      t.integer :price
      t.integer :beds
      t.integer :baths
      t.string :location
      t.integer :square_feet
      t.integer :lot_size
      t.integer :year_built
      t.integer :days_on_market
      t.float :price_per_sq_ft
      t.string :url
      t.float :lat
      t.float :long
      t.timestamps
    end
  end
end
