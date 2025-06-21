import CardColor from './CardColor';

const ListaCards = ({colores, borrarColor}) => {
  return (
    <article className="row gap-3 justify-content-evenly">
      {
        colores.map((item, indice)=> <CardColor nombreColor={item} key={indice} borrarColor={borrarColor}></CardColor>)
      }
    </article>
  );
};

export default ListaCards;
