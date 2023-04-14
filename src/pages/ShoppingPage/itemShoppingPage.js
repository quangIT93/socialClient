import {
  MdPeopleAlt,
  MdLocalSee,
  MdShoppingBag,
  MdGroups3,
  MdMessage,
} from "react-icons/md";

export const itemShoppingPage = [
  {
    itemName: "Trang chủ",
    itemIcon: <MdPeopleAlt className="icon-item" color="#51d5c4" />,
    itemLink: "/homePage",
  },
  {
    itemName: "Tất cả của hàng",
    itemIcon: <MdLocalSee className="icon-item" color="#9c38cc" />,
    itemLink: "/watchPage",
  },
  {
    itemName: "Của hàng đã follow",
    itemIcon: <MdGroups3 className="icon-item" color="#e64d29" />,
    itemLink: "/groupPage",
  },
  {
    itemName: "Mua bán xe",
    itemIcon: <MdMessage className="icon-item" color="#1b87f5" />,
    itemLink: "/messagePage",
  },
  {
    itemName: "Mua bán điện tử",
    itemIcon: <MdShoppingBag className="icon-item" color="f4506d" />,
    itemLink: "/shoppingPage",
  },
  {
    itemName: "Nhà/khách sạn",
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
