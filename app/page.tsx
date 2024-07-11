import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <Gallery />
      <section className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-20">
        <Education />
        <WorkExperience />
      </section>
      <Footer />
    </>
  );
}
