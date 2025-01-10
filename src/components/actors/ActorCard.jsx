import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorCard = ({ name, image, birthday, deathday, country, gender }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : `No country known`}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died in ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};

export default ActorCard;
