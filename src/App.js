import { useEffect, useState } from "react";
import { Text, Button } from "@nextui-org/react";
import { Link } from "react-scroll";
import db from "./lib/init-firebase";
import { ref, onValue } from "firebase/database";

function App() {
  const [temperature, setTemperature] = useState("");
  const [temperatureVariable, setTemperatureVariable] = useState(null);

  useEffect(() => {
    const frezzerRef = ref(db, "TemperaturaUltraFreezer");
    onValue(frezzerRef, (snapshot) => {
      const data = snapshot.val();
      const temperature = data;
      setTemperature(temperature);
    });
  }, []);

  useEffect(() => {
    console.log(temperature);
  }, [temperature]);

  useEffect(() => {
    if (temperature > -90 && temperature < -70) {
      setTemperatureVariable(<Text color="success">{temperature}</Text>);
    } else if (temperature < -90 || temperature > -70) {
      setTemperatureVariable(<Text color="danger">{temperature}</Text>);
    }
  }, [temperature]);

  return (
    <div className="flex flex-col h-full">
      <div className="h-screen bg-cover bg-bottom bg-fixed bg-[url('/img/hitaliano.jpg')] brightness-50" />
      <div className="absolute h-full w-full">
        <div className="flex flex-col h-full text-center justify-center items-center gap-10">
          <Text h1 size="4.5vw" color="#ffffff" weight="bold">
            CENTRO DE MONITOREO
          </Text>

          <Button size="lg" shadow>
            <Link activeClass="active" to="main" spy={true} smooth={true} duration={500}>
              Ver temperatura
            </Link>
          </Button>
        </div>
      </div>
      <div id="main" className="flex flex-col h-screen background">
        <div className="flex flex-col lg:flex-row h-full pt-20 pl-5 text-center justify-center items-center">
          <Text size="4.5vw" color="#ffffff" weight="bold">
            TEMPERATURA ACTUAL:
          </Text>
          <span className="sm:ml-4">
            <Text size="4.5vw" color="#ffffff" weight="bold">
              90°C
            </Text>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:h-32 w-full p-4 h-46 gap-5 bg-white text-center justify-center items-center">
          <img
            className="w-18 h-12"
            src="http://52344.track.goto-9.net/web_public_shared/image/52344/HEADiuhismall.png"
            alt="Hospital Italiano Logo"
          />
          <Text weight="bold">
            Este proyecto fue realizado por los alumnos:
            <Text color="#382db4">Babini, Borda, Cortés, Ciabis, Diaz, Ricard, Robles</Text>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default App;
