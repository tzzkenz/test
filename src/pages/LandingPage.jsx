import bg from "../assets/bg/2.png";

function LandingPage() {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="">Join us for a spectacular journey of new beginnings</div>
    </>
  );
}

export default LandingPage;
