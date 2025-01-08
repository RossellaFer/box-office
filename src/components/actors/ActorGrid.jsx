import ActorCard from "./ActorCard";

const ActorGrid = ({actors}) => {
    return (
        <div>
          {actors.map(data => (
            <ActorCard
              key={data.person.id}
              name={data.person.name}
              image={data.person.image ? data.person.image.medium : '/not_found.png'}
              id={data.person.summary}
              link={data.person.url}
              birthday={data.person.birthday}
              deathday={data.person.deathday}
              country={data.person.country ? data.person.country.name : null}
              gender={data.person.gender}
            />
          ))}
        </div>
      );
  }
  
  export default ActorGrid;