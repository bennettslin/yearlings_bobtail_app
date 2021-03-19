# Volume work

## State and keyboard access
* Rename options button to repeat everywhere [x]
    * Make it a boolean [x]
* Have state where options field is shown [x]
    * Control with temporary access key [x]
    * Only toggled by click
* Have volume state
    * Control with access key, Command up and down
        * Make sure it works with PC as well
    * Access key works regardless of options field
* Ensure repeat access key continues to work
    * Access key works regardless of options field

## Basic layout
* Have options field, twice width of icon length
    * In place where audio option currently sits
* When clicked, it expands to complete width of audio bar
    * Other audio buttons fade
* Behaves like a button. Light hover and bounce.
* When clicked outside, it collapses
    * Other audio buttons reappear

## Icons
* Plan out designs
* Just use placeholders for now
* Show inverse icons in collapsed mode
* Have solid button and range input in expanded mode
* Show access keys

## Interaction
* Clicking on repeat button
    * Toggles repeat in options state
* Clicking on volume range input
    * Changes volume in options state

## Icons
* Create svg icons

## Closing
* Collapse audio options field upon clicking body, or opening or closing anything else.
    * Not currently set up this way.
* Test closing logic.