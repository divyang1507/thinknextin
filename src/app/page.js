import { Homesection } from "./pagesections/Homesection";
import { About } from "./pagesections/About";
import { Services } from "./pagesections/Services";
import { Contact } from "./pagesections/Contact";

export default function Home() {
  return (
    <>
      <Homesection />
      <Services />
      <About />
      <Contact />
    </>
  );
}
