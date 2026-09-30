import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "./MegaMenu.css";

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = {
    Women: [
      { name: "All Women", link: "/women" },
      { name: "Sarees", link: "/category?type=sarees" },
      { name: "Kurtas", link: "/category?type=kurtas" },
      { name: "Kurta Sets", link: "/category?type=kurta-sets" },
      { name: "Lehengas", link: "/category?type=lehengas" },
      { name: "Dresses", link: "/category?type=dresses" },
    ],

    Men: [
      { name: "All Men", link: "/men" },
      { name: "Kurtas", link: "/category?type=men-kurtas" },
      { name: "Kurta Sets", link: "/category?type=men-kurta-sets" },
      { name: "Nehru Jackets", link: "/category?type=nehru-jackets" },
      { name: "Sherwanis", link: "/category?type=sherwanis" },
    ],

    Kids: [
      { name: "Boys", link: "/boys" },
      { name: "Girls", link: "/girls" },
      { name: "Boys Kurtas", link: "/category?type=boys-kurtas" },
      { name: "Girls Lehengas", link: "/category?type=girls-lehengas" },
      { name: "Festive Kidswear", link: "/collections" },
    ],

    Accessories: [
      { name: "All Accessories", link: "/accessories" },
      { name: "Jewellery", link: "/category?type=jewellery" },
      { name: "Bags", link: "/category?type=bags" },
      { name: "Dupattas", link: "/category?type=dupattas" },
      { name: "Hair Accessories", link: "/category?type=hair-accessories" },
    ],
  };

  return (
    <div className="mega-menu-wrapper">
      <div className="mega-menu-bar">
        {Object.keys(menus).map((menu) => (
          <div
            key={menu}
            className="mega-menu-item"
            onMouseEnter={() => setActiveMenu(menu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              className={`mega-menu-button ${activeMenu === menu ? "active" : ""}`}
            >
              {menu}
              <ChevronDown size={14} />
            </button>

            {activeMenu === menu && (
              <div className="mega-menu-dropdown">
                {menus[menu].map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="mega-menu-link"
                    onClick={() => setActiveMenu(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
