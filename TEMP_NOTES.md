# Current plan
* Confirm that carousel and lyric don't get torn down upon page change.

# Next post-Gatsby work
* URL replacement and redirects
    * useHistory doesn't work in Gatsby
* Make sure routing verse and annotation indices work as well
* Storage verse and annotation should work, they currently don't
* Test all routing and storage possibilities
    * Only accept storage values if no routing given? Would make things a lot easier...
* 404 page
    * Just uses home page, but make sure URL is cleared
* Numbered paths
    * Still redirect a numbered path to song, if valid

# Later post-Gatsby work
* Admin routes
* Favicon
* App loading indicator
* Deprecated page for Internet Explorer?
* Why is Gatsby build so much bigger than webpack build?
* Does Gatsby get a fresh version?
* Still need GA in utils?

# Next work
* Scene doesn't reset to default when curtain is closed.
* Selecting carousel annotation will sometimes flash lyric above carousel.
* Banner filmstrip styling should get constants from constants folder

# Post-Gatsby bugs
* Song banner animation when repeating song is janky. Not sure if pre or post Gatsby.
* Failed to decode downloaded font warning?

# Minor issues, to be investigated while production is on master before Gatsby.
* Is song selection still slower through access after refactor?
* tips hand in garryowen for score

# Easy tasks
* Experiment with removing from reducers and putting back in listeners to improve performance? Is this needed?
* Slider verse select ranges don't really align with hover ranges.
* Some todos to make a selector.
* Have verse store for queued verse select, just like annotation store.
* Make isActivated and isSelected selectors.
* Shorten constants to abbreviations?
