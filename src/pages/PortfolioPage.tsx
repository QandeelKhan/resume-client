import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import "./portfolio-detail.css";
import "../pages/portfolio.css";
import GridItem from "../components/GridItem";
import { gridItems, tabs } from "../components/GridItems";
import { useNavigate } from "react-router-dom";

const PortfolioPage: React.FC = (props: any) => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        900: 2,
        700: 1,
    };

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/portfolio-detail");
    };

    // tabs
    const [selectedTab, setSelectedTab] = useState("ALL");

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        setTimeout(() => {
            setSelectedTab(tab);
        }, 1000);
    };

    const filteredItems = gridItems.filter((item) => {
        if (selectedTab === "ALL") {
            return true;
        } else {
            return item.category === selectedTab;
        }
    });

    // useEffect(() => {
    //     handleTabClick();
    // }, []);

    return (
        <div className="projects-area">
            <div className="menu-div">
                <ul>
                    {tabs.map((tab, index) => (
                        <li
                            key={index}
                            onClick={() => handleTabClick(tab)}
                            className={`tabs ${
                                selectedTab === tab ? "active" : ""
                            }`}
                            style={{
                                color: selectedTab === tab ? "black" : "white",
                            }}
                        >
                            <div>{tab}</div>
                        </li>
                    ))}
                </ul>
            </div>
            <Masonry
                className="masonry-grid"
                columnClassName="masonry-grid_column"
                breakpointCols={breakpointColumnsObj}
            >
                {filteredItems.map((item, index) => (
                    <GridItem
                        key={index}
                        navigateTo={handleNavigate}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        category={item.category}
                        icon={<i className={item.icon}></i>}
                        alt={item.title}
                    />
                ))}
            </Masonry>
        </div>
    );
};

export default PortfolioPage;
