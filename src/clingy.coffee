do (root = @) ->

  jQueryAvail = do -> if root.jQuery then true else false

  class Clingy
    constructor: (@attribute = 'bind', data = {}) ->
      @data = new DataStore data
        
      @data.on 'change', (key, value) ->
        elems = document.querySelectorAll "data-bind=#{key}"
        e.innerHTML = value for e in elems
