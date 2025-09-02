import Collapsible from "@/components/collapsible";
import { work as workData } from "@/data/loader";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="container mx-auto flex scroll-mt-12 flex-col items-center gap-8 px-4 sm:px-6"
    >
      <h2 className="text-center font-bold">{workData.title}</h2>
      <p className="mx-auto max-w-prose text-lg leading-relaxed sm:text-xl">
        {workData.description}
      </p>
      <div className="flex flex-col gap-8">
        {workData.projects.map((project, index) => (
          <Collapsible project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
