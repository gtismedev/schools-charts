import { Header } from "../../components/header/header";

import { Content } from "../../components/content/content";
import { Chart } from "../../components/chart/chart";
import { Footer } from "../../components/footer/footer";

import "./index.css";
import "../../reset.css";
import { NeighborhoodSection } from "../../components/neighborhoodSection/neighborhoodSection";

function Root() {
  return (
    <div>
      <Header />
      <main className="container">
        <Content />
        <Chart />

        <section className="container__neighborhood-section">
          <NeighborhoodSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Root;
