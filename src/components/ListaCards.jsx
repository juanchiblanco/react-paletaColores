import CardColor from './CardColor';

const ListaCards = ({colores}) => {
  return (
    <article className="row gap-3 justify-content-evenly">
      {
        colores.map((color)=> <CardColor nombreColor={color.inputColor} key={color._id}></CardColor>)
      }
    </article>
  );
};

export default ListaCards;
