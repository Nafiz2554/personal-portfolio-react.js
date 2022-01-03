import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured")

    const list = [

        {
            id: "featured",
            title: "Featured",

        },
        {
            id: "web",
            title: "Web App",

        },
        {
            id: "mobile",
            title: "Mobile App",

        },
        {
            id: "design",
            title: "Design",

        },
        {
            id: "content",
            title: "Content",

        },


    ];


    return (
        <div className="portfolio" id="portfolio">
            <h1>Expertise</h1>
            <ul>
             {list.map((item) => (
                 <PortfolioList 
                 title={item.title} 
                 active={selected === item.id}
                 setSelected={setSelected}
                 id={item.id}
                 />

             ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/bankingApp.jpg" alt="" />
                    <h3>Featured App</h3>
                </div>
                <div className="item">
                    <img src="assets/webApp.jpg" alt="" />
                    <h3>Web Application</h3>
                </div>
                <div className="item">
                    <img src="assets/mobileApp.jpg" alt="" />
                    <h3>Mobile Application</h3>
                </div>
                <div className="item">
                    <img src="assets/design.jpg" alt="" />
                    <h3>UI/UX Design</h3>
                </div>
                <div className="item">
                    <img src="assets/content.jpg" alt="" />
                    <h3>Content Creation</h3>
                </div>
                <div className="item">
                    <img src="assets/socialNetworking.jpg" alt="" />
                    <h3>Social Networking</h3>
                </div>
                
            </div>
            
        </div>
    )
}
