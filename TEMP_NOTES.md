# Thursday
* Consolidate refs.
    * ref is name of dispatcher, plus "dispatch." For example, scrollVerseDispatch.
    * Remove "dispatch" from method. For example, scrollVerse.
    * Leave "timeout" out of name, instead refer to callback.
    * Refer to elements by their component name plus "element," like lyricScrollElement.
* Everything from device width can live in viewport store. Then they're all set together in the action.

# Friday
* Start getting rid of listeners by putting in reducers, or moving completely to selectors. Begin with PopupAnnotation listener.
* With PopupAnnotation gone, remove transient store. Spread out its selectors to appropriate other stores. Figure out best way to organise selectors.
* Make verseBars a bit number.

# Saturday
* AudioPlayer refactor

# Pre-Gatsby bugs
* Verse scroll key doesn't always work.

# Post-Gatsby bugs
* From clean slate, selecting annotation by click, then navigating by key, wiki wormhole takes two keys to become accessed. Not sure if pre or post Gatsby.
* Don't style selected verse when verse bar is shown.

# Minor issues, to be investigated while production is on master before Gatsby.
* Figure out why window resizing timeout seems to have regressed.
* PT Sans Italic is small? e.g. The Man in the High Castle.
* tips hand in garryowen for score
* Do I really want scene activation to work as it does, where you need to go next, then previous, before hitting selected verse that is not the start of scene?

# Bugs that may get fixed after canEnter tear out.
* Song selection seems slower through access?
* Determine if scene store really needs its own song and scene index.
* Focus container can't focus lyric right away because ref doesn't exist. Maybe this will be fine once lyric mounts first?

# Easy reduction tasks
* Some todos to make a selector.
* Have verse store for queued verse select, just like annotation store.
* Listeners know to render themselves
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
