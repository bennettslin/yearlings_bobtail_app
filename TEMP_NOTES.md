# Verse styling refactor
* Make logicSelectors easier. Maybe even get rid of VerseHoc?
* Playing verse should be neutral and not hoverable when activated.

# Pre-Gatsby bugs
* Activated scene index is undefined when accessing back to selected verse. Solve by just getting rid of those activated values.
* Verse scroll key not registered, and doesn't always work.

# Post-Gatsby bugs
* Bug where can select annotation with no dots.
* Stage dimensions act like two row menu in mobile, even when not?
* From clean slate, selecting annotation by click, then navigating by key, wiki wormhole takes two keys to become accessed. Not sure if pre or post Gatsby.

# Minor issues, to be investigated while production is on master before Gatsby.
* Figure out why window resizing timeout seems to have regressed.
* PT Sans Italic is small? e.g. The Man in the High Castle.
* tips hand in garryowen for score

# Bugs that may get fixed after canEnter tear out.
* Song selection seems slower through access?
* Determine if scene store really needs its own song and scene index.

# Brainless JS tasks
* Get rid of PopupAnnotation listener.

# Easy reduction tasks
* Last getRefs in LyricScroll: https://stackoverflow.com/questions/54633690/how-can-i-use-multiple-refs-for-an-array-of-elements-with-hooks
* Some todos to make a selector.
* Have verse store for queued verse select, just like annotation store.
* Internal stylesheet fixes
* Simplify Anchor for social media anchors
* Listeners know to render themselves
* Mount, responsive, proscenium, and theatre values can just be aggregate selectors. Basically, get rid of everything in window that's not the window width and height. Replace in map state to props first.
* Also, the listeners.
* Make isActivated and isSelected selectors.
* Shorten constants to abbreviations?

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
