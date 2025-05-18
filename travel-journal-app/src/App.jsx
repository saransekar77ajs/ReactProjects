import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data.js";
// import DataDriven from "./components/DataDriven";

function App() {
  const entries = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        {...entry}
        // entry={entry}
        // img={entry.img}
        // country={entry.country}
        // title={entry.title}
        // googleMapsLink={entry.googleMapsLink}
        // dates={entry.dates}
        // text={entry.text}
      />
    );
  });
  return (
    <>
      <Header />
      <main>{entries} </main>

      {/* <Entry
        img={{
          src: "https://scrimba.com/links/travel-journal-japan-image-url",
          alt: "Mount Fuji",
        }}
        country="Japan"
        title="Mount Fuji"
        marker={{ src: "/marker.png", alt: "map marker icon" }}
        googleMapsLink={
          "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        }
        dates="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      /> */}
      {/* <div className="contacts">
        <DataDriven
          img="/felix.png"
          name="Felix"
          picon="/phone-icon.png"
          micon="/mail-icon.png"
          email="felix@cat.com"
          phone="(212) 555-1234"
        />
        <DataDriven
          img="/mr-whiskerson.png"
          name="Mr. Whiskerson"
          picon="/phone-icon.png"
          micon="/mail-icon.png"
          email="whisker@cat.com"
          phone="(212) 666-1234"
        />
        <DataDriven
          img="/fluffykins.png"
          name="Fluffy Skins"
          picon="/phone-icon.png"
          micon="/mail-icon.png"
          email="fluffyskins@cat.com"
          phone="(212) 222-1234"
        />
        <DataDriven
          img="/pumpkin.png"
          name="Pumpkin"
          picon="/phone-icon.png"
          micon="/mail-icon.png"
          email="pumpkin@cat.com"
          phone="(212) 333-1234"
        />
      </div> */}
    </>
  );
}

export default App;
