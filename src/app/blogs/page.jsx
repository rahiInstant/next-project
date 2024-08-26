import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Introduction to the DOM",
    author: "Jane Doe",
    date: "2024-08-18",
    content:
      "This blog post introduces the basics of the Document Object Model (DOM) and its importance in web development.",
    tags: ["DOM", "JavaScript", "Web Development"],
  },
  {
    id: 2,
    title: "Understanding DOM Nodes",
    author: "John Smith",
    date: "2024-08-19",
    content:
      "A deep dive into the different types of DOM nodes, including element nodes, text nodes, and comment nodes.",
    tags: ["DOM", "Nodes", "HTML"],
  },
  {
    id: 3,
    title: "DOM Manipulation with JavaScript",
    author: "Emily Johnson",
    date: "2024-08-20",
    content:
      "Learn how to manipulate the DOM using JavaScript to create dynamic and interactive web pages.",
    tags: ["JavaScript", "DOM", "Web Development"],
  },
  {
    id: 4,
    title: "Event Handling in the DOM",
    author: "Michael Brown",
    date: "2024-08-21",
    content:
      "This post covers how to handle events in the DOM, including click events, keypress events, and more.",
    tags: ["Events", "DOM", "JavaScript"],
  },
  {
    id: 5,
    title: "Best Practices for DOM Manipulation",
    author: "Sophia Lee",
    date: "2024-08-22",
    content:
      "Explore best practices for efficiently manipulating the DOM to ensure high performance and maintainability.",
    tags: ["DOM", "Best Practices", "Performance"],
  },
  {
    id: 6,
    title: "Working with the DOM in React",
    author: "Daniel Kim",
    date: "2024-08-23",
    content:
      "An overview of how React handles DOM manipulation and how to work with the virtual DOM.",
    tags: ["React", "DOM", "JavaScript"],
  },
  {
    id: 7,
    title: "Debugging DOM Issues",
    author: "Jessica Miller",
    date: "2024-08-24",
    content:
      "Tips and tools for debugging common DOM-related issues in web development.",
    tags: ["Debugging", "DOM", "Web Development"],
  },
  {
    id: 8,
    title: "Animating the DOM with CSS and JavaScript",
    author: "William Davis",
    date: "2024-08-25",
    content:
      "Learn how to create animations by manipulating the DOM with CSS and JavaScript.",
    tags: ["Animation", "DOM", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "DOM Security Best Practices",
    author: "Olivia Martinez",
    date: "2024-08-26",
    content:
      "This post discusses security best practices to follow when manipulating the DOM to prevent vulnerabilities.",
    tags: ["Security", "DOM", "Web Development"],
  },
  {
    id: 10,
    title: "Exploring the Shadow DOM",
    author: "Liam Wilson",
    date: "2024-08-27",
    content:
      "An introduction to the Shadow DOM and how it can be used to encapsulate styles and scripts in web components.",
    tags: ["Shadow DOM", "Web Components", "CSS"],
  },
];

const BlogPage = () => {
  return (
    <div>
      {data.map((item, id) => {
        return (
          <div key={id} className="p-2 rounded-md border space-y-2">
            <h4 className="text-lg">{item.author}</h4>
            <h2 className="text-2xl">{item.title}</h2>
            <Link
              href={`/blogs/${item.id}`}
              className="px-2 py-0.5 bg-orange-600 text-white"
            >
              Show Detail
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
