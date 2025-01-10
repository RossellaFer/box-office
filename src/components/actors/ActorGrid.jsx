import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';
import NotFoundImageSrc from '../../lib/not_found.png';

const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          image={
            data.person.image ? data.person.image.medium : NotFoundImageSrc
          }
          id={data.person.summary}
          link={data.person.url}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          country={data.person.country ? data.person.country.name : null}
          gender={data.person.gender}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
