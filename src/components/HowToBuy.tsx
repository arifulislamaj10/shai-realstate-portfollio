import Reveal from "./Reveal";
import { howToBuySteps } from "@/data/site";

export default function HowToBuy() {
  return (
    <section className="how-to-buy section" id="how-to-buy">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">How to Buy a Hamana Home</h2>
          <p className="section-desc">Simple steps from first message to key turnover</p>
        </Reveal>

        <div className="steps-grid">
          {howToBuySteps.map((item) => (
            <Reveal key={item.step}>
              <article className="step-card">
                <span className="step-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
