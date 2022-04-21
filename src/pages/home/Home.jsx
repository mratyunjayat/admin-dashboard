import Chart from "../../components/charts/chart/Chart";
import Featured from "../../components/charts/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Tabled from "../../components/table/Table";
import Widget from "../../components/widgets/Widget";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order"/>
                    <Widget type="earnings"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Tabled/>
                </div>
            </div>
        </div>
    )
}

export default Home