export interface Author {
  name: string;
  slug: string;
  avatar: string;
  bio: string;
  role: string;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage: string;
  readTime: string;
  categories: Category[];
  author: Author;
}

const AUTHOR_PRITAM: Author = {
  name: "Pritam Chatterjee",
  slug: "pritam-chatterjee",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  bio: "Pritam Chatterjee is a seasoned SEO Specialist & Digital Marketing Consultant with 5+ years of experience helping businesses scale their organic visibility, maximize ROI on ad spend, and build high-converting web applications.",
  role: "Founder & Chief SEO Consultant",
};

const MOCK_CATEGORIES: Category[] = [
  { name: "Search Engine Optimization", slug: "seo" },
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "Pay Per Click (PPC)", slug: "ppc" },
  { name: "Web Development", slug: "web-development" },
];

const MOCK_POSTS: Post[] = [
  {
    title: "The Ultimate Guide to Technical SEO in 2026: Cracking next-gen Search Algorithms",
    slug: "ultimate-guide-technical-seo-2026",
    excerpt: "Discover the critical technical SEO check-ins for Next.js and modern JavaScript frameworks. Learn how Core Web Vitals, Crawl Budget, and Schema structures influence your rankings.",
    content: `
      <h2>Why Technical SEO is the foundation of digital growth</h2>
      <p>In 2026, search engines are smarter, faster, and more user-centric than ever. Simply writing high-quality content is no longer enough to secure the top spots on Google. Your website's underlying code, performance metrics, and semantic markup dictate how search spiders crawl, index, and understand your brand.</p>
      
      <h3>1. Core Web Vitals: The new baseline for user experience</h3>
      <p>Google's emphasis on user experience has crystallized into three primary metrics: <strong>Largest Contentful Paint (LCP)</strong>, <strong>Cumulative Layout Shift (CLS)</strong>, and the newly established <strong>Interaction to Next Paint (INP)</strong>. Optimizing these requires a deep dive into asset compression, server-side execution speed, and avoiding render-blocking scripts.</p>
      <blockquote>A 100ms improvement in site speed can translate to a 10% increase in conversions, particularly for e-commerce platforms.</blockquote>

      <h3>2. Crawl Efficiency & JS SSR Hydration</h3>
      <p>Modern applications built on Next.js or Nuxt must utilize Static Site Generation (SSG) or Server-Side Rendering (SSR) strategically. Search bots index pages faster when HTML is fully rendered on the server, avoiding the delayed second pass associated with client-side hydration.</p>

      <h3>3. Advanced Schema Markup & Entities</h3>
      <p>Implementing basic article schemas is table stakes. To truly dominate search results, you must inject linked entity schemas that map relationships between your authors, services, local landmarks, and parent companies. This builds a semantic graph that search engines use to serve answer cards and AI search briefs.</p>
    `,
    date: "2026-07-15",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read",
    categories: [MOCK_CATEGORIES[0], MOCK_CATEGORIES[1]],
    author: AUTHOR_PRITAM,
  },
  {
    title: "How to Build High-Converting Google & Facebook Ads Campaigns from Scratch",
    slug: "high-converting-google-facebook-ads",
    excerpt: "Stop wasting money on bad ad targeting. Read this step-by-step strategy to align search keyword intent with social proof structures to triple your qualified lead flow.",
    content: `
      <h2>The Advertising Paradigm of 2026: Multi-Touch Intent Matching</h2>
      <p>Running isolated Facebook campaigns or single-keyword Google Ad groups is a relic of the past. Today's buyer journey is complex and multi-channel. To convert high-intent buyers, you must build a unified funnel where Google captures intent, and Facebook nurtures and drives conversions.</p>

      <h3>Phase 1: Capturing High-Intent Search Traffic (Google Ads)</h3>
      <p>When someone searches "Technical SEO Specialist in Kolkata", they are ready to buy. Your search ad must present a compelling, exact-match headline coupled with clear sitelink extensions. Avoid bidding on overly broad keywords—focus instead on high-intent long-tail phrases that indicate budget and readiness.</p>
      <ul>
        <li><strong>Focus:</strong> Exact Match and Phrase Match over Broad Match.</li>
        <li><strong>Ad Copy:</strong> Call out the primary conversion benefit (e.g., "Increase Leads by 287%").</li>
        <li><strong>Landing Pages:</strong> Match the ad copy perfectly to avoid bounce rate friction.</li>
      </ul>

      <h3>Phase 2: Social Proof Retargeting (Facebook & Instagram Ads)</h3>
      <p>A user visits your landing page from Google but doesn't convert immediately. Rather than losing them forever, we deploy a Facebook custom audience pixel. Over the next 7 days, they see dynamic testimonials, video case studies, and brief breakdowns of Pritam Chatterjee's successful digital campaigns.</p>
    `,
    date: "2026-07-10",
    featuredImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read",
    categories: [MOCK_CATEGORIES[2], MOCK_CATEGORIES[1]],
    author: AUTHOR_PRITAM,
  },
  {
    title: "Why Custom Web Development Outperforms WordPress Templates for B2B Growth",
    slug: "custom-web-development-vs-wordpress-templates",
    excerpt: "Templated WordPress websites slow down your loading times and harm your conversion rates. Compare the direct business benefits of Jamstack, Next.js, and headless integrations.",
    content: `
      <h2>Speed, Scalability, and Security: The Case for Next-Gen Frontends</h2>
      <p>Many digital agencies deploy heavy WordPress themes loaded with excess page builders and plugins. While simple to launch, these sites suffer from high Cumulative Layout Shift (CLS), bloated page sizes, and severe security vulnerabilities. For professional firms, custom Jamstack frontends are the gold standard.</p>

      <h3>1. Extreme Performance and Instant Page Transitions</h3>
      <p>Static and server-rendered sites serve pre-built HTML files directly from a Content Delivery Network (CDN) edge node. This reduces Time to First Byte (TTFB) to milliseconds. In comparison, standard database-driven WordPress websites take seconds to execute SQL queries and render templates.</p>

      <h3>2. Complete Design Freedom</h3>
      <p>By untying the frontend from generic builders, designers can build interactive 3D components, smooth GSAP parallax timelines, and bespoke scroll-driven page flows that feel premium and modern—instantly positioning the consultant as a high-end authority.</p>
    `,
    date: "2026-07-02",
    featuredImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min read",
    categories: [MOCK_CATEGORIES[3], MOCK_CATEGORIES[0]],
    author: AUTHOR_PRITAM,
  }
];

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

async function fetchGraphQL(query: string, variables: Record<string, any> = {}) {
  if (!WP_API_URL) {
    throw new Error("WordPress API URL is not set");
  }

  const res = await fetch(WP_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error("Failed to fetch API from WordPress GraphQL");
  }

  return json.data;
}

export async function getAllPosts(): Promise<Post[]> {
  if (!WP_API_URL) {
    return MOCK_POSTS;
  }

  try {
    const data = await fetchGraphQL(`
      query GetAllPosts {
        posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
          nodes {
            title
            slug
            excerpt
            content
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            author {
              node {
                name
                slug
                avatar {
                  url
                }
                description
              }
            }
          }
        }
      }
    `);

    return data.posts.nodes.map((post: any) => ({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt?.replace(/<[^>]*>/g, "") || "",
      content: post.content,
      date: post.date.split("T")[0],
      featuredImage: post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      categories: post.categories?.nodes || [],
      author: {
        name: post.author?.node?.name || AUTHOR_PRITAM.name,
        slug: post.author?.node?.slug || AUTHOR_PRITAM.slug,
        avatar: post.author?.node?.avatar?.url || AUTHOR_PRITAM.avatar,
        bio: post.author?.node?.description || AUTHOR_PRITAM.bio,
        role: "Digital Specialist",
      },
    }));
  } catch (error) {
    console.warn("WPGraphQL Fetch failed. Falling back to mock data. Error:", error);
    return MOCK_POSTS;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!WP_API_URL) {
    const match = MOCK_POSTS.find((p) => p.slug === slug);
    return match || null;
  }

  try {
    const data = await fetchGraphQL(`
      query GetPostBySlug($id: ID!) {
        post(id: $id, idType: SLUG) {
          title
          slug
          excerpt
          content
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              name
              slug
              avatar {
                url
              }
              description
            }
          }
        }
      }
    `, { id: slug });

    if (!data.post) return null;

    const post = data.post;
    return {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt?.replace(/<[^>]*>/g, "") || "",
      content: post.content,
      date: post.date.split("T")[0],
      featuredImage: post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min read",
      categories: post.categories?.nodes || [],
      author: {
        name: post.author?.node?.name || AUTHOR_PRITAM.name,
        slug: post.author?.node?.slug || AUTHOR_PRITAM.slug,
        avatar: post.author?.node?.avatar?.url || AUTHOR_PRITAM.avatar,
        bio: post.author?.node?.description || AUTHOR_PRITAM.bio,
        role: "Digital Specialist",
      },
    };
  } catch (error) {
    console.warn("WPGraphQL Fetch failed. Falling back to mock data. Error:", error);
    const match = MOCK_POSTS.find((p) => p.slug === slug);
    return match || null;
  }
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.categories.some((cat) => cat.slug === categorySlug));
}

export async function getPostsByAuthor(authorSlug: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.author.slug === authorSlug);
}

export async function getAllCategories(): Promise<Category[]> {
  if (!WP_API_URL) {
    return MOCK_CATEGORIES;
  }

  try {
    const data = await fetchGraphQL(`
      query GetAllCategories {
        categories(first: 20) {
          nodes {
            name
            slug
          }
        }
      }
    `);
    return data.categories.nodes;
  } catch (error) {
    return MOCK_CATEGORIES;
  }
}
