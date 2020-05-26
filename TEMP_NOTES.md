# Bugs
* Figure out why window resizing timeout seems to have regressed.
* Sketchbooks are blank. (Sketches are probably behind them.)
* Wires for bottom bubble above wires for top bubble. Happens in Chrome now.

# Easy reduction tasks
* Internal stylesheet fixes
* Top level components import own styles
    * Child components also import own styles
* Simplify Anchor for social media anchors
* Listeners and Main components know to render themselves
* Move Carousel to top level of Root

# Ongoing Gatsby tasks
* Dynamic routes for song indices
* Pages and routing
    * 404 page
* URL replacement
* Add back admin routes

* Favicon
* Splash page
* Deprecated page
* Take care of weirdness that results from client/server discrepancies.
    * Heightless and zoom show the same thing.
    * Always render Carousel, even in mobile. Show carousel if heightless.
    * Only About, Carousel, and Lyric need to render for SEO.
