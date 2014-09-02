# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'ted_bootstrap/version'

Gem::Specification.new do |gem|
  gem.name          = "ted_bootstrap"
  gem.version       = TedBootstrap::VERSION
  gem.summary       = "Bootstrap theme for TED tools"
  gem.description   = "Provides a foundational front-end for TED's internal tools."
  gem.authors       = ["Joe Bartlett"]
  gem.email         = ["joe@ted.com"]
  gem.homepage      = "https://github.com/tedconf/ted_bootstrap"

  gem.add_dependency "sass-rails",     ">= 3.2"
  gem.add_dependency "compass-rails",  "~> 1.1"
  gem.add_dependency "bootstrap-sass", "~> 3.1"
  gem.add_dependency "font-awesome-sass", "~> 4.1.0"

  gem.add_dependency "haml-rails"
  gem.add_dependency "redcarpet"

  # Allow /swatch routes to be tested while developing the gem
  # See config.ru for details on how to start this up
  gem.add_development_dependency "rails", ">= 4.0.2"
  gem.add_development_dependency "thin"
  gem.add_development_dependency "sass-css-importer", "~> 1.0.0.beta.0"

  gem.add_development_dependency "jquery-rails", ">= 3.1.0"

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]
end
