import Subpage from "@/components/Subpage";
import { services, contactInfo, autoholowaniePricing, holowanieServices } from "@/data/company";
import { Phone, Truck, Wrench, Fuel, Info } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const iconMap: Record<string, LucideIcon> = {
  Truck, Wrench, Fuel
};

export default function Holowanie() {
  const service = services.find(s => s.id === "autoholowanie")!;

  return (
    <Subpage title={service.title} bannerImage={service.bannerImage} currentServiceId={service.id}>
      <div className="py-8 md:py-12 space-y-16">

        {/* Sekcja 1: Hero / Emergency CTA */}
        <section>
          <Card className="bg-zinc-50 border-2 border-border overflow-hidden shadow-xl relative">
            {/* Dekoracyjne elementy tła */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-30 blur-3xl">
              <div className="w-64 h-64 bg-primary rounded-full"></div>
            </div>

            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 text-center md:text-left">
              <div className="max-w-2xl">
                <div className="flex flex-col items-center md:items-start gap-3 mb-4">
                  <span className="inline-flex max-w-max mx-auto md:mx-0 bg-red-600 text-white font-black px-3 py-1 text-sm uppercase tracking-widest rounded-md animate-pulse">24/7</span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900">
                    Natychmiastowa pomoc drogowa
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed">
                  Awaria samochodu lub kolizja na drodze? Oszczędź sobie nerwów. Nasza laweta sprawnie dojedzie na miejsce i bezpiecznie przetransportuje Twój pojazd, o każdej porze.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
                <a href={`tel:${contactInfo.phoneRoadAssistance.replace(/-/g, '')}`} className="w-full md:w-auto block">
                  <Button size="lg" className="w-full cursor-pointer text-xl h-16 md:h-18 px-8 bg-primary hover:bg-primary-hover text-primary-foreground font-black tracking-widest uppercase shadow-lg transition-all hover:scale-105">
                    <Phone className="w-6 h-6 mr-3 animate-pulse" />
                    {contactInfo.phoneRoadAssistance}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sekcja 2: Zakres Usług na drodze */}
        <section>
          <h3 className="text-2xl md:text-3xl font-black uppercase text-zinc-900 mb-8 text-center tracking-tight">
            Jak możemy Ci pomóc na drodze?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {holowanieServices.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <Card key={item.id} className="border-border hover:border-primary/20 transition-colors shadow-sm">
                  <CardHeader className="pb-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-8 h-8 text-primary" />}
                    </div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Sekcja 3: Cennik Usług */}
        <section>
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 bg-zinc-50 border-b border-border">
              <h3 className="text-2xl font-black uppercase text-zinc-900 tracking-tight">Cennik autoholowania</h3>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-zinc-100">
                  <TableRow>
                    <TableHead className="w-[40%] font-bold text-zinc-900 py-4 px-6 uppercase text-xs tracking-wider">Trasa / Usługa</TableHead>
                    <TableHead className="w-[30%] font-bold text-zinc-900 py-4 px-6 uppercase text-xs tracking-wider bg-primary/5">Klienci {contactInfo.name}</TableHead>
                    <TableHead className="w-[30%] font-bold text-zinc-900 py-4 px-6 uppercase text-xs tracking-wider">Pozostali klienci</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {autoholowaniePricing.map((item) => (
                    <TableRow key={item.id} className="hover:bg-zinc-50/50">
                      <TableCell className="font-medium text-zinc-700 py-4 px-6">{item.area}</TableCell>
                      <TableCell className="font-bold text-primary py-4 px-6 bg-primary/[0.02]">{item.priceLoyal}</TableCell>
                      <TableCell className="text-zinc-600 py-4 px-6">{item.priceStandard}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Sekcja 4: Ważna informacja / Alert */}
            <div className="p-6 md:p-8 bg-zinc-50 border-t border-border mt-0">
              <Alert className="border-amber-500 bg-amber-50 shadow-sm border-2">
                <Info className="h-6 w-6 text-amber-600" />
                <AlertTitle className="text-lg font-black uppercase text-amber-900 tracking-tight ml-2">Uczciwe zasady rozliczeń!</AlertTitle>
                <AlertDescription className="text-amber-800 font-medium text-base mt-2 ml-2 leading-relaxed">
                  W naszej firmie klient ponosi koszty holowania <strong>TYLKO w jedną stronę</strong>. Nie płacisz za powrót lawety do bazy.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

      </div>
    </Subpage>
  );
}
