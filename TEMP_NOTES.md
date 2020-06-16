# Tuesday
* Refigure overview and tips logic
    * Only three ways to toggle each: click, letter key, and escape
    * If both options are shown, only tips is visible
    * While tips is visible and overview is already shown, overview can be forced by hiding tip.
    * Upon song change, hidden options are shown again.
    * Logue overview has its own logic.
* Add back admin routes

# Pre-Gatsby bugs
* Verse scroll key doesn't always work.

# Post-Gatsby bugs
* Song banner animation when repeating song is janky. Not sure if pre or post Gatsby.

# Minor issues, to be investigated while production is on master before Gatsby.
* tips hand in garryowen for score
* Do I really want scene activation to work as it does, where you need to go next, then previous, before hitting selected verse that is not the start of scene?

# Bugs that may get fixed after canEnter tear out.
* Song selection seems slower through access?
* Determine if scene store really needs its own song and scene index.
* Focus container can't focus lyric right away because ref doesn't exist. Maybe this will be fine once lyric mounts first?

# Easy reduction tasks
* Can get rid of about dispatcher and dots slide listener.
* Some todos to make a selector.
* Have verse store for queued verse select, just like annotation store.
* Make isActivated and isSelected selectors.
* Shorten constants to abbreviations?

# Ongoing Gatsby tasks
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
