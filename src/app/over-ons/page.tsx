import Banner from "@/client/banner-component-mobile/banner";
import "@/app/page.css";
import Footer from "@/client/footer-component/footer";
import OverOns from "@/client/over-ons-mobile/over-ons";

export default function Page() {
    return (
        <div className="page-layout">
            <Banner />
            <OverOns />
            <Footer />
        </div>
    );
}
