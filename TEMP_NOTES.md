# Scroll refactor
* Eventually pass actions as json.
* Only scroll lyric collapsed if not already collapsed?
    * Also issues with auto scroll and heighted. Put this in a listener again?
* Scene is changing on every verse select.
    * Reducer is not behaving as it should. It should trigger only if the song or scene index has changed.
    * Have scene change manager handle it instead.
    * Have scene index determined by selector, not in store.
    * Acceptance criteria: scrolling on just verse change, with no scene change, should be smooth.
* Scroll first and then pass callback to select verse.
    * For dispatchVerse and dispatchTimeVerse
    * At point of dispatch, if scene will change, do not select verse, just scroll.
    * Acceptance criteria: scrolling on scene change should be smooth.

# Issues
* What is mapIsSelectPlayReady?
* Is song selection still slower through access after refactor?

# Entrance refactor revisit
* Make scrolling smooth with scene change.
* Song change transition is still kind of janky.

# Pre-Gatsby bugs
* Verse scroll key doesn't always work.

# Post-Gatsby bugs
* Song banner animation when repeating song is janky. Not sure if pre or post Gatsby.
* Failed to decode downloaded font warning?

# Minor issues, to be investigated while production is on master before Gatsby.
* tips hand in garryowen for score
* Do I really want scene activation to work as it does, where you need to go next, then previous, before hitting selected verse that is not the start of scene?

# Easy reduction tasks
* Some todos to make a selector.
* Have verse store for queued verse select, just like annotation store.
* Make isActivated and isSelected selectors.
* Shorten constants to abbreviations?

# Ongoing Gatsby tasks
* Add back admin routes
* Dynamic routes for song indices
* Pages and routing
    * 404 page
* URL replacement

* Favicon
* Splash page
* Deprecated page
* Take care of weirdness that results from client/server discrepancies.
    * Heightless and zoom show the same thing.
    * Always render Carousel, even in mobile. Show carousel if heightless.
    * Only About, Carousel, and Lyric need to render for SEO.
