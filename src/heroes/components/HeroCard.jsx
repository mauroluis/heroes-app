export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const herourl = `/assets/heroes/${id}.jpg`;
  return (
    <div className='col'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src='' className='card-img' alt={superhero} />
          </div>
        </div>
      </div>
    </div>
  );
};
