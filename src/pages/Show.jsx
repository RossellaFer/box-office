import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <Link to="/">Back to home</Link>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          summary={showData.summary}
          genres={showData.genres}
          rating={showData.rating}
        />
        <h2>Details</h2>
        <Details
          status={showData.status}
          network={showData.network}
          premiered={showData.premiered}
        />
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>Data is loading...</div>;
};

export default Show;
