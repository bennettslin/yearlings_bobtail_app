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
    TEMP_PITCH_ICON_13
} from '../../../../app/constants/pitch'

export default [
    {
        path: `introduction`,
        title: `Introduction`,
        description: [
            `Hi there! Are you otherwise interested in working with the Bobtail Yearlings, but our untested way of doing things is making you nervous?`,
            `Read on, and I'll convince you that the Bobtail Yearlings are as reasonable to bet on as any other artist you've worked with in the past.`
        ],
        tempImageDescription: `Old Bennett`,
        imageKey: TEMP_PITCH_ICON_1
    },
    {
        path: `stores-versus-startups`,
        title: `Stores versus startups`,
        description: [
            `Let's start by talking about the world of business. It's easy to paint all big companies with the same brush, but in their early days, they can be very different. Some begin as startups, and others as stores.`,
            `(For the sake of this pitch, we'll call any company a store if it sells products or services that involve in-person transactions.)`
        ],
        tempImageDescription: `Google and Walmart`,
        imageKey: TEMP_PITCH_ICON_2
    },
    {
        path: `stores-profit-then-scale`,
        title: `Stores profit, then scale`,
        description: [
            `What's the difference between startups and stores? A store seeks first to profit, then scale. For example, Walmart began as a neighborhood store. Once it became profitable, Sam Walton opened another store in the next town over, and then another.`,
            `There's little risk in trying to scale a store, since each new store can repeat the same proven strategy. The downside is that scaling might not be possible. Since stores fulfill a known need, one isn't much different from the next. So wherever one competitor has opened a store, there's now less room for others.`
        ],
        tempImageDescription: `Walmart stores, linear graph`,
        imageKey: TEMP_PITCH_ICON_3
    },
    {
        path: `startups-scale-then-profit`,
        title: `Startups scale, then profit`,
        description: [
            `Unlike stores, a startup seeks to scale first, even if this means going without profit in the short term. A good example is Google, which stayed unprofitable in its first few years until it reached millions of users.`,
            `This means that founding a startup is a risky venture at every step along the way. The upside is that the need to self-differentiate is baked into a startup's business model. So if its founders have correctly identified an unknown need that they can fulfill, then their path to scale and success is probably assured.`
        ],
        tempImageDescription: `Google suite, superlinear graph`,
        imageKey: TEMP_PITCH_ICON_4
    },
    {
        path: `startups-and-network-effects`,
        title: `Startups and network effects`,
        description: [
            `If a startup makes no profit when it only has thousands of users, how can it suddenly turn profitable with a million users? One reason is the network effect, where a product becomes more valuable to every user as more users use the product.`,
            `For example, back when Facebook launched, its thousandth user was only able to connect with fellow classmates at Harvard. By the time it had millions of users, however, each user could now connect with childhood friends, distant family members, and more.`
        ],
        tempImageDescription: `Facebook nodes`,
        imageKey: TEMP_PITCH_ICON_5
    },
    {
        path: `startups-and-economies-of-scale`,
        title: `Startups and economies of scale`,
        description: [
            `Another reason a startup might only later become profitable is something called economies of scale. These are when fixed costs, spread over a greater number of users, level out to lower costs per user.`,
            `This neatly sums up Amazon's advantage. In its first five years, Amazon lost money because the upfront costs of packaging and shipping physical books were so high. Once their infrastructure was in place to handle this, however, any additional costs of taking on more users and offering more products became negligible.`
        ],
        tempImageDescription: `Amazon delivery cycle`,
        imageKey: TEMP_PITCH_ICON_6
    },
    {
        path: `greater-risks-greater-rewards`,
        title: `Greater risks, greater rewards`,
        description: [
            `While stores are the oldest form of business, startups are more recent, and they behave very differently. So in the early days, investors would often dismiss a startup as a bad deal. This was unfortunate, since startups absolutely need investors. Without their initial support, it isn't possible to scale first without making a profit.`,
            `This is why we have the word "startup," to remind us that startups are their own thing. They're not simply stores that are riskier for being less competent. A startup comes with more risk precisely because it aims to fulfill an unknown need. But if it succeeds, then it becomes the leader of a new market. And for investors, this means a greater reward.`
        ],
        footnote: [
            `See Paul Graham's essay`,
            {
                anchor: `"Startup = Growth."`,
                href: `http://www.paulgraham.com/growth.html`
            }
        ],
        tempImageDescription: `Comparison of linear and superlinear graphs`,
        imageKey: TEMP_PITCH_ICON_7
    },
    {
        path: `indies-are-like-stores`,
        title: `Indies are like stores`,
        description: [
            `Let's get back now to music. For the past couple decades, record labels have preferred to sign indie artists, since they pose fewer risks. But it's no wonder why indie artists are less risky; they're the stores of the music world.`,
            `Indie artists typically gain fans by playing live shows. This is possible because audiences for shows already exist, and they arrive with certain expectations. In other words, indie artists fulfill a known need. And once an indie artist has grown a regional fanbase of a thousand, they can repeat the same strategy to win over the next thousand fans in a neighboring region, and then the next.`
        ],
        tempImageDescription: `Indie artist playing to audiences in different cities, linear graph.`,
        imageKey: TEMP_PITCH_ICON_8
    },
    {
        path: `artups-are-like-startups`,
        title: `Artups are like startups`,
        description: [
            `But what if other artists are like startups, trying to fulfill an unknown need? Artists who believe, as Steve Jobs did, that people don't know what they want until you show them? If these artists are correct in their hunches, then their chances for scale and success might be assured. After all, they'll be the only one of their kind to reach an audience that previously didn't exist.`,
            `Yet unless we recognise these artists as being their own thing, we'll only ever see them as less competent indie artists. So let's create a new word for them. I propose we call them "artups."`
        ],
        footnote: [
            `Here's the`,
            {
                anchor: `full quote`,
                href: `https://www.goodreads.com/quotes/988332-some-people-say-give-the-customers-what-they-want-but`
            },
            `from Steve Jobs.`
        ],
        tempImageDescription: `Artist creating works, superlinear graph.`,
        imageKey: TEMP_PITCH_ICON_9
    },
    {
        path: `artups-and-network-effects`,
        title: `Artups and network effects`,
        description: [
            `Since artups are like startups, they also depend on initial support from others. But if an artup struggles to gain a thousand fans on their own, how could anyone's support help them win over a million? One reason is the network effect. A work may be seen as worthwhile only when more people come to appreciate it.`,
            [
                `James Joyce's`,
                {
                    isItalic: true,
                    lyric: `Ulysses`
                },
                `is so dense and complex, for example, that if a community of readers hadn't already taken the leap, most of us wouldn't bother with it. We need their reassurance that its many difficult passages aren't gibberish but instead hide layers of deeper meaning, and that our patience will be rewarded.`
            ]
        ],
        tempImageDescription: `Ulysses nodes`,
        imageKey: TEMP_PITCH_ICON_10
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
                    lyric: `Pet Sounds`
                },
                `recording sessions, Brian Wilson didn't hold back on the range of instruments or depth of arrangements that he used. This would have made it very difficult to recreate onstage. So once the album sold poorly, the Beach Boys decided not to go on tour to support it at all.`
            ]
        ],
        tempImageDescription: `Pet Sounds, `,
        imageKey: TEMP_PITCH_ICON_11
    },
    {
        path: `our-initial-reception`,
        title: `Our initial reception`,
        description: [
            [
                `If you've checked out our audio webcomic, then you know that`,
                {
                    isItalic: true,
                    lyric: `Yearling's Bobtail`
                },
                `was my attempt to create the`,
                {
                    isItalic: true,
                    lyric: `Ulysses`
                },
                `of rock albums. Unfortunately, its complex lyrics could only be understood after careful study, which we as an unknown band had no right to ask of anyone. So upon its initial release, no one bothered. One reviewer even mistook the lyrics for Engrish!`
            ],
            [
                `And with the depth of arrangements on`,
                {
                    isItalic: true,
                    lyric: `Yearling's Bobtail,`
                },
                `I was also hoping to create the next`,
                {
                    isItalic: true,
                    lyric: `Pet Sounds.`
                },
                `But without an existing fanbase, I struggled to find bandmates willing to tour in support of an album with so many intricate parts to learn. The stripped-down sets we ended up playing just didn't convey what it was meant to be.`
            ]
        ],
        tempImageDescription: ``,
        imageKey: TEMP_PITCH_ICON_12
    },
    {
        path: `bet-on-the-bobtail-yearlings`,
        title: `Bet on the Bobtail Yearlings`,
        description: [
            `As an indie artist, the Bobtail Yearlings were rightfully judged to be less competent. But `,
            `Digital Revolution`,
            `Of course, betting on the Bobtail Yearlings comes with a risk, just as betting on any other startup or artup does. This is just to say it wouldn't be unreasonably risky. Good conclusion. Happy to work with you.`
        ],
        tempImageDescription: `Old Bennett again`,
        imageKey: TEMP_PITCH_ICON_13
    }
]
