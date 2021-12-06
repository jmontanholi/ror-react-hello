class V1::GreetingsController < ApplicationController
  before_action :set_greeting, only: %i[ show edit update destroy ]

  # GET /greetings or /greetings.json
  def random
    random = Random.new
    @greeting = Greeting.find(random.rand(1..5))
    render json: { 
      :greeting => "#{@greeting.greeting}"
    }.to_json
  end
end
