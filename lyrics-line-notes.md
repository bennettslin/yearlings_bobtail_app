# Lyrics line notes

* Line can be "interactivated"
    * Only one line at a time is interactivated
        * If no line is interactivated, any can be interactivated by hover or click
        * If a line is interactivated, any other can be interactivated only by click, not hover
        * If line is interactivated by hover, it can be deinteractivated simply by removing hover
        * If line is interactivated by click, it can be deinteractivated by clicking elsewhere

    * The selected line is not interactivatable
        * But it still shows the lyric audio button
        * It is scaled slightly larger
        * Its background-colour is green
        * It has padding on top and bottom

    * But when there is a verse bar
        * Selected line does not show lyric audio button
        * Selected line has no styling

    * When line is interactivated
        * Its lyric audio button is shown
        * Its colour and background-colour are inverted
