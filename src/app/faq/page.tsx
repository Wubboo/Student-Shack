import Banner from "@/client/banner-component-mobile/banner";
import Footer from "@/client/footer-component/footer";
import "@/app/page.css";

export default function Page() {
    return (
        <div className="page-layout">
            <Banner />
            <Footer />
        </div>
    );
}
