const Details = ({ status, network, premiered }) => {
  return (
    <div>
      <p>Status: {status}</p>
      <p>
        Premiered {premiered} {!!network && `on ${network.name}`}
      </p>
    </div>
  );
};

export default Details;
