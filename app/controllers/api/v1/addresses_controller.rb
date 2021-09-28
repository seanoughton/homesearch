class Api::V1::AddressesController < ApplicationController
    # Return address queries as json
    def index 
        render json: Address.get_addresses(address_params)
        rescue ActiveRecord::RecordNotFound => e
            render json: {
                error: e.to_s
            }, status: :not_found
    end


    private
    # White list the params
    def address_params
        params.permit(:street, :city, :state, :zip)
    end
end
