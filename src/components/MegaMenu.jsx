import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "10px",
          borderTop: "1px solid #e3d8ca",
        }}
      >
        {Object.keys(menus).map((menu) => (
          <div
            key={menu}
            style={{ position: "relative" }}
            onMouseEnter={() => setActiveMenu(menu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                border: 0,
                background: "transparent",
                color: "#4a2f24",
                fontWeight: "600",
                fontSize: "13px",
                padding: "5px",
              }}
            >
              {menu}
              <ChevronDown size={14} />
            </button>

            {activeMenu === menu && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "230px",
                  padding: "15px",
                  background: "#ffffff",
                  border: "1px solid #e3d8ca",
                  boxShadow: "0 10px 30px rgba(74,47,36,0.12)",
                  zIndex: 1500,
                }}
              >
                {menus[menu].map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    style={{
                      display: "block",
                      padding: "9px 5px",
                      color: "#4a2f24",
                      fontSize: "13px",
                    }}
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
