import { Navbar } from "@/lib/components/navbar";
import { OurStory } from "@/lib/components/OurStory";
import { Footer } from "@/lib/components/footer";

export default function AboutPage() {
  return (
    <main className="bg-cream">
      <Navbar />
      <OurStory />
      <Footer />
    </main>
  );
}
