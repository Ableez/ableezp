export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  createdDate: string;
  updatedDate: string;
  content: {
    document: string;
    image?: {
      id: string;
      url: string;
      alt: string;
    }[];
  };
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we build and interact with websites.",
    author: "Ahmed Abdullahi",
    createdDate: "2023-05-21",
    updatedDate: "2023-06-01",
    content: {
      document: `
## The Future of AI in Web Development

Artificial intelligence is reshaping the landscape of web development. From **chatbots** that enhance user interactions to **automated design tools**, AI has already made a significant impact.

![AI in Web Development](https://yourcdn.com/images/ai-web-development.jpg "AI in Web Development")

In the coming years, we will likely see:
- AI-driven **personalization** of websites
- Automated **optimization** of performance
- Even **AI-generated websites** that cater to individual user preferences

Developers who embrace these technologies early will have a distinct advantage as AI continues to evolve, revolutionizing how websites are built, maintained, and optimized for user experience.
      `,
      image: [
        {
          id: "img001",
          url: "/images/ai-web-development.jpg",
          alt: "AI in Web Development",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    excerpt:
      "Learn how to leverage React Hooks to write more efficient and maintainable code in your projects.",
    author: "Ahmed Abdullahi",
    createdDate: "2023-04-12",
    updatedDate: "2023-04-20",
    content: {
      document: `
## Mastering React Hooks

React Hooks provide a powerful way to manage state and side effects in functional components. Since their introduction, hooks like **\`useState\`**, **\`useEffect\`**, and **\`useContext\`** have become essential tools for writing modern React applications.

### Key Concepts:
- **\`useState\`**: Manages state within functional components.
- **\`useEffect\`**: Handles side effects such as fetching data or subscribing to events.
- **\`useContext\`**: Simplifies the way state is shared across components.

By mastering these hooks, developers can write cleaner, more maintainable code and reduce the need for class components in React projects.
      `,
    },
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Applications",
    excerpt:
      "Discover techniques to improve the speed and responsiveness of your Next.js-powered websites.",
    author: "Ahmed Abdullahi",
    createdDate: "2023-03-08",
    updatedDate: "2023-03-10",
    content: {
      document: `
## Optimizing Performance in Next.js Applications

Next.js offers powerful out-of-the-box performance features such as **server-side rendering (SSR)**, **static site generation (SSG)**, and **image optimization**.

![Next.js Performance Optimization](https://yourcdn.com/images/nextjs-performance.jpg "Next.js Performance Optimization")

Here are a few tips to make the most of these:

1. **Use Static Generation**: For pages that don’t change frequently, use **SSG** to pre-render content at build time.
2. **Optimize Images**: Leverage Next.js’s **\`next/image\`** component to automatically serve optimized images.
3. **Lazy Loading**: Lazy load components and images that aren’t immediately visible to improve initial load times.

By focusing on these performance optimizations, you can ensure that your Next.js applications are fast and responsive, delivering a better experience for your users.
      `,
      image: [
        {
          id: "img002",
          url: "/images/nextjs-performance.jpg",
          alt: "Next.js Performance Optimization",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Understanding TypeScript Generics",
    excerpt:
      "A deep dive into generics in TypeScript and how they can make your code more flexible and reusable.",
    author: "Ahmed Abdullahi, John Doe",
    createdDate: "2023-02-01",
    updatedDate: "2023-02-15",
    content: {
      document: `
## Understanding TypeScript Generics

Generics in TypeScript allow you to create functions and components that work with a variety of types while still maintaining **type safety**. Here’s an example:

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}
\`\`\`

### Why Use Generics?
- **Reusability**: You can write more flexible functions.
- **Type Safety**: It helps avoid using \`any\` and gives you better control over the types in your app.

![TypeScript Generics](https://yourcdn.com/images/typescript-generics.jpg "TypeScript Generics")

Generics are an essential feature of TypeScript and a must-learn for any developer aiming to write cleaner, reusable, and type-safe code.
      `,
      image: [
        {
          id: "img003",
          url: "/images/typescript-generics.jpg",
          alt: "TypeScript Generics",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js",
    excerpt:
      "Best practices for designing and building scalable, high-performance APIs using Node.js and Express.",
    author: "Ahmed Abdullahi",
    createdDate: "2023-01-20",
    updatedDate: "2023-01-28",
    content: {
      document: `
## Building Scalable APIs with Node.js

Node.js is an excellent choice for building **high-performance APIs**, but it’s important to follow best practices for scalability:

- **Use Asynchronous Code**: Always make use of asynchronous code and **non-blocking I/O** to handle concurrent requests efficiently.
- **Optimize Database Queries**: Use **caching** and **pagination** to reduce the load on your database.
- **Load Balancing**: For high traffic, consider using **load balancing** and running your API across multiple instances.

![Node.js API Scaling](https://yourcdn.com/images/nodejs-api-scaling.jpg "Node.js API Scaling")

These practices help ensure your Node.js APIs can scale with user demand, offering reliable and fast service under heavy loads.
      `,
    },
  },
  {
    id: 6,
    title: "State Management in React: Context API vs Redux",
    excerpt:
      "Compare the Context API and Redux for state management in React applications and when to use each.",
    author: "Ahmed Abdullahi, Jane Smith",
    createdDate: "2023-02-12",
    updatedDate: "2023-02-18",
    content: {
      document: `
## State Management in React: Context API vs Redux

When it comes to managing state in React, two popular options are **Context API** and **Redux**. Here's a comparison:

### Context API:
- **Best for**: Local state sharing across components.
- **Pros**: Simpler and built-in to React.
- **Cons**: Not optimized for large-scale state management.

### Redux:
- **Best for**: Complex applications with **global state**.
- **Pros**: Scalable, good for debugging with DevTools.
- **Cons**: Can be more verbose and require extra setup.

![React State Management](https://yourcdn.com/images/react-state-management.jpg "React State Management")

Choosing the right state management solution depends on your app’s complexity and requirements.
      `,
      image: [
        {
          id: "img004",
          url: "/images/react-state-management.jpg",
          alt: "React State Management",
        },
      ],
    },
  },

  {
    id: 7,
    title: "Serverless Architecture: The Future of Backend Development",
    excerpt:
      "An introduction to serverless architecture and how it can simplify and scale backend systems.",
    author: "Ahmed Abdullahi",
    createdDate: "2023-06-15",
    updatedDate: "2023-06-18",
    content: {
      document: `
## Serverless Architecture: The Future of Backend Development

Serverless architecture is transforming how we build and deploy applications by removing the need to manage infrastructure. With **AWS Lambda**, **Google Cloud Functions**, and **Azure Functions**, you can write your backend code without worrying about servers.

### Benefits:
- **Scalability**: Serverless automatically scales with demand.
- **Cost-Effective**: Pay only for the time your code is executed.
- **Simplified Deployment**: No server setup, just deploy functions.

![Serverless Architecture](https://yourcdn.com/images/serverless-architecture.jpg "Serverless Architecture")

Adopting serverless architecture allows you to focus on writing code while the platform handles the scaling, patching, and server management.
      `,
      image: [
        {
          id: "img005",
          url: "/images/serverless-architecture.jpg",
          alt: "Serverless Architecture",
        },
      ],
    },
  },
  {
    id: 8,
    title: "The Power of CSS Grid and Flexbox",
    excerpt:
      "Learn how to use CSS Grid and Flexbox to create responsive and modern layouts for your websites.",
    author: "Ahmed Abdullahi",
    createdDate: "2023-07-10",
    updatedDate: "2023-07-15",
    content: {
      document: `
## The Power of CSS Grid and Flexbox

CSS Grid and Flexbox are two powerful layout modules that revolutionized the way developers structure web layouts. With these tools, you can create responsive, grid-based layouts without relying on external frameworks.

### Flexbox:
- Ideal for single-dimensional layouts (rows or columns).
- Provides easy alignment and distribution of space.

### Grid:
- Best for two-dimensional layouts (rows and columns).
- Allows precise control over the placement of elements.

![CSS Grid](https://yourcdn.com/images/css-grid.jpg "CSS Grid Layout")

By combining **CSS Grid** and **Flexbox**, you can design responsive, modern websites that are visually appealing and functional.
      `,
      image: [
        {
          id: "img006",
          url: "/images/css-grid.jpg",
          alt: "CSS Grid Layout",
        },
      ],
    },
  },
  {
    id: 9,
    title: "Introduction to Progressive Web Apps (PWAs)",
    excerpt:
      "Explore how PWAs combine the best of web and mobile apps to deliver a superior user experience.",
    author: "Ahmed Abdullahi",
    createdDate: "2023-08-05",
    updatedDate: "2023-08-10",
    content: {
      document: `
## Introduction to Progressive Web Apps (PWAs)

Progressive Web Apps (PWAs) are web applications that use modern web capabilities to provide an app-like experience. They can be installed on a user's device and work offline, providing a more seamless experience compared to traditional websites.

### Key Features:
- **Offline Support**: PWAs use service workers to cache assets and data.
- **App-Like Feel**: PWAs can be added to the home screen and run in full-screen mode.
- **Performance**: Optimized for speed and reliability.

![PWA Example](https://yourcdn.com/images/pwa-example.jpg "PWA Example")

PWAs offer a compelling solution for businesses that want the reach of the web combined with the engagement of native apps.
      `,
      image: [
        {
          id: "img007",
          url: "/images/pwa-example.jpg",
          alt: "PWA Example",
        },
      ],
    },
  },
  {
    id: 10,
    title: "Microservices vs Monolithic Architecture: Pros and Cons",
    excerpt:
      "A detailed comparison between microservices and monolithic architectures for building scalable applications.",
    author: "Ahmed Abdullahi, Sarah Lee",
    createdDate: "2023-09-01",
    updatedDate: "2023-09-05",
    content: {
      document: `
## Microservices vs Monolithic Architecture: Pros and Cons

When designing a scalable application, you often have to choose between **microservices** and a **monolithic** architecture. Each has its advantages and drawbacks:

### Monolithic:
- **Pros**: Easier to develop, simpler to test.
- **Cons**: Harder to scale as the application grows.

### Microservices:
- **Pros**: Independent services that can scale individually.
- **Cons**: More complex to manage, requires good infrastructure.

![Microservices Architecture](https://yourcdn.com/images/microservices.jpg "Microservices Architecture")

Choosing the right architecture depends on your project size, team structure, and long-term goals.
      `,
      image: [
        {
          id: "img008",
          url: "/images/microservices.jpg",
          alt: "Microservices Architecture",
        },
      ],
    },
  },
  {
    id: 11,
    title: "The Rise of JAMstack: Building Modern Web Applications",
    excerpt:
      "Understand how JAMstack is changing the way we develop web applications by decoupling the frontend and backend.",
    author: "Ahmed Abdullahi",
    createdDate: "2023-09-20",
    updatedDate: "2023-09-22",
    content: {
      document: `
## The Rise of JAMstack: Building Modern Web Applications

JAMstack stands for **JavaScript**, **APIs**, and **Markup**, a modern architecture that separates the frontend from the backend. This decoupling provides better performance, scalability, and security.

### Key Components:
- **JavaScript**: Handles dynamic content on the client side.
- **APIs**: Connects to backend services for data and functionality.
- **Markup**: Pre-built HTML, often generated by static site generators.

![JAMstack Architecture](https://yourcdn.com/images/jamstack.jpg "JAMstack Architecture")

JAMstack is becoming the preferred architecture for modern web applications due to its speed, scalability, and developer-friendly workflow.
      `,
      image: [
        {
          id: "img009",
          url: "/images/jamstack.jpg",
          alt: "JAMstack Architecture",
        },
      ],
    },
  },
  {
    id: 12,
    title: "GraphQL vs REST: Choosing the Right API for Your Application",
    excerpt:
      "A side-by-side comparison of GraphQL and REST, and when to choose one over the other for your APIs.",
    author: "Ahmed Abdullahi, Lisa Wong",
    createdDate: "2023-10-02",
    updatedDate: "2023-10-05",
    content: {
      document: `
## GraphQL vs REST: Choosing the Right API for Your Application

Both **GraphQL** and **REST** are popular API technologies, but they take very different approaches to data fetching:

### REST:
- **Pros**: Simpler, great for traditional CRUD operations.
- **Cons**: Can lead to over-fetching or under-fetching of data.

### GraphQL:
- **Pros**: Allows clients to specify exactly what data they need.
- **Cons**: More complex to set up and learn.

![GraphQL vs REST](https://yourcdn.com/images/graphql-rest.jpg "GraphQL vs REST")

When choosing between GraphQL and REST, consider the complexity of your data and how much control your clients need over their data queries.
      `,
      image: [
        {
          id: "img010",
          url: "/images/graphql-rest.jpg",
          alt: "GraphQL vs REST",
        },
      ],
    },
  },
];
