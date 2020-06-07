# During work
* Change all mapStateToProps to grab from selectors. Just suck it up and do this.
* Ensure all selectors are used.
* Some todos to make a selector.

# Scene refactor
* Determine if scene store really needs its own song and scene index.
* Delete all null values in shared styles.

# Bugs
* Stage dimensions act like two row menu in mobile, even when not?
* Verse scroll key not registered, and doesn't always work.
* Unit dot reference consistently doesn't get passed to scroll. Probably Anchor needs to forward ref.
* From clean slate, selecting annotation by click, then navigating by key, wiki wormhole takes two keys to become accessed.
* Presence layering. Weird bug where record player in Cremated is in front of bed in one scene, then behind it in other.

# Minor issues, to be investigated while production is on master before Gatsby.
* Figure out why window resizing timeout seems to have regressed.
* PT Sans Italic is small? e.g. The Man in the High Castle.
* tips hand in garryowen for score

# Bugs that may get fixed after logic styling tear out and redo.
* VerseBar should not have hover styling.

# Bugs that may get fixed after canEnter tear out.
* Song selection seems slower through access?

# Brainless JS tasks
* Get rid of PopupAnnotation listener.
* Make dispatchers functions.
* Change all to use isOverviewShown and isTipsShown rather than selected options.
* Rename all to dotBit, use selectedDotBit and activatedDotBit?
* Shorten queued names as well?

# Easy reduction tasks
* Shorten constants
* Figure out how to get scroll children without storing them.
* Have verse store for queued verse select, just like annotation store.
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
