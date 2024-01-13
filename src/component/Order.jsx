export default function Order({ closeHour, openHours }) {
  return (
    <div className="order">
      <p>
        We're open from{openHours}:00 am. to {closeHour}:00 pm. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
