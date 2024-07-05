import BannerStyle from "../styles/BannerStyle"
import background from '../assets/background.png'


function BannerComponent() {
    return (
        <BannerStyle src={background}>
            <div className="left-box">
                <div class="left-section-box ">
                    <div class="text-box">
                        <h1>Spring Boot With <a id="oauth-title">OAuth 2.0</a>
                            <br />and <a id="jwt-title">JWT</a>
                        </h1>

                        <p>This application was made using Spring Boot 3.2
                            and contains security implementation, using de json web tokens and Oauth 2.0. </p>
                    </div>

                </div>
            </div>
        </BannerStyle>
    )
}

export default BannerComponent