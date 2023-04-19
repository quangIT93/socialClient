import {
  MdPeopleAlt,
  MdLocalSee,
  MdShoppingBag,
  MdGroups3,
  MdMessage,
} from "react-icons/md";

export const itemHomePage = [
  {
    itemName: "Friend",
    itemIcon: <MdPeopleAlt className="icon-item" color="#51d5c4" />,
    itemLink: "/friendPage",
  },
  {
    itemName: "Watch",
    itemIcon: <MdLocalSee className="icon-item" color="#9c38cc" />,
    itemLink: "/watchPage",
  },
  {
    itemName: "Group",
    itemIcon: <MdGroups3 className="icon-item" color="#e64d29" />,
    itemLink: "/groupPage",
  },
  {
    itemName: "Message",
    itemIcon: <MdMessage className="icon-item" color="#1b87f5" />,
    itemLink: "/messagePage",
  },
  {
    itemName: "Shopping",
    itemIcon: <MdShoppingBag className="icon-item" color="f4506d" />,
    itemLink: "/shoppingPage",
  },
];
