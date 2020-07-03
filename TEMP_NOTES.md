# Scroll refactor
* Scroll first and then pass callback to select verse.
    * Do for dispatchTimeVerse as well.
    * Acceptance criteria: scrolling on any verse change should be smooth.
        * I think the issue is that with functional components, there are more renders for every store update, causing scrolling to be clunky.
    * Selecting verse during play stops player. (Just needs to check queued as well as selected verse.)
    * Maybe think about stylesheet logic for verses?

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
