
import styled from 'styled-components';

const BannerStyle = styled.div`

.left-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${props => props.src}); 
    background-size: cover;
    background-repeat: no-repeat; 
    background-position: center; 
    border-top-left-radius: 43px;
    border-bottom-left-radius: 43px;
    box-shadow: 0px 7px 4px 0px rgba(0, 0, 0, 0.25);

}
.left-section-box {
    margin: 0 auto;
    background-color: rgb(31, 33, 35, 34%);
    height: 50%;
    max-width: 40%;
    padding-left: 2rem;
    padding-bottom: 12rem;
    padding-right: 2rem;
    padding-top: 4rem;
    border-radius: 20px;
    justify-content: center;
  
}

.text-box {
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.text-box #oauth-title {
    background: linear-gradient(to right, #477D2E 0%, #24FF00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.text-box h1{
    font-size: 45px;
    color: white;
}
.text-box p {
    font-size: 27px;
    color: white;
}

`

export default BannerStyle


