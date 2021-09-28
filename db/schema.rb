# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

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
