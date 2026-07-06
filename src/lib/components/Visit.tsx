import { contact, hours, social } from "@/lib/site-data";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "./SocialIcons";

export function Visit() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.address.mapsQuery)}&output=embed`;

  return (
    <section id="visit" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14">
        <div>
          <p className="text-xs font-medium tracking-widest2 uppercase text-oxblood mb-4">Visit the Shop</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-espresso">145 Front Street, DUMBO</h2>

          <div className="mt-6 space-y-1 text-ink/85">
            <p>{contact.address.line1}</p>
            <p>{contact.address.line2}</p>
            <p className="text-sm text-ink/60">{contact.address.crossStreets}</p>
          </div>

          <div className="mt-6 space-y-1">
            <a
              href={contact.phoneHref}
              className="block text-ink hover:text-oxblood focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oxblood focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
            >
              {contact.phone}
            </a>
            <a
              href={contact.emailHref}
              className="block text-ink hover:text-oxblood focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oxblood focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
            >
              {contact.email}
            </a>
          </div>

          <table className="mt-8 w-full max-w-xs text-sm">
            <tbody>
              {hours.map((h) => (
                <tr key={h.day} className="border-t border-brass/20">
                  <td className="py-2 text-ink/70">{h.day}</td>
                  <td className="py-2 text-right text-ink font-medium">{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex items-center gap-5">
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-espresso hover:text-oxblood transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oxblood focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-espresso hover:text-oxblood transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oxblood focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-espresso hover:text-oxblood transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oxblood focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm">
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="rounded-sm overflow-hidden border border-brass/30 min-h-[320px]">
          <iframe
            title="Eulalee Beckford Designs location"
            src={mapSrc}
            className="w-full h-full min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}