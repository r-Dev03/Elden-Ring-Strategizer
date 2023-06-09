const ArmorsView = ({ res }) => {
  return (
    <section className="data-info">
      <img className="data-img" src={res.image} alt="No image available" />
      <div className="data-text">
      <p> Name: {res.name} </p>
      <p> Description: {res.description} </p>
      <p> Category: {res.category} </p>
      <p> Weight: {res.weight} </p>
      </div>
    </section>
  );
};
export default ArmorsView;
