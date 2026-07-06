import { Navbar } from "@/lib/components/Navbar";
import { OurStory } from "@/lib/components/OurStory";
import { Footer } from "@/lib/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-cream">
      <Navbar />
      <OurStory />
      <Footer />
    </main>
  );
}
