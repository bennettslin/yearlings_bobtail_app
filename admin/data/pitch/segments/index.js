import {
    TEMP_PITCH_ICON_1,
    TEMP_PITCH_ICON_2,
    TEMP_PITCH_ICON_3,
    TEMP_PITCH_ICON_4,
    TEMP_PITCH_ICON_5,
    TEMP_PITCH_ICON_6,
    TEMP_PITCH_ICON_7,
    TEMP_PITCH_ICON_8,
    TEMP_PITCH_ICON_9,
    TEMP_PITCH_ICON_10,
    TEMP_PITCH_ICON_11,
    TEMP_PITCH_ICON_12,
} from '../../../../app/constants/pitch'

export default [
    {
        path: `introduction`,
        title: `Introduction`,
        description: [
            `Hi, we're the Bobtail Yearlings! We'd love to hear from ambitious musicians, record labels and the music press, and anyone else interested in working with us.`,
            `Are you thinking to get in touch, but feeling unsure about our unconventional way of doing things? Read on, and I'll convince you that we're as reasonable to bet on as any artist you've worked with before.`,
        ],
        contactEmail: true,
        tempImageDescription: `Old Bennett`,
        imageKey: TEMP_PITCH_ICON_1,
    },
    {
        path: `stores-profit-then-scale`,
        title: `Stores profit, then scale`,
        description: [
            `Let's start in the world of business. It's easy to think all big companies are the same, but some begin as startups, others as stores. What's the difference?`,
            `Stores seek first to profit, then scale. For example, Walmart began as a neighborhood store. Once it became profitable, Sam Walton opened another store in the next town over, and then another.`,
            `There's little risk in trying to scale a store, since each new store can repeat the same proven strategy. The downside is that scaling might not be possible. Since stores fulfill a known need, one isn't much different from the next. So wherever one competitor opens a store, there's now less room for others.`,
        ],
        footnote: `In this pitch, let's call any company a store if it sells products or services involving in-person transactions.`,
        tempImageDescription: `Walmart stores, linear graph`,
        imageKey: TEMP_PITCH_ICON_2,
    },
    {
        path: `startups-scale-then-profit`,
        title: `Startups scale, then profit`,
        description: [
            `Unlike stores, a startup seeks to scale first, even if this means going without profit in the short term. A good example is Google, which stayed unprofitable in its first few years until it reached millions of users.`,
            `This means that founding a startup is a risky venture at every step along the way. The upside is that the need to self-differentiate is baked into a startup's business model. So if its founders have correctly identified an unknown need that they can fulfill, then their path to scale and success is probably assured.`,
        ],
        tempImageDescription: `Google suite, superlinear graph`,
        imageKey: TEMP_PITCH_ICON_3,
    },
    {
        path: `startups-and-the-network-effect`,
        title: `Startups and the network effect`,
        description: [
            `If a startup makes no profit when it only has thousands of users, how can it suddenly turn profitable with a million users? One reason is the network effect, where a product becomes more valuable to every user as more users use the product.`,
            `For example, back when Facebook launched, its thousands of users were only able to connect with their fellow classmates at Harvard. By the time it had millions of users, however, each one could now connect with childhood friends, distant family members, and more.`,
        ],
        footnote: [
            `More on the`,
            {
                anchor: `network effect.`,
                href: `https://en.wikipedia.org/wiki/Network_effect`,
            },
        ],
        tempImageDescription: `Facebook nodes`,
        imageKey: TEMP_PITCH_ICON_4,
    },
    {
        path: `startups-and-economies-of-scale`,
        title: `Startups and economies of scale`,
        description: [
            `Another reason a startup might only later become profitable is something called economies of scale. These are when fixed costs, spread over a greater number of users, level out to lower costs per user.`,
            `This neatly sums up Amazon's advantage. In its first five years, Amazon lost money because the upfront costs of packaging and shipping physical books are necessarily high. But once their infrastructure was in place to handle this, any additional costs of taking on more users and offering more products became negligible.`,
        ],
        footnote: [
            `More on`,
            {
                anchor: `economies of scale.`,
                href: `https://en.wikipedia.org/wiki/Economies_of_scale`,
            },
        ],
        tempImageDescription: `Amazon delivery cycle`,
        imageKey: TEMP_PITCH_ICON_5,
    },
    {
        path: `greater-risks-greater-rewards`,
        title: `Greater risks, greater rewards`,
        description: [
            `While stores are the oldest form of business, startups are more recent, and they behave very differently. So in the early days, investors tended to dismiss them as a bad deal. This was unfortunate, since startups absolutely depend on investors. Without their initial support, it isn't possible to scale first without making a profit.`,
            `This is why we have the word "startup," to remind us that startups are their own thing. They're not simply stores that are riskier for being less competent. A startup comes with more risk precisely because it aims to fulfill an unknown need. But if it succeeds, then it becomes the leader of a new market. And for investors, this means a greater reward.`,
        ],
        footnote: [
            `This point is taken from Paul Graham's essay`,
            {
                anchor: `"Startup = Growth."`,
                href: `http://www.paulgraham.com/growth.html`,
            },
        ],
        tempImageDescription: `Investor seeing linear and superlinear graphs`,
        imageKey: TEMP_PITCH_ICON_6,
    },
    {
        path: `indie-artists-are-like-stores`,
        title: `Indie artists are like stores`,
        description: [
            `Let's get back now to music. For the past couple decades, record labels have preferred to sign indie artists, since they pose fewer risks. But it's no wonder why indie artists are less risky; they're the stores of the music world.`,
            `Indie artists typically gain fans by playing live shows. This is possible because audiences for shows already exist, and they arrive with certain expectations. In other words, indie artists fulfill a known need. And once an indie artist has built up a regional fanbase of a thousand, they can repeat their strategy to win over the next thousand fans in another region, and then the next.`,
        ],
        tempImageDescription: `Indie artist playing to audiences in different cities, linear graph.`,
        imageKey: TEMP_PITCH_ICON_7,
    },
    {
        path: `artups-are-like-startups`,
        title: `Artups are like startups`,
        description: [
            `But what if other artists are like startups, trying to fulfill an unknown need? Artists who believe, as Steve Jobs did, that people don't know what they want until you show them? If such an artist's hunches are correct, then their chances for scale and success might be assured. After all, they'll be the only one of their kind to reach an audience that previously didn't exist.`,
            `Yet unless we recognize these artists as their own thing, we'll only ever see them as incompetent indie artists. So let's create a new word for them, one that acknowledges their need for mutual reliance. Since "interdependent" doesn't shorten into anything sweet, let's call them "artups." The rhyme will remind us that artups, like startups, also need initial support from others.`,
        ],
        footnote: [
            `Here's the`,
            {
                anchor: `full quote`,
                href: `https://www.goodreads.com/quotes/988332-some-people-say-give-the-customers-what-they-want-but`,
            },
            `from Steve Jobs.`,
        ],
        tempImageDescription: `Artist creating works, superlinear graph.`,
        imageKey: TEMP_PITCH_ICON_8,
    },
    {
        path: `artups-and-the-network-effect`,
        title: `Artups and the network effect`,
        description: [
            `If an artup struggles to gain a thousand fans on their own, how can anyone's support help them win over a million? One reason is the network effect. A work may be seen as worthwhile only when more people appreciate it.`,
            [
                `James Joyce's`,
                {
                    isItalic: true,
                    lyric: `Ulysses`,
                },
                `is so dense and complex, for example, that if a community of readers hadn't already taken the leap, most of us wouldn't bother with it. We need their reassurance that its many difficult passages aren't gibberish but instead hide layers of deeper meaning, and that our patience will be rewarded.`,
            ],
        ],
        tempImageDescription: `Ulysses nodes`,
        imageKey: TEMP_PITCH_ICON_9,
    },
    {
        path: `artups-and-economies-of-scale`,
        title: `Artups and economies of scale`,
        description: [
            `Economies of scale are another reason why an artup might become viable only after reaching a critical mass of fans. If a work involves many performers, then the upfront costs in preparation and coordination can only be recovered by playing to a large audience.`,
            [
                `For example, during the`,
                {
                    isItalic: true,
                    lyric: `Pet Sounds`,
                },
                `recording sessions, Brian Wilson didn't hold back on the range of instruments or depth of arrangements that he used. This would have made it very difficult to recreate onstage. So once the album sold poorly, the Beach Boys decided not to go on tour to support it at all.`,
            ],
        ],
        tempImageDescription: `Pet Sounds, `,
        imageKey: TEMP_PITCH_ICON_10,
    },
    {
        path: `our-initial-reception`,
        title: `Our initial reception`,
        description: [
            [
                `If you've checked out our audio webcomic, then you might know where this is going.`,
                {
                    isItalic: true,
                    lyric: `Yearling's Bobtail`,
                },
                `was my attempt to create the`,
                {
                    isItalic: true,
                    lyric: `Ulysses`,
                },
                `of rock albums. Unfortunately, its complex lyrics only make sense after careful study, which we as an unknown band had no right to ask of anyone. So upon its initial release, no one bothered. One reviewer even mistook the lyrics for Engrish!`,
            ],
            [
                `And with the depth of arrangements on`,
                {
                    isItalic: true,
                    lyric: `Yearling's Bobtail,`,
                },
                `I was also hoping to create the next`,
                {
                    isItalic: true,
                    lyric: `Pet Sounds.`,
                },
                `But without an existing fanbase, I struggled to find bandmates willing to tour in support of an album with so many intricate parts to learn. The stripped-down sets we ended up playing just didn't convey what it was meant to be.`,
            ],
        ],
        tempImageDescription: ``,
        imageKey: TEMP_PITCH_ICON_11,
    },
    {
        path: `bet-on-the-bobtail-yearlings`,
        title: `Bet on the Bobtail Yearlings`,
        description: [
            `Let's wrap this up! We've seen that as the Digital Revolution got underway, investors came to learn that startups aren't stores. What if we can kickstart the next musical revolution just by learning that artups aren't like indie artists?`,
            [
                `And yes, the Bobtail Yearlings were rightfully judged to be incompetent when seen as an indie band. But how does`,
                {
                    isItalic: true,
                    lyric: `Yearling's Bobtail`,
                },
                `do when measured as the work of an artup?`,
            ],
            `If you're convinced to bet on us, let's talk! We're flexible and open-minded, and we've got a few creative ideas to discuss.`,
        ],
        contactEmail: true,
        tempImageDescription: `Old Bennett with arm raised`,
        imageKey: TEMP_PITCH_ICON_12,
    },
]
