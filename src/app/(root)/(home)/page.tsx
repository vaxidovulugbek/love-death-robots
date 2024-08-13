import Image from "next/image";
import Header from "@/components/Header";
import AutoOpacitySlider from "@/components/Slider";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <Button colorScheme='blue'>Button</Button>
      <main>
        <AutoOpacitySlider/>
      </main>
    </>
  );
}
