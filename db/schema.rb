ActiveRecord::Schema.define(version: 2021_09_21_165525) do

  create_table "addresses", force: :cascade do |t|
    t.string "property_type"
    t.string "street"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.integer "price"
    t.integer "beds"
    t.integer "baths"
    t.string "location"
    t.integer "square_feet"
    t.integer "lot_size"
    t.integer "year_built"
    t.integer "days_on_market"
    t.float "price_per_sq_ft"
    t.string "url"
    t.float "lat"
    t.float "long"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
