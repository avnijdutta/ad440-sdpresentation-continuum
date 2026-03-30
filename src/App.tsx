import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Section } from "./components/Layout/Section";
import { FloorPlan } from "./components/FloorPlan/FloorPlan";
import { LayeredMap } from "./components/LayeredMap/LayeredMap";
import { Carousel } from "./components/ui/Carousel";
import { layers as siteContextLayers } from "./data/layers";
import siteMap from "./assets/site_map/base_map.png";
import heroImage from "./assets/cafe_render.png";
import conceptLeaf from "./assets/concept_development/1_leaf.png";
import conceptParti from "./assets/concept_development/2_Partis1.jpeg";
import conceptNegativeSpace from "./assets/concept_development/3_parti_and_model.png";
import conceptBoard from "./assets/concept_development/4_concept_board.png";
import conceptSketches1 from "./assets/concept_development/5_ideationsketches_1.jpg";
import conceptSketches2 from "./assets/concept_development/6_ideationsketches_2.jpg";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section
        id="hero"
        className="relative border-b border-border min-h-[480px] flex items-center px-[var(--spacing-margin)] py-[var(--spacing-v-space)] overflow-hidden lg:aspect-[2912/1472]"
      >
        <img
          src={heroImage}
          alt=""
          className="hidden lg:block absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-[1]" />
        <div className="relative z-10 lg:[text-shadow:0_2px_8px_rgba(0,0,0,0.3)]">
          <p className="text-xs font-medium tracking-widest text-accent uppercase mb-4 lg:text-[#d4a68a]">
            Facilities Orientation
          </p>
          <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-3xl lg:text-white">
            More than a building.
            <br />
            It's a place.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted lg:text-white/90">
            Explore our facilities through the interactive floor plan below. Click
            any marker to learn more about each area.
          </p>
        </div>
      </section>

      {/* Project Brief */}
      <Section id="project-brief" className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-gutter)]">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium tracking-widest text-accent uppercase mb-2">
              Overview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Project Brief
            </h2>
          </div>
          <div className="lg:col-span-8 lg:col-start-5 space-y-4">
            <p className="text-lg leading-relaxed text-text-muted">
              Continuum is a multi-use community facility designed to serve as a
              gathering point for residents, visitors, and organizations. The
              project responds to the need for adaptable, inclusive spaces that
              support a range of activities — from daily operations and events
              to quiet reflection and collaboration.
            </p>
            <p className="text-lg leading-relaxed text-text-muted">
              The design prioritizes connectivity between interior and exterior
              environments, sustainable material use, and a layout that can
              evolve with the community it serves.
            </p>
          </div>
        </div>
      </Section>

      {/* Site Context */}
      <Section id="site-context" className="border-b border-border">
        <div className="mb-[var(--spacing-v-space-sm)]">
          <p className="text-xs font-medium tracking-widest text-accent uppercase mb-2">
            Site Analysis
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Site Context
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-text-muted">
            Toggle layers to explore environmental and contextual factors
            influencing the site design.
          </p>
        </div>
        <LayeredMap baseImage={siteMap} baseAlt="Site map" layers={siteContextLayers} />
      </Section>

      {/* Concept Development */}
      <Section id="concept-development" className="border-b border-border">
        <div className="mb-[var(--spacing-v-space-sm)]">
          <p className="text-xs font-medium tracking-widest text-accent uppercase mb-2">
            Design Thinking
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Concept Development
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-text-muted">
            The architectural concept draws from the idea of continuity —
            seamless transitions between public and private, indoor and outdoor,
            individual and collective.
          </p>
        </div>
        <Carousel
          slides={[
            { image: conceptLeaf, alt: "Original leaf image", caption: "Concept Origin", blurb: "A photograph of the leaf was digitally manipulated in Photoshop to emphasize its underlying structure, drawing attention to the veins, edges, and layered surfaces. Through this process, the leaf was abstracted beyond its literal form, revealing a framework of edge, line, and surface." },
            { image: conceptParti, alt: "Parti diagram", caption: "Parti Diagramming", blurb: "The manipulated leaf image was studied to develop a series of parti diagrams that abstract its key qualities. By focusing on the vein structure, edges, and layered surfaces, the leaf informed simplified diagrams." },
            { image: conceptNegativeSpace, alt: "Negative space parti diagram", caption: "3D Ideation", blurb: "The final sketch based on the parti diagram exploring the negative space between the veins of the leaf, was translated into a 3D model to explore the parti in spatial form. The model emphasized layering, organic movement, and adaptability, using voids and transitions to shape the overall design." },
            { image: conceptBoard, alt: "Concept board", caption: "Final Concept: Continuum", blurb: "The elements abstracted from the leaf and 3D model were distilled into three key ideas: adaptive, connected, and layered. These qualities informed a concept board of curated imagery, ultimately defining the final concept: Continuum." },
            { image: conceptSketches1, alt: "Ideation sketches", caption: "Abstract Ideation Sketching", blurb: "The concept was then used to explore how these ideas could translate into a 3D interior space. Through a series of sketches, the design evolved from abstract notions into more defined spatial strategies, illustrating the progression from concept to tangible interior experience." },
            { image: conceptSketches2, alt: "Ideation sketches continued", caption: "Abstract Ideation Sketching", blurb: "The concept was then used to explore how these ideas could translate into a 3D interior space. Through a series of sketches, the design evolved from abstract notions into more defined spatial strategies, illustrating the progression from concept to tangible interior experience." },
          ]}
        />
      </Section>

      {/* Floor Plan */}
      <Section id="floor-plan">
        <div className="mb-[var(--spacing-v-space-sm)]">
          <p className="text-xs font-medium tracking-widest text-accent uppercase mb-2">
            Interactive Map
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Floor Plan
          </h2>
        </div>
        <FloorPlan />
      </Section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
