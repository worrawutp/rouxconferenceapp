# require File.dirname(__FILE__) + '/lib/my_app'
# require File.dirname(__FILE__) + '/lib/another_app'
require './my_app'
require './another_app'

map "/" do
  run Sinatra::Application
end

map "/another" do
  run AnotherApp
end