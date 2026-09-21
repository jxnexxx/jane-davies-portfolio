export type SectionVariant =
  | "classic"
  | "dropCap"
  | "pullQuote"
  | "image"
  | "feature"
  | "twoColumn"
  | "editorial"
  | "callout"
  | "numberedList"
  | "split"
  | "visual"
  | "fullWidth";

export type BlogSection = {
  id: string;
  title: string;
  variant: SectionVariant;
  postQuote?: string[];
  preQuote?: string[];
  quote?: string;
  introSpan?: string;
  topLeftText?: string[];
  topRightText?: string[];
  bottomRightText?: string[];
  finalQuote?: string;
};

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  fullDate: string;
  readTime: string;
  featured: boolean;
  image: string;
  pageImg?: string;
  authorImg: string;
  introText: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Face your frontend!",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    introText:
      "On the desire to do everything, the fear that no one's hiring frontend engineers, and the looming idea that AI can do it all. An explanation of why there's still so much value in showing up, specialising and building anyway.",
    category: "Frontend Development",
    date: "07/09/26",
    readTime: "13",
    featured: true,
    image: "/images/blog/face-your-frontend/face-your-frontend-display.webp",
    pageImg: "/images/blog/face-your-frontend/page-main-img.webp",
    authorImg: "/images/blog/jane-pfp.webp",
    fullDate: "9 September 2026",
    sections: [
      {
        id: "frontend-identity-crisis",
        title: "The frontend identity crisis",
        variant: "feature",
        introSpan:
          "Frontend developer, UI engineer, product engineer… what does it all even mean? There seems to be a notion that a frontend engineer isn’t a “real” software engineer. So, what is it that we do? ",
        topLeftText: [
          `There seems to be a notion that a frontend engineer isn’t a “real” software engineer. So, what is it that we do? `,

          `A frontend engineer is responsible for the implementation of user interfaces. This involves everything from integrating the required APIs to managing state and more complex behaviours. We also account for accessibility, styling,  complex components, codebase maintainability, as well as a seamless and consistent user experience.`,

          `Frontend engineering is visually rewarding. It is quite easy to point to certain features or interfaces and explain that you created that and that you made certain architectural choices to enhance user experience. So why is this field questioned so much?`,

          `There’s a subconscious complexity we ascribe to things that we can’t easily see. A user sees a button. A simple UI component they have seen millions of times. They know they can click on it, they expect something to happen when they do, and they notice hover states like the button darkening or changing colour. Perhaps the more observant user sees that the cursor changes on hover and that the button rises or falls. But what they’re definitely not thinking is: “Excellent focus management and state synchronisation!” The irony is that the better the frontend implementation, the more seamless the user experience and therefore the less the user has to think about it. So the better the team of frontend engineers, the more the complexity of their work becomes invisible.`,
        ],
        topRightText: [
          `So how does this manifest in the current job market? A lot of companies are not hiring for as many frontend vacancies as they used to. This puts us in an awkward position. If a lot of the software development roles are full-stack and the explicitly named frontend vacancies are slowly disappearing, it can raise some questions about the future of frontend engineering. “Am I even a real engineer?” “Is frontend specialisation still enough to build a stable career?” `,
        ],
        bottomRightText: [
          `This is potentially reflecting a shift towards broader engineering roles rather than the disappearance of frontend work itself.`,
          `However, when you inspect some of these roles, you find that despite them not being listed as frontend roles, they require a significant number of frontend skills like React development, CSS, JavaScript, TypeScript, API integrations and sometimes even UX design! What’s going on?.
 `,
        ],
      },
      {
        id: "full-stack-fallacy",
        title: "The full-stack fallacy",
        variant: "pullQuote",
        preQuote: [
          `Conceptually, a full-stack engineer was just considered to be someone that can do frontend and backend engineering. Essentially frontend + backend = full-stack. In a world where frontend engineers are concerned about their employability, you could ask: “Why not just learn backend engineering and become a full-stack engineer?” There seems to be the perception that full-stack engineering is a simple “upgrade” to make from frontend engineering. Just add Node.js and SQL and you’re pretty much there. We as candidates are playing this Hunger Games-style game that makes us take a short course, follow a tutorial, build a mini project, and add the skill to our CV.`,
        ],
        quote:
          "Breadth is relatively easy to acquire, but depth… that’s something special that comes with time, commitment and intentionality.",
        postQuote: [
          `A frontend engineer can easily follow an online tutorial on Node.js and build an API. But the depth of knowledge that comes from studying backend engineering would involve learning about database design, authentication, authorisation, caching, concurrency, observability, security, infrastructure, scaling, failure handling, migrations, testing and so much more.`,

          `A backend engineer can simply learn React and build a page. But does that automatically give them depth in accessibility, CSS architecture, browser APIs, rendering behaviour, responsive design, performance, complex state management and interaction design?`,

          `Breadth is an asset to any engineer. And having a breadth of knowledge should not be discouraged. Breadth comes as a result of curiosity and experience. Both of these make an engineer more valuable to their team. Breadth at the expense of depth is where the problem begins.`,

          `If one person needs to be responsible for design, frontend and backend development and cloud engineering and more, we end up with web applications that work but may not be user-friendly or fully accessible. Alternatively, we may end up with beautifully designed and fully accessible web applications that don’t handle complex data well. This puts the employee at a disadvantage. They are expected to maintain expertise on an unrealistic number of areas. They’re constantly context switching across disciplines, which gives them less time to master any of the fields. It also puts the client at a disadvantage because they may be missing out on depth that could be beneficial to them.`,

          `If you look at the current full-stack engineering roles, you’ll notice a pattern. They want you to do and be able to do EVERYTHING! When you analyse the responsibilities in full-stack engineering job descriptions, it essentially reads as a combination of frontend engineering, backend engineering, UI/UX design, cloud engineering and more. The idea of a “full-stack” is so fascinating especially when the “stack” in question keeps growing taller and taller. Which begs the question: At what point does full-stack just turn into “Please know everything about the internet?”`,
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Don't query my DOM!",
    slug: "dont-query-my-dom",
    excerpt:
      "Why React encourages us to describe what the UI should look like rather than manually finding and changing DOM elements.",
    category: "Frontend Development",
    date: "07/09/26",
    introText:
      "Why React encourages us to describe what the UI should look like rather than manually finding and changing DOM elements.",
    readTime: "13",
    featured: false,
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/images/blog/jane-pfp.webp",
    fullDate: "9 September 2026",
    sections: [],
  },
  {
    id: 3,
    title: "404: Motivation Not Found",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    category: "Frontend Development",
    introText: "On the desire to do everything",
    date: "07/09/26",
    readTime: "13",
    featured: false,
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/images/blog/jane-pfp.webp",
    fullDate: "9 September 2026",
    sections: [],
  },
  {
    id: 4,
    title: "Mind the gap!",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    category: "Frontend Development",
    date: "07/09/26",
    readTime: "13",
    featured: false,
    introText: "On the desire to do everything",
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/images/blog/jane-pfp.webp",
    fullDate: "9 September 2026",
    sections: [],
  },
  {
    id: 5,
    title: "I've got Component issues",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    category: "Frontend Development",
    date: "07/09/26",
    readTime: "13",
    featured: false,
    introText: "On the desire to do everything",
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/images/blog/jane-pfp.webp",
    fullDate: "9 September 2026",
    sections: [],
  },
  {
    id: 6,
    title: "No strings attached",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    category: "Frontend Development",
    date: "07/09/26",
    readTime: "13",
    featured: false,
    introText: "On the desire to do everything",
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/images/blog/jane-pfp.webp",
    fullDate: "9 September 2026",
    sections: [],
  },
  {
    id: 7,
    title: "Let's talk about your type",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    category: "Frontend Development",
    date: "07/09/26",
    readTime: "13",
    featured: false,
    introText: "On the desire to do everything",
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/images/blog/jane-pfp.webp",
    fullDate: "9 September 2026",
    sections: [],
  },
];
