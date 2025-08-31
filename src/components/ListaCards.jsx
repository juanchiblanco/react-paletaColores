import CardColor from './CardColor';

const ListaCards = ({colores, setColores}) => {
  return (
    <article className="row gap-3 justify-content-evenly">
      {
        colores.map((color)=> <CardColor color={color} key={color._id} setColores={setColores}></CardColor>)
      }
    </article>
  );
};

export default ListaCards;
