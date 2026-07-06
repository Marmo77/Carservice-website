import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { CalendarIcon, CheckCircle2, Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { bookingServices } from "@/data/autoScanData";

const formSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko jest wymagane"),
  phone: z.string().min(9, "Wprowadź poprawny numer telefonu").max(15),
  registration: z.string().min(4, "Wprowadź numer rejestracyjny pojazdu"),
  serviceId: z.string().min(1, "Wybierz usługę"),
  date: z.date({ message: "Wybierz preferowaną datę" }),
  time: z.string().min(1, "Wybierz godzinę wizyty").or(z.literal("")).optional(),
});

const availableHours = [
  "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00"
];

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      registration: "",
      serviceId: "",
      time: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="pt-8 pb-12 flex flex-col items-start bg-accent border border-border p-8 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <CheckCircle2 className="h-10 w-10 text-primary" />
          <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">Dziękujemy za wiadomość</h3>
        </div>
        <p className="text-muted-foreground max-w-md font-medium text-sm mb-8">
          Skontaktujemy się z Tobą wkrótce pod podanym numerem telefonu, aby potwierdzić szczegóły rezerwacji.
        </p>
        <Button
          className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold uppercase tracking-wider rounded-md h-12 px-8 flex items-center justify-center transition-colors"
          onClick={() => {
            reset();
            setIsSubmitted(false);
          }}
        >
          Umów kolejną wizytę
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full bg-background p-6 sm:p-8 rounded-xl border border-zinc-200 shadow-sm relative overflow-hidden">
      {/* Subtle decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
        <div className="space-y-1">
          <Controller
            control={control}
            name="serviceId"
            render={({ field }) => (
              <div className="relative">
                <select
                  title="Wybierz usługę"
                  className={cn(
                    "w-full border-0 border-b border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 rounded-t-md min-h-12 py-3 px-4 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-primary text-sm sm:text-base font-medium appearance-none cursor-pointer transition-colors max-w-full overflow-hidden text-ellipsis",
                    !field.value && "text-muted-foreground"
                  )}
                  {...field}
                >
                  <option value="" disabled hidden>Wybierz usługę...</option>
                  {bookingServices.map((service, i) => (
                    <option key={i} value={service} className="text-zinc-900 py-2">{service}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            )}
          />
          {errors.serviceId && <p className="text-sm text-red-500 pt-1 px-4">{errors.serviceId.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1 flex flex-col">
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"ghost"}
                      className={cn(
                        "w-full px-4 text-left font-medium border-0 border-b border-zinc-300 rounded-t-md rounded-b-none h-12 bg-zinc-50 hover:bg-zinc-100 hover:text-foreground focus-visible:ring-0 focus-visible:border-amber-500 text-base transition-colors",
                        !field.value && "text-zinc-500"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: pl })
                      ) : (
                        <span>Data wizyty</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white border-zinc-200 text-zinc-900 rounded-md shadow-lg" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0
                      }
                      className="bg-white text-zinc-900"
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.date && <p className="text-sm text-red-500 pt-1 px-4">{errors.date.message}</p>}
          </div>

          <div className="space-y-1">
            <Controller
              control={control}
              name="time"
              render={({ field }) => (
                <div className="relative">
                  <select
                    title="Wybierz godzinę"
                    className={cn(
                      "w-full border-0 border-b border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 rounded-t-md h-12 py-3 px-4 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-amber-500 text-base font-medium appearance-none cursor-pointer transition-colors",
                      !field.value && "text-zinc-500"
                    )}
                    {...field}
                  >
                    <option value="" disabled hidden>Godzina rygorystyczna (Opcjonalnie)</option>
                    {availableHours.map((hour, i) => (
                      <option key={i} value={hour} className="text-zinc-900">{hour}</option>
                    ))}
                  </select>
                  <Clock className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 text-zinc-500" />
                </div>
              )}
            />
            {errors.time && <p className="text-sm text-red-500 pt-1 px-4">{errors.time.message}</p>}
          </div>
        </div>

        <div className="space-y-1">
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input id="name" placeholder="Imię i nazwisko" className="border-0 border-b border-zinc-300 bg-zinc-50 text-zinc-900 rounded-t-md rounded-b-none h-12 px-4 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:border-amber-500 text-base font-medium shadow-none hover:bg-zinc-100 transition-colors" {...field} />
            )}
          />
          {errors.name && <p className="text-sm text-red-500 pt-1 px-4">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1">
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Input id="phone" placeholder="Twój numer telefonu" className="border-0 border-b border-zinc-300 bg-zinc-50 text-zinc-900 rounded-t-md rounded-b-none h-12 px-4 placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:border-amber-500 text-base font-medium shadow-none hover:bg-zinc-100 transition-colors" {...field} />
              )}
            />
            {errors.phone && <p className="text-sm text-red-500 pt-1 px-4">{errors.phone.message}</p>}
          </div>

          <div className="space-y-1">
            <Controller
              control={control}
              name="registration"
              render={({ field }) => (
                <Input id="registration" placeholder="Numer rejestracyjny" className="uppercase border-0 border-b border-zinc-300 bg-zinc-50 text-zinc-900 rounded-t-md rounded-b-none h-12 px-4 placeholder:text-zinc-500 placeholder:normal-case focus-visible:ring-0 focus-visible:border-amber-500 text-base font-medium shadow-none hover:bg-zinc-100 transition-colors" {...field} />
              )}
            />
            {errors.registration && <p className="text-sm text-red-500 pt-1 px-4">{errors.registration.message}</p>}
          </div>
        </div>

        <div className="pt-6">
          <p className="text-xs text-zinc-500 mb-6 font-medium flex items-start gap-2 bg-zinc-50 p-3 rounded-md">
            <input type="checkbox" id="privacy-policy" required className="accent-amber-500 mt-0.5" />
            <label htmlFor="privacy-policy">Zapoznałem się z <a href="#" className="underline hover:text-primary font-bold">Polityką Prywatności</a> i wyrażam zgodę na przetwarzanie danych w celu obsługi rezerwacji.</label>
          </p>
          <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 h-14 text-white font-bold uppercase tracking-widest rounded-md transition-all shadow-md hover:shadow-lg flex items-center justify-center text-lg">
            Dokończ rezerwację
          </Button>
        </div>
      </form>
    </div>
  );
}
