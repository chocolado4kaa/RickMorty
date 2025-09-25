import type { SectionProps } from "../../shared/interfaces/SectionProps";

export const Section: React.FC<SectionProps> = (SectionProps) => {
  return (
    <section className="char-section section">
      <h2 id={SectionProps.title.id}>{SectionProps.title.text}</h2>
      <div className="list">
        {SectionProps.children}
      </div>
    </section>
  );
};
