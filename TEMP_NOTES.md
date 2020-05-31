# Bugs.
* After accessed wormhole, key navigation does not work until manual focus.
* R and F keys are wonky.

# Minor issues, to be investigated while production is on master before Gatsby.
* Figure out why window resizing timeout seems to have regressed.
* PT Sans Italic is small? e.g. The Man in the High Castle.
* Switching between songs in local is slow, not as slow in staging
* tips hand in garryowen for score

# Bugs that may get fixed after logic styling tear out and redo.
* Anchor still shows in activated/slider mode.
* Even future verse does not have activated or hover colour.

# Brainless JS tasks
* Change all mapStateToProps to grab from selectors
* Ensure all selectors are used.
* Change all to use overviewShown and tipsShown. Then prefix with is.
* Rename all to dotBit, use selectedDotBit and activatedDotBit?
* Shorten queued names as well?

# Brainless CSS tasks
* Logic styles should live together. (So that they can be removed together if needed.)

# Easy reduction tasks
* Make dispatchers functions.
* Internal stylesheet fixes
* Simplify Anchor for social media anchors
* Listeners know to render themselves
* Mount, responsive, proscenium, and theatre values can just be aggregate selectors. Basically, get rid of everything in window that's not the window width and height. Replace in map state to props first.
* Also, the listeners.
* Make isActivated and isSelected selectors.
* Remove extraneous bit number helpers used only by players now.

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
