import BannerStyle from "../styles/BannerStyle"
import FormContainer from "../styles/FormStyle"
import BannerComponent from "./BannerComponent"
import LoginComponent from "./LoginComponent"



function LoginPage() {
    return (
        <FormContainer>
            <div class="container">
                <div className="container-card">
                    <BannerComponent />
                    <LoginComponent/>
                </div>

            </div>
        </FormContainer>
    )
}

export default LoginPage