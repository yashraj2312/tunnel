import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Bruce",
    lastName: "Wayne",
    username: "brucewayne",
    email: "brucewayne@gmail.com",
    password: "brucewayne123",
    bio: "I am Vengeance",
    portfolio: "https://batman.com",
    profilePic:
      "https://res.cloudinary.com/hellbat/image/upload/v1658425329/tunnel-social-media/bwpp_jjkeao.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Clark",
    lastName: "Kent",
    username: "clarkkent",
    email: "clarkkent@gmail.com",
    password: "clarkkent123",
    bio: "Look, up in the sky! It's a bird! It's a plane! It's Superman!",
    portfolio: "https://superman.com",
    profilePic:
      "https://res.cloudinary.com/hellbat/image/upload/v1658425520/tunnel-social-media/ckpp_cyerk3.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Diana",
    lastName: "Prince",
    username: "dianaprince",
    email: "dianaprince@gmail.com",
    password: "dianaprince123",
    bio: "If You Need To End A War, You Call Wonder Woman.",
    portfolio: "https://www.dccomics.com/characters/wonder-woman",
    profilePic:
      "https://res.cloudinary.com/hellbat/image/upload/v1658425845/tunnel-social-media/dpwpp_lbgkm3.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Yash",
    lastName: "Raj",
    username: "yashraj",
    email: "yashrajsrivastava2312@gmail.com",
    password: "yashraj123",
    bio: "I drive, code and travel",
    portfolio: "https://yashraj.space",
    profilePic:
      "https://res.cloudinary.com/hellbat/image/upload/v1658426011/tunnel-social-media/me4_l93qtc.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
