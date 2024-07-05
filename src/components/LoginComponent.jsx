
import LoginFormStyle from "../styles/LoginFormStyle"



function LoginComponent() {
    return (
        <LoginFormStyle>
            <div class="right-box">
                <div class="right-section-box">
                    <div className="header-box">
                        <ul>
                            <li><a href="/login.html">Login</a></li>
                            <li><a href="/cadastro.html">cadastro</a></li>
                        </ul>
                    </div>
                    <div className="form">
                        <form action="submit" method="post">
                            <input type="text" name="email" id="email" placeholder="Email" />
                            <input type="text" name="email" id="email" placeholder="Email" />
                            <div class="forgetPassword">
                                <a href="/login.html">Esqueci minha senha</a>
                            </div>
                            <button id="submitButton">Login</button>
                        </form>
                    </div>
                    <div class="oauth-buttons">
                        <div class="oauth-button">
                            <img src="./assets/google.svg" alt="" />
                            <p>Sign in with Google</p>
                        </div>
                        <div class="oauth-button">
                            <img src="./assets/github.png" alt="" />
                            <p>Sign in with Github</p>
                        </div>
                    </div>
                </div>

            </div>
        </LoginFormStyle>
    )
}

export default LoginComponent