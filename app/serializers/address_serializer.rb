class AddressSerializer < ActiveModel::Serializer
  attributes :id, :property_type, :address, :city, :state, :zip, :price, :beds, :baths, :location, :square_feet, :lot_size, :year_built, :days_market, :price_per_sq_ft, :url, :lat, :long
end
