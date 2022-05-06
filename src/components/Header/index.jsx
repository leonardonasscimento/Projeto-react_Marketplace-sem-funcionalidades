import './styles.css';
import LogoMarket from '../../assets/logo-market.svg';

function Header(){

    return(
        <header>
            <img src={LogoMarket} alt='logo-market'/>
            <span>Market cubos</span>
        </header>
    );
}

export default Header;