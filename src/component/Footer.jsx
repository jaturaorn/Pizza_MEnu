import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);
  //   if (hour >= openHours && hour <= closeHours) {
  //     alert("We're currently open!");
  //   } else {
  //     alert("Sorry We're close!");
  //   }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHours} />
      ) : (
        <p>
          We're happy to welcome you between {openHours}:00 am. and {closeHours}
          :00 pm.
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}
