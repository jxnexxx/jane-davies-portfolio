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
    title: "Face your frontend!",
    slug: "face-your-frontend",
    excerpt: "An exploration and defence of the field of frontend engineering",
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
    title: "Face your frontend!",
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
    title: "Face your frontend!",
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
