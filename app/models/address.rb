class Address < ApplicationRecord
	#Returns a collection of Addresses if they can be found
	def self.get_addresses(params)
		@found = true
		@similar = []
		# Check the params to see which ones have valid values
		keys = []
		params.keys().each do |param|
			if self.param?(params[param]) && param != "controller" && param != "action"
				keys.push(param)
			end
		end
		# Search for an exact address using all available input params
		@addresses = Address.where(street: params[:street].downcase, city: params[:city].downcase, state: params[:state].downcase, zip: params[:zip])
		# If a single Address is found, find Addresses in a similar price range
		# Else if no address is found, find Addresses with similar Attributes based on each param key
		if @addresses.length != 0
			Address.where(price: (@addresses[0].price - @addresses[0].price*0.25...@addresses[0].price + @addresses[0].price*0.25)).limit(20).find_each().each do |address|
				@similar.push(address)
			end
			@similar.shift
		else
			@addresses = []
			@found = false
			keys.each do |key|
				Address.where("#{key} LIKE ?", "%" + "#{params[key]}" + "%").limit(50).find_each().each do |address|
					@addresses.push(address)
				end
				if @addresses.length > 0
					break
				end
			end
		end
		return {"addresses" => @addresses, "similar" => @similar, "found" => @found}
	end

	def self.param?(param)
		param != "undefined"
	end

	# This is not currently used, but leaving in for future development
	def self.find_by_id(params)
		Address.find(params['id'])
	end
end

