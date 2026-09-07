export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
  authorImg: string;
  introText: string;
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
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/jane.webp",
  },

  {
    id: 2,
    title: "Don't query my DOM!",
    slug: "dont-query-my-dom",
    excerpt:
      "Why React encourages us to describe what the UI should look like rather than manually finding and changing DOM elements.",
    category: "Frontend Development",
    date: "07/09/26",
    introText: "On the desire to do everything",
    readTime: "13 min read",
    featured: false,
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/jane.webp",
  },
  {
    id: 3,
    title: "404: Motivation Not Found",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    category: "Frontend Development",
    introText: "On the desire to do everything",
    date: "07/09/26",
    readTime: "13 min read",
    featured: false,
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/jane.webp",
  },
  {
    id: 4,
    title: "Mind the gap!",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    category: "Frontend Development",
    date: "07/09/26",
    readTime: "13 min read",
    featured: false,
    introText: "On the desire to do everything",
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/jane.webp",
  },
  {
    id: 5,
    title: "I've got Component issues",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    category: "Frontend Development",
    date: "07/09/26",
    readTime: "13 min read",
    featured: false,
    introText: "On the desire to do everything",
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/jane.webp",
  },
  {
    id: 6,
    title: "No strings attached",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    category: "Frontend Development",
    date: "07/09/26",
    readTime: "13 min read",
    featured: false,
    introText: "On the desire to do everything",
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/jane.webp",
  },
  {
    id: 7,
    title: "Let's talk about your type",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
    category: "Frontend Development",
    date: "07/09/26",
    readTime: "13 min read",
    featured: false,
    introText: "On the desire to do everything",
    image: "/images/blog/face-your-frontend.webp",
    authorImg: "/jane.webp",
  },
];
