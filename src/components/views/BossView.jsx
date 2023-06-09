const BossView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="No image available" />
      <div className="data-text">
      <p> Name: {res.name} </p>
      <p> Region: {res.region} </p>
      <p> Location: {res.location} </p>
      <p> Description: {res.description} </p>
      <ul>
        {' '}
        Drops:{' '}
        {res.drops.map((item, index) => {
          return <li key={index}> {item} </li>;
        })}
      </ul>
      <p> Health Points: {res.healthPoints} </p>
      </div>
    </section>
  );
};
export default BossView;
