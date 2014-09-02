module TedBootstrap
  module Rails
    class Engine < ::Rails::Engine
      config.assets.precompile += [
        'ted_bootstrap_swatch.css',
        'ted_bootstrap_swatch.js'
      ]

      # Additional Compass configuration
      Compass.configuration.sprite_load_path << Engine.root.join('vendor', 'assets', 'sprites').to_s
    end
  end
end