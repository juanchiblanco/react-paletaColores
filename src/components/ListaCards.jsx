import CardColor from './CardColor';

const ListaCards = ({colores}) => {
  return (
    <article className="row gap-3 justify-content-evenly">
      {
        colores.map((item, indice)=> <CardColor nombreColor={item} key={indice}></CardColor>)
      }
    </article>
  );
};

export default ListaCards;
