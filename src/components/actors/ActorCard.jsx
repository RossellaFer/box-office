const ActorCard = ({ name, image, birthday, deathday, country, gender }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : `No country known`}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died in ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorCard;
