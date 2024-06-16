import ServicesCard from "@/components/ServicesCard";
import { createClient } from "contentful";

async function getServices() {
  try {
    const client = createClient({
      space: "kwr1q2y1p23a",
      accessToken: "MDxC8NKwy487RK2NmjwtMrHvanOntPdf07qCDKoTbSM",
    });
    const res = await client.getEntries({ content_type: "services" });
    return res.items;
  } catch (error) {
    console.log(error);
  }
}

export default async function services() {
  const services = await getServices();

  return (
    <>
      <h2
        id="services"
        className="text-3xl font-semibold text-center text-green-800 mb-8 pt-6"
      >
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {services.map((service) => (
          <ServicesCard key={service.sys.id} service={service} />
        ))}
      </div>
    </>
  );
}
