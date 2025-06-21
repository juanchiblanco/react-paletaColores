import CardColor from './CardColor';

const ListaCards = ({colores}) => {
  return (
    <article className="row justify-content-start gap-3">
      {
        colores.map((item, indice)=> <CardColor nombreColor={item} key={indice}></CardColor>)
      }
    </article>
  );
};

export default ListaCards;
