import { Helmet } from "react-helmet-async";
import { contactInfo } from "@/data/company";

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
  image?: string;
}

export default function SEO({
  title = "NordCar | Kompleksowy Serwis i Stacja Kontroli Pojazdów w Marszewie",
  description = "Profesjonalna stacja kontroli pojazdów, serwis mechaniczny, wymiana opon, chiptuning oraz autoholowanie w Marszewie. Zaufaj naszemu doświadczeniu. Partner DEKRA.",
  type = "website",
  url = "https://nord-car.pl",
  image = "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1200&auto=format&fit=crop",
}: SEOProps) {
  const siteTitle = title.includes("Nord-Car") ? title : `${title} | Nord Car`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: contactInfo.name,
    image: image,
    "@id": url,
    url: url,
    telephone: "+48" + contactInfo.phone.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.street,
      addressLocality: contactInfo.city.replace(/[0-9-]/g, "").trim(),
      postalCode: contactInfo.city.match(/[0-9-]+/)?.[0] || "72-100",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.5614,
      longitude: 14.8258,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: contactInfo.hours.weekdays.split(" - ")[0] || "08:00",
        closes: contactInfo.hours.weekdays.split(" - ")[1] || "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: contactInfo.hours.saturday.split(" - ")[0] || "08:00",
        closes: contactInfo.hours.saturday.split(" - ")[1] || "14:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <Helmet>
      {/* Basic Standard HTML Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#f59e0b" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={contactInfo.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
