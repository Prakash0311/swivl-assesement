import React from "react";
import { useState } from "react";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function Home(){
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
    });
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="home">
            <div className="sidebar">
                <div className="sidebar-inner">
                    <div>
                    <h1 className="board-heading">Board<span>.</span></h1>
                    <ul className="top-nav">
                        <p>Dashboard</p>
                        <p>Transactions</p>
                        <p>Schedules</p>
                        <p>Users</p>
                        <p>Settings</p>
                    </ul>
                    </div>
                    <div>
                        <ul className="top-nav">
                            <p>Help</p>
                            <p>Contact Us</p>
                        </ul>
                    </div>
                </div>
                </div>
            <div className="main">
                <div className="navbar">
                    <div className="left">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="right">
                        <div className="search">
                            <input type="text" placeholder="Search..." />
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="notification">
                            <i className="far fa-bell"></i>
                        </div>
                        <div className="user">
                            <button onClick={logout}>
                                <img src="https://lh3.googleusercontent.com/a/ACg8ocKbtSyFoJTdb3PId2Z5z7atDo-Vkl4PPz8zKYRoQIrB=s96-c" className="user-img" />
                            </button>
                        </div>
                    </div>
                    <div className="card-container">
                    <div className="card-1">
                            <p>Total Revenues</p>
                            <p>$329,725,481</p>
                            <div className="icon">
                                <i className="fad fa-money-bill"></i>
                            </div>
                        </div>
                        <div className="card-2">
                        <p>Total Tranactions</p>
                            <p>1,520</p>
                            <div className="icon">
                                <i className="far fa-tags"></i>
                            </div>
                        </div>
                        <div className="card-3">
                        <p>Total Revenues</p>
                            <p>9,721</p>
                            <div className="icon">
                                <i className="fas fa-thumbs-up"></i>
                            </div>
                        </div>
                        <div className="card-4">
                        <p>Total USers</p>
                            <p>892</p>
                            <div className="icon">
                                <i className="far fa-user-friends"></i>
                            </div>
                        </div>
                    </div>
                    <div className="Chart">
                        <div style={{ width: 700 }}>
                             <LineChart chartData={userData} />
                        </div>
                    </div>
                    <div className="stats">
                        <div className="top-product">
                            <div className="head">
                                <p>Top Product</p>
                                <select id="filteredChartDta" className="option-txt">
                                     <option value="May - June 2021">May - June 2021</option>
                                     <option value="June - June 2021">June - June 2021</option>
                                     <option value="July - June 2021">July - June 2021</option>
                                </select>
                            </div>
                            <div className="piechart">
                                <div style={{ width: 700 }}>
                                    <PieChart chartData={userData} />
                                </div>
                            </div>
                        </div>
                        <div className="schedules">
                            <div className="head">
                                <p>Today's schedules</p>
                                <p>See All 
                                    <i class="fal fa-angle-right"></i>
                                </p>
                            </div>
                            <div className="data1">
                                <p>Meeting with suppliers from Kuta Bali</p>
                                <p><i class="fas fa-clock"></i> 14.00-15.00</p>
                                <p>at Sunset Road, Kuta, Bali </p>
                            </div>
                            <div className="data2">
                                <p>Check operation at Giga Factory 1</p>
                                <p><i class="fas fa-clock"></i> 18.00-20.00</p>
                                <p>at Central Jakarta </p>
                            </div>
                        </div>
                    </div>
                    <div className="credit">
                        <a target="_blank" href="https://enally.in/projects/">Checkout More Projects</a>
                    </div>
                    <div className="credit">
                        <a target="_blank" href="https://classroombucket-v1.onrender.com/">Classroom Bucket</a>
                    </div>
                    <div className="credit">
                        <p className="credit">Copyright © 2024 Board.</p>
                    </div>
                    </div>
            </div>
        </div>
    );
}
export default Home;