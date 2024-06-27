import SocialNetworks from "../socialNetworks/SocialNetworks";

const Foot = () => {
  return (
    <article className="container">
      <div className="d-flex flex-column flex-lg-row justify-content-evenly align-items-center">
        <section className="d-flex flex-column mt-3 order-lg-1">
          <h5>Contacto</h5>
          <p className="mb-1 fs-5">felamas@gmail.com</p>
          <p className="mb-1">381-5747112</p>
        </section>
        <section className="order-lg-3">
          <SocialNetworks />
        </section>
        <section className="order-lg-2">
          <p className="mt-2 mb-1">
            &copy; 2024 | Felix Eloy Lamas | Tucumán Argentina
          </p>
        </section>
      </div>
    </article>
  );
};

export default Foot;
