import { Navbar } from "@/lib/components/navbar";
import { Hero } from "@/lib/components/Hero";
import { TrustBar } from "@/lib/components/TrustBar";
import { BrimDivider } from "@/lib/components/BrimDivider";
import { Collection } from "@/lib/components/Collection";
import { CustomOrders } from "@/lib/components/CustomOrders";
import { Footer } from "@/lib/components/footer";

export default function Home() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
      <TrustBar />
      <Collection />
      <BrimDivider className="text-brass" />
      <CustomOrders />
      <Footer />
    </main>
  );
}
