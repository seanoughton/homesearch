#ADDRESSES
CSV.foreach("db/csv/addresses.csv") do |row|
    new_address = Address.create(
        property_type: row[2].downcase,
        street: row[3].downcase,
        city: row[4].downcase,
        state: row[5].downcase,
        zip: row[6],
        price: row[7],
        beds: row[8],
        baths: row[9],
        location: row[10].downcase,
        square_feet: row[11],
        lot_size: row[12],
        year_built: row[13],
        days_on_market: row[14],
        price_per_sq_ft: row[15],
        url: row[20],
        lat: row[25],
        long: row[26]
        )
end

