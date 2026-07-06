import { contact, hours, social } from "@/lib/site-data";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "./SocialIcons";
import { Reveal } from "./Reveal";

export function Visit() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.address.mapsQuery)}&output=embed`;

  return (
    <section id="visit" className="bg-espresso">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14">
        <Reveal>
          <p className="text-xs font-medium tracking-widest2 uppercase text-gold mb-4">Visit the Shop</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-cream">145 Front Street, DUMBO</h2>

          <div className="mt-6 space-y-1 text-cream/80">
            <p>{contact.address.line1}</p>
            <p>{contact.address.line2}</p>
            <p className="text-sm text-cream/50">{contact.address.crossStreets}</p>
          </div>

          <div className="mt-6 space-y-1">
            <a
              href={contact.phoneHref}
              className="block text-cream hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-espresso rounded-sm"
            >
              {contact.phone}
            </a>
            <a
              href={contact.emailHref}
              className="block text-cream hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-espresso rounded-sm"
            >
              {contact.email}
            </a>
          </div>

          <table className="mt-8 w-full max-w-xs text-sm">
            <tbody>
              {hours.map((h) => (
                <tr key={h.day} className="border-t border-cream/10">
                  <td className="py-2 text-cream/60">{h.day}</td>
                  <td className="py-2 text-right text-cream font-medium">{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex items-center gap-5">
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-espresso rounded-sm">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-espresso rounded-sm">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-cream hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-espresso rounded-sm">
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="rounded-sm overflow-hidden border border-gold/20 min-h-[320px]">
          <iframe
            title="Eulalee Beckford Designs location"
            src={mapSrc}
            className="w-full h-full min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}