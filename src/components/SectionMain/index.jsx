import './styles.css';
import Card from '../Card';
import {products} from '../../data';
import HorizontalLine from '../HorizontalLine';

function SectionMain(){

    return (
      <div className='container-section'>
        <h1>Nome da loja</h1>

        <div className="subtitle-button">
          <h2>Seus produtos</h2>
          <button>Adicionar produto</button>
        </div>

        <div className="container-cards">
          {products.map(() => (
            <Card />
          ))}
        </div>

        <HorizontalLine/>
      </div>
    );
}

export default SectionMain;