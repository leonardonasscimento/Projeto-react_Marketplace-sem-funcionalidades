import './styles.css';
import Planta from '../../assets/planta.svg';

function Card(){

    return (
      <div className="card">
        <img
          src={Planta}
          alt="planta"
        />

        <div className='container-description'>
          <strong>Nome do Produto</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
          <div className="unit-price">
            <span>3 unidades</span>
            <span>R$ 99.99</span>
          </div>
        </div>
      </div>
    );
}

export default Card;