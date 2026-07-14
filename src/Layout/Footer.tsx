import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo } from "@/data/company";
import { navigateToAddigital } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-accent border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6 mb-8 flex-wrap text-center md:text-left">
          {/* Logo & Address */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex flex-col">
                <span className="font-black text-3xl tracking-tighter text-foreground uppercase leading-none">
                  {contactInfo.name.split(" ")[0]}
                  <span className="text-primary">
                    {contactInfo.name.split(" ")[1]}
                  </span>
                </span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1">
                  Serwis Samochodowy
                </span>
              </div>
            </div>
            <div className="text-muted-foreground font-medium space-y-2">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1 md:mt-0.5" />
                <div className="flex flex-col">
                  <span>
                    {contactInfo.name}
                    <br />
                    {contactInfo.street}
                    <br />
                    {contactInfo.city}
                  </span>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${contactInfo.name}, ${contactInfo.street}, ${contactInfo.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center md:justify-start gap-1.5 text-xs font-bold uppercase tracking-wider text-primary-hover hover:text-primary transition-colors mt-2"
                  >
                    Nawiguj do nas
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-sm font-black tracking-widest text-zinc-900 uppercase mb-6">
              Na skróty
            </h3>
            <div className="flex flex-col items-center md:items-start space-y-3 text-zinc-600 font-medium text-sm">
              <Link to="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <Link
                to="/sprzedaz"
                className="hover:text-primary transition-colors"
              >
                Sprzedaż samochodów
              </Link>
              <Link
                to="/uslugi/serwis"
                className="hover:text-primary transition-colors"
              >
                Serwis Mechaniczny
              </Link>
              <Link
                to="/uslugi/autoholowanie"
                className="hover:text-primary transition-colors"
              >
                Auto holowanie
              </Link>
              <a
                href="/#kontakt"
                className="hover:text-primary transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>

          {/* Contact Details */}
          {[
            {
              title: "Kontakt - Serwis",
              phones: contactInfo.phones.serwis,
              email: contactInfo.emails.serwis,
            },
            {
              title: "Kontakt - Sprzedaż",
              phones: contactInfo.phones.sprzedaz,
              email: contactInfo.emails.sprzedaz,
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="md:col-span-1 lg:col-span-2 flex flex-col items-center md:items-start"
            >
              <h3 className="text-sm font-black tracking-widest text-zinc-900 uppercase mb-6">
                {section.title}
              </h3>
              <div className="space-y-2 text-zinc-600 font-medium text-sm flex flex-col items-center md:items-start">
                {section.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4 text-primary fill-primary shrink-0" />
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${section.email}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors mt-2"
                >
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  {section.email}
                </a>
              </div>
            </div>
          ))}

          {/* Opening Hours */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col items-center md:items-start w-full">
            <h3 className="text-sm font-black tracking-widest text-zinc-900 uppercase mb-6">
              Godziny otwarcia
            </h3>
            <div className="space-y-2 text-zinc-600 font-medium text-sm w-full max-w-[300px]">
              <p className="flex justify-between w-full">
                <span className="text-zinc-400">PN - PT</span>
                <span className="text-zinc-900 font-bold">
                  {contactInfo.hours.weekdays}
                </span>
              </p>
              <p className="flex justify-between w-full">
                <span className="text-zinc-400">SOB</span>
                <span className="text-zinc-900 font-bold">
                  {contactInfo.hours.saturday}
                </span>
              </p>
              <p className="flex justify-between w-full">
                <span className="text-zinc-400">NDZ</span>
                <span className="text-primary font-bold">
                  {contactInfo.hours.sunday}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="py-4 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-zinc-400 text-[11px] font-medium">
            © {new Date().getFullYear()} {contactInfo.name}. Wszelkie prawa
            zastrzeżone.
          </p>
          <div className="flex justify-center text-sm items-end gap-1">
            <p className="text-zinc-400">Strona stworzona przez</p>
            <span
              className="font-bold text-primary/80 cursor-pointer hover:underline underline-offset-3"
              onClick={navigateToAddigital}
            >
              Addigital
            </span>
          </div>
          <div className="flex gap-4 text-[11px] text-zinc-400 font-medium">
            <Link
              to="/polityka-prywatnosci"
              className="hover:text-amber-500 transition-colors uppercase tracking-wider"
            >
              Polityka Prywatności i Cookies
            </Link>
            <Link
              to="/regulamin"
              className="hover:text-amber-500 transition-colors uppercase tracking-wider"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
