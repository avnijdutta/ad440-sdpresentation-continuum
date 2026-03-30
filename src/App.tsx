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

      {/* Interior Ideation */}
      <Section id="interior-ideation" className="border-b border-border">
        <div className="mb-[var(--spacing-v-space-sm)]">
          <p className="text-xs font-medium tracking-widest text-accent uppercase mb-2">
            Material & Atmosphere
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Interior Ideation
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-text-muted">
            Interior spaces are shaped by natural light, warm materiality, and a
            palette that balances openness with intimacy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-gutter)]">
          <div className="border border-border rounded-lg p-6 space-y-3">
            <h3 className="text-lg font-semibold">Material Palette</h3>
            <ul className="space-y-2 text-sm leading-relaxed text-text-muted">
              <li className="flex items-start gap-2">
                <span className="w-3 h-3 mt-1 rounded-full bg-accent shrink-0" />
                Exposed timber framing for warmth and structural expression
              </li>
              <li className="flex items-start gap-2">
                <span className="w-3 h-3 mt-1 rounded-full bg-[#c4b5a0] shrink-0" />
                Rammed earth and natural stone for grounding and thermal mass
              </li>
              <li className="flex items-start gap-2">
                <span className="w-3 h-3 mt-1 rounded-full bg-[#d4d4d4] shrink-0" />
                Polished concrete floors for durability and light reflection
              </li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-6 space-y-3">
            <h3 className="text-lg font-semibold">Spatial Qualities</h3>
            <ul className="space-y-2 text-sm leading-relaxed text-text-muted">
              <li className="flex items-start gap-2">
                <span className="w-3 h-3 mt-1 rounded-full bg-accent shrink-0" />
                Double-height communal spaces with clerestory glazing
              </li>
              <li className="flex items-start gap-2">
                <span className="w-3 h-3 mt-1 rounded-full bg-[#c4b5a0] shrink-0" />
                Intimate alcoves and nooks for quiet retreat
              </li>
              <li className="flex items-start gap-2">
                <span className="w-3 h-3 mt-1 rounded-full bg-[#d4d4d4] shrink-0" />
                Transitional thresholds connecting indoor and outdoor zones
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Space Diagrams */}
      <Section id="space-diagrams" className="border-b border-border">
        <div className="mb-[var(--spacing-v-space-sm)]">
          <p className="text-xs font-medium tracking-widest text-accent uppercase mb-2">
            Spatial Organization
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Space Diagrams
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-text-muted">
            Diagrammatic breakdowns of spatial relationships, circulation
            patterns, and programmatic zoning across the building.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-gutter)]">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Zoning</h3>
            <div className="space-y-2">
              {[
                { label: "Public / Communal", pct: "45%", color: "bg-accent" },
                { label: "Semi-Private / Work", pct: "30%", color: "bg-accent-light" },
                { label: "Private / Service", pct: "15%", color: "bg-[#c4b5a0]" },
                { label: "Circulation", pct: "10%", color: "bg-[#d4d4d4]" },
              ].map((zone) => (
                <div key={zone.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{zone.label}</span>
                    <span className="text-text-muted">{zone.pct}</span>
                  </div>
                  <div className="h-2 rounded-full bg-border">
                    <div
                      className={`h-2 rounded-full ${zone.color}`}
                      style={{ width: zone.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Circulation</h3>
            <p className="text-sm leading-relaxed text-text-muted mb-4">
              Primary circulation follows a central spine connecting the main
              entrance to all major program areas. Secondary paths branch to
              service zones and vertical cores.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Primary Path", color: "bg-accent" },
                { label: "Secondary Path", color: "bg-accent-light" },
                { label: "Service Access", color: "bg-[#c4b5a0]" },
                { label: "Emergency Egress", color: "bg-[#d4d4d4]" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 text-xs text-text-muted"
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
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
