import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Recognition from "@/components/Recognition";

export default function Home() {
  return (
    <>
      <Header />
      <Gallery />
      <Recognition />
      <section className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-20">
        <Education />
        <WorkExperience />
      </section>
    </>
  );
}
