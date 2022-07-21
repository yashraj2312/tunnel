import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Yash has a great product sense alongwith awesome coding skills.",
    likes: {
      likeCount: 45,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Clark",
    lastName: "Kent",
    username: "clarkkent",
    profilePic:
      "https://res.cloudinary.com/hellbat/image/upload/v1658425520/tunnel-social-media/ckpp_cyerk3.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "yashraj",
        text: "Thanks Clark",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Yash loves to discuss tech ecosystem, it's insights and how the industry runs. He researchs around various strategies, concepts adopted by companies and present them in insightful articles in his blog",
    likes: {
      likeCount: 21,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Diana",
    lastName: "Prince",
    username: "dianaprince",
    profilePic:
      "https://res.cloudinary.com/hellbat/image/upload/v1658426742/tunnel-social-media/wwpp_epyjnh.jpg",
    comments: [
      {
        _id: uuid(),
        username: "brucewayne",
        text: "Would love to make him part of our team",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-03-23T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I am a Developer based in Bangalore, India who loves working around different technologies taking the tech industry by storm. Looking forward to collaborate with awesome Devs and yeah, PMs too :p",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Yash",
    lastName: "Raj",
    username: "yashraj",
    profilePic:
      "https://res.cloudinary.com/hellbat/image/upload/v1658426267/tunnel-social-media/yrpp_a1q7jg.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "brucewayne",
        text: "I approve.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "clarkkent",
        text: "I like your portfolio!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    content: "Checkout yashraj.space to know what yash is upto",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Bruce",
    lastName: "Wayne",
    username: "brucewayne",
    profilePic:
      "https://res.cloudinary.com/hellbat/image/upload/v1658425329/tunnel-social-media/bwpp_jjkeao.jpg",
    createdAt: "2022-04-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [],
  },
];
