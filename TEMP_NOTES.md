# Bugs while production hasn't changed.
* Figure out why window resizing timeout seems to have regressed.
* PT Sans Italic is small? e.g. The Man in the High Castle.
* Switching between songs in local is slow, not as slow in staging
* tips hand in garryowen for score
* Slider access keys show in logues.

# Brainless JS tasks
* Change all mapStateToProps to grab from selectors
* Ensure all selectors are used.
* Change all to use overviewShown and tipsShown. Then prefix with is.

# Brainless CSS tasks
* Components import own styles.
* Don't import styles in app index.
* Logic styles should live together. (So that they can be removed together if needed.)

# Easy reduction tasks
* Internal stylesheet fixes
* Simplify Anchor for social media anchors
* Listeners know to render themselves
* Mount, responsive, proscenium, and theatre values can just be aggregate selectors. Basically, get rid of everything in window that's not the window width and height. Replace in map state to props first.
* Also, the listeners.
* Make dispatchers functions.

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
