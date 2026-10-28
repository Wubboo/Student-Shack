import "./page.css";
import Banner from "../client/banner-component-mobile/banner";
import Footer from "@/client/footer-component/footer";

function App() {
    return (
        <div className="page-layout">
            <Banner />
            <Footer />
        </div>
    );
}

export default App;
