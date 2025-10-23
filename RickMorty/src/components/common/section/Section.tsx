import type { SectionProps } from "../../../shared/interfaces/SectionProps";

export const Section: React.FC<SectionProps> = (SectionProps) => {
  return (
    <section className={`section ${SectionProps.className}`}>
      <h2 id={SectionProps.title.id}>{SectionProps.title.text}</h2>
      <div className="container">
        {SectionProps.children}
      </div>
    </section>
  );
};
