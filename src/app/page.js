import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-center mt-6">
        Hello world from Doctor portal
      </h1>
      <ServicesSection></ServicesSection>
    </div>
  );
}
