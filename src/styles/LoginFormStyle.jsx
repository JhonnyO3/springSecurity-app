
import styled from 'styled-components';


const LoginFormStyle = styled.div`
.right-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top-right-radius: 43px;
    border-bottom-right-radius: 43px;
    box-shadow: 0px 7px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #262626;
}

.right-section-box {
    margin: 0 auto;
    width: 65%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    justify-content: center;

  
}

.header-box ul {
    margin-bottom: 1rem;
    padding: 0;
    gap: 3rem;
    list-style: none;
    display: flex;
    justify-content: center;
    font-size: 25px;
 
}

.header-box ul a {
    color: white;
    text-decoration: none;
    text-decoration-thickness: 2.5px; /* Espessura inicial */
    text-underline-offset: 2.5px; /* Espaço entre o texto e a linha */
   ;    text-decoration-thickness: 1.5px; /* Espessura inicial */

    /* Adicional: Define a cor do texto e o espaçamento entre a linha e o texto */
}

.header-box ul a:hover {
    text-decoration: underline;
    text-decoration-thickness: 2.5px; /* Espessura ao passar o mouse */
    transition: text-decoration-thickness 0.3s ease
}
.form {
    width: 100%;
}

.form form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form form input {
    padding: 0 5rem;
    height: 85px;
    background-color: #3A3A3A;
    border-style: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    text-decoration: none;
    
}
#email {
    background-image: url('/images/email.png');
    background-position: 20px ; 
    padding-left: 4.5rem;
    background-repeat: no-repeat;
}
#password {
    background-image: url('/images/lock.png');
    background-position: 20px; 
    padding-left: 4.5rem;
    background-repeat: no-repeat;
}
.form form .forgetPassword a{
    text-decoration: none;
    color: white;
    position: relative;
    top: 1rem;
}
.form form button {
    margin-top: 1.5rem;
    height: 83px;
    text-decoration: none;
    border-style: none;
    color: white;
    background: linear-gradient(135deg, #244014 0%, #76DC3B 100%);
    font-size: 20px;
    border-radius: 5px;
}
.oauth-buttons{
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

   
 

   
}

.oauth-button {
    align-items: center;
    color: white;
    font-size: 17px;
    padding: 1.2rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    border-radius: 5px;
    background-color: #3A3A3A;

}

`

export default LoginFormStyle
