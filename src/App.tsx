import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Section } from "./components/Layout/Section";
import { FloorPlan } from "./components/FloorPlan/FloorPlan";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <Section className="border-b border-border">
        <p className="text-xs font-medium tracking-widest text-accent uppercase mb-4">
          Facilities Orientation
        </p>
        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
          More than a building.
          <br />
          It's a place.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
          Explore our facilities through the interactive floor plan below. Click
          any marker to learn more about each area.
        </p>
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

      {/* About */}
      <Section id="about" className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-gutter)]">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium tracking-widest text-accent uppercase mb-2">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Welcome
            </h2>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className="text-lg leading-relaxed text-text-muted">
              This interactive guide helps you navigate our facilities. Use the
              floor plan above to explore different areas of the building,
              from meeting rooms and common spaces to essential services.
            </p>
          </div>
        </div>
      </Section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
