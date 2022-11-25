import React from "react";
import classnames from "classnames";
import { useLocation, useParams, Link } from "react-router-dom";

function Tab(props) {
  const { id } = useParams();

  return (
    <Link to={`/restaurant/${id}/${props.route}`}>
      <div
        className={classnames("text-gray-500 relative font-semibold", {
          "text-zomato-400 ": props.isActive,
        })}
      >
        <h3 className="text-lg md:text-xl">{props.title}</h3>
      </div>
    </Link>
  );
}

function Tabs() {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    {
      title: "Overview",
      route: "overview",
      isActive: currentPath.includes("overview"),
    },
    {
      title: "Order Online",
      route: "order-online",
      isActive: currentPath.includes("order-online"),
    },
    {
      title: "Reviews",
      route: "reviews",
      isActive: currentPath.includes("reviews"),
    },
    {
      title: "Menu",
      route: "menu",
      isActive: currentPath.includes("menu"),
    },
    {
      title: "Photos",
      route: "photos",
      isActive: currentPath.includes("photos"),
    },
  ];

  return (
    <>
      <div className="flex relative items-center pb-4 gap-8 md:gap-20 overflow-x-scroll lg:overflow-auto border-b-2">
        {tabs.map((tab, index) => (
          <Tab {...tab} key={index} />
        ))}
      </div>
    </>
  );
}

export default Tabs;
