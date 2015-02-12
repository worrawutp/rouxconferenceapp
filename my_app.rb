require 'sinatra'

get '/' do
  # "Hello Sinatra"
  erb :index
end

get '/venuetravel' do
  erb :venuetravel
end

get '/schedule' do
  erb :schedule
end

get '/artists' do
  erb :artists
end

get '/register' do
  erb :register
end
