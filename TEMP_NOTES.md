# TODO today
* Unit card parent prevents from mounting if not present
* Unit card can get sideCard, subCard, and sideSubCard
* Unit card can get main verses
* Reorganise side and sub cards to be at same level as main verses?

# Bugs
* Unit dot reference consistently doesn't get passed to scroll. Probably Anchor needs to forward ref.

# Minor issues, to be investigated while production is on master before Gatsby.
* Figure out why window resizing timeout seems to have regressed.
* PT Sans Italic is small? e.g. The Man in the High Castle.
* Switching between songs in local is slow, not as slow in staging
* tips hand in garryowen for score

# Bugs that may get fixed after logic styling tear out and redo.
* Anchor still shows in activated/slider mode.
* Even future verse does not have activated or hover colour.

# Bugs that may get fixed after canEnter tear out and redo.
* Selecting accessed verse has a delay.

# Brainless JS tasks
* Change all mapStateToProps to grab from selectors
* Ensure all selectors are used.
* Change all to use overviewShown and tipsShown. Then prefix with is.
* Rename all to dotBit, use selectedDotBit and activatedDotBit?
* Shorten queued names as well?

# Brainless CSS tasks
* Logic styles should live together. (So that they can be removed together if needed.)

# Easy reduction tasks
* Make Annotation handler both functions.
* Have verse store for queued verse select, just like annotation store.
* Make dispatchers functions.
* Internal stylesheet fixes
* Simplify Anchor for social media anchors
* Listeners know to render themselves
* Mount, responsive, proscenium, and theatre values can just be aggregate selectors. Basically, get rid of everything in window that's not the window width and height. Replace in map state to props first.
* Also, the listeners.
* Make isActivated and isSelected selectors.

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
