## structure:
the user chooses side, faction, era and is shown the motorpool sorted by categories: technical, apc, ifv, logi, mbt, spaa, spg, rotary transport, rotary attack, fixed transport, fixed attack, other/misc. (if one of the categories is void, not shown)

If side is changed, remove old faction (era) menus and show new factions.
when faction is changed, show new eras
Width of menus: longest string width + 10px padding
height of menus: nOptions + (n+1)*10px
total width of menus and spacing and vehicle displays should not exceed certain dimensions, ideally viewport
back to top button
calculate button at top and bottom, moves the viewport to the part of the site where the results are displayed

### BUTTONS:
when a side button is clicked, remove factions, eras and show side factions
when a faction button is clicked, show eras
when an era button is clicked, show motorpool stats, number input for the amount of vehicles

add a listener to the inputs, tied to a function that adds the stats of the vehicles, and shows the necessary crew


### CSS:
the flexbox in the css puts side div, faction div, era div and content div next to each other
flexbox 1: contains the divs for the sides, factions and eras, as well as the div that contains the entire motorpool
flexbox 2: contains the divs for a vehicle, containing the image, the data and the number input



