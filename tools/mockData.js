const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "Java Programming",
    slug: "core java",
    authorId: 1,
    category: "Java"
  }
];

const authors = [
  {
    id: 1,
    name: "Nitesh Rajput"
  },
  {
    id: 2,
    name: "Aadhya Rajput"
  },
  {
    id: 3,
    name: "Suchitra Rajput"
  }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

module.exports = {
  newCourse,
  courses,
  authors
};
