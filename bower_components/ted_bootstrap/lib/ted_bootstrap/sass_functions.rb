# Utility methods for working with sprites

module Sass::Script::Functions
  # Returns width of generated sprite map
  def sprite_width(map)
    Sass::Script::Number.new(map.size[0], ["px"])
  end

  # Returns height of generated sprite map
  def sprite_height(map)
    Sass::Script::Number.new(map.size[1], ["px"])
  end
end
