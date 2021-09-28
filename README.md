# Address Search

*A Platform for searching for Addresses and viewing home bying details*

* Ruby version
1. This app uses ruby 3.0.0
2. If you are not currently running this version of ruby, please upgrade or use rvm to switcth to ruby 3.0.0

* System dependencies
1. All Gem bundles should be installed
2. If any errors arise that point to Gems missing
3. Please cd into the root of the App and run `bundle install` in a terminal

## Installation

1. Download this repository
2. `cd` into repository directory
3. Run `rake db:migrate` to build the database
4. Run `rake db:seed` to seed the database with Cookies and Wines
5. Run `yarn add @rails/webpacker`
6. Run `bundle update webpacker`
7. Run `rails start` to start the server
8. Visit the address provided for the local server (i.e. `http://localhost:3000`)


## Usage

After creating an account or logging in, a user will be directed to base route. From there, the user can:
1. Use the Form to search for an address
2. If a single address cannot be found, the app will attempt to find similar addresses.


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/seanoughton/cookies-and-wine.

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

