export default function Thanks({ rate }) {
  return (
    <div className="container thanks">
      <img
        className="thanks__img"
        src="/src/images/illustration-thank-you.svg"
        alt=""
      />
      <p className="thanks__rating">You selected {rate} out of 5</p>
      <h1 className="thanks__h1">Thank you!</h1>
      <p className="thanks__p">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
