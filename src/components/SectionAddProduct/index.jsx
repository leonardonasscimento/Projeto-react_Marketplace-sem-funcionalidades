import './styles.css';
import HorizontalLine from '../HorizontalLine';
import Sucesso from '../../assets/sucesso.svg';

function SectionAddProduct(){

    return (
      <div className="container-product">
        <h1>Nome da loja</h1>
        <h2>Adicionar produto</h2>

        <form>
          <label>
            <span>Nome do produto</span>

            <input
              type="text"
              style={{
                borderBottom: "1px solid #000000",
                opacity: 0.42,
              }}
            />
          </label>

          <div className="price-stock">
            <label>
              <span>Preço</span>

              <input
                type="number"
                style={{
                  borderBottom: "1px solid #000000",
                  opacity: 0.42,
                }}
                placeholder="R$"
              />
            </label>

            <label>
              <span>Estoque</span>

              <input
                type="number"
                style={{
                  borderBottom: "1px solid #000000",
                  opacity: 0.42,
                }}
                placeholder="Un"
              />
            </label>
          </div>

          <label>
            <span>Descrição do produto</span>

            <input
              type="text"
              style={{
                borderBottom: "1px solid #000000",
                opacity: 0.42,
              }}
            />
          </label>

          <label>
            <span>Imagem</span>

            <input
              type="text"
              style={{
                borderBottom: "1px solid #000000",
                opacity: 0.42,
              }}
            />
          </label>
        </form>

        <div className="line">
          <HorizontalLine />
        </div>

        <div className='cancel-add-product'>
            <span>Cancelar</span>
            <button>Adicionar produto</button>
            <button><img src={Sucesso} alt='sucesso'/>&ensp;Produto inserido com sucesso!</button>
        </div>
    </div>
    );
}

export default SectionAddProduct;