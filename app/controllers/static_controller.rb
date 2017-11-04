class StaticController < ApplicationController
	def privacy
		@policy = Privacy.policy
		@definitions = Privacy.definitions
	end
end