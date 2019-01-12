export default [
    /**
     * Low priority tasks to reduce DOM nodes. Max is currently Constellations,
     * with 5523 upon load. (document.querySelectorAll('*').length)
     */
    {
        taskName: `Just have a single span of text in anchors, rather than both plain text and link.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Remove VerseColor by just applying its classes to parent.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Mount VerseTracker upon transition.`,
        workedHours: 0,
        neededHours: 3
    },
    {
        taskName: `Don't have annotation and unit tabs in mobile.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Make slider tabs a pseudo element, and apply drop shadow instead of box shadow.`,
        workedHours: 0,
        neededHours: 2
    },
    {
        taskName: `Get rid of getDefinedOnlyPayload, once I've confirmed that nothing ever passes undefined value.`,
        workedHours: 0,
        neededHours: 1
    }
]
