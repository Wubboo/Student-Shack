import { SignUpForm } from "@/client/auth-forms/form";
import Banner from "@/client/banner-component-mobile/banner";
import "@/app/page.css";
import Footer from "@/client/footer-component/footer";

export default function Page() {
    return (
        <div className="page-layout">
            <Banner />
            <SignupForm />
            <Footer />
        </div>
    );
}
