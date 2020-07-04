# TODO for scroll refactor
* Can't scroll through verses in succession, previous cancels next. This messes up verse bars as well.

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

# Easy tasks
* Slider verse select ranges don't really align with hover ranges.
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
