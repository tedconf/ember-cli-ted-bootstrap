# An exceedingly lightweight Rails app to aid development of
# TED Bootstrap via /swatch routes. To start the thin server,
# simply bundle install and run the following:
# bundle exec rackup -p 3000 -s thin
# Once the server's started, point your browser to:
# http://localhost:3000/swatch

require 'rails'
require 'action_controller/railtie'

Bundler.require(:default, Rails.env)

module TedBootstrapTest
  class Application < Rails::Application
    config.cache_classes = false
    config.eager_load = false
    config.consider_all_requests_local = true
    config.action_controller.perform_caching = false
    config.assets.debug = true
    config.secret_key_base = '49837489qkuweoiuoqwehisuakshdjksadhaisdy78o34y138974xyqp9rmye8yrpiokeuioqwzyoiuxftoyqiuxrhm3iou1hrzmjk'
  end
end

TedBootstrapTest::Application.initialize!

run Rails.application
