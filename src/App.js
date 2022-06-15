import { useEffect, useState } from "react";
import { Text, Button, Image } from "@nextui-org/react";
import { Link } from "react-scroll";

function App() {
  const [temperature, setTemperature] = useState("");
  const [temperatureVariable, setTemperatureVariable] = useState(null);

  useEffect(() => {
    if (temperature > -90 && temperature < -70) {
      setTemperatureVariable(<Text color="success">{temperature}</Text>);
    } else if (temperature < -90 || temperature > -70) {
      setTemperatureVariable(<Text color="danger">{temperature}</Text>);
    }
  }, [temperature]);

  return (
    <div className="flex flex-col h-full">
      <div className=" h-screen bg-cover bg-bottom bg-fixed bg-[url('/img/hitaliano.jpg')] brightness-50" />
      <div className="absolute h-full w-full">
        <div className="flex flex-col h-full justify-center items-center gap-10">
          <Text h1 size={60} color="#ffffff" weight="bold">
            CENTRO DE MONITOREO
          </Text>

          <Button size="lg" shadow>
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              duration={500}
            >
              Ver temperatura
            </Link>
          </Button>
        </div>
      </div>
      <div id="main" className="flex flex-col h-screen background">
        <div className="flex h-full pt-20 pl-5  justify-center items-center">
          <Text size={60} color="#ffffff" weight="bold">
            TEMPERATURA ACTUAL: {temperatureVariable}
          </Text>
        </div>
        <div className="flex flex-row w-full p-4 h-32 gap-5 bg-white justify-center items-center">
          <img
            className="w-18 h-12"
            src="http://52344.track.goto-9.net/web_public_shared/image/52344/HEADiuhismall.png"
            alt="Hospital Italiano Logo"
          />
          <Text weight="bold">
            Este proyecto fue realizado por los alumnos:
            <Text color="#382db4">
              Babini, Borda, Cortés, Ciabis, Diaz, Ricard, Robles
            </Text>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default App;
