import { Button } from "@/components/ui/button";
import AboutData from "@/data/en/AboutData.json"

export default function About(){
    return (
        <section className="py-32">
          <div className="container mx-auto">
            <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
              <h1 className="text-5xl font-semibold">Our Background</h1>
              <p className="text-muted-foreground">
                Cyber risks, such as phishing, are growing challenges for organizations today. These tactics aim to mislead
                individuals into giving away private data or installing malware on their devices.
              </p>
            </div>
    
            <div className="grid gap-7 lg:grid-cols-3">
              <img
                src="https://placehold.co/900/EBEDED/C3C9C9?text=Y&font=poppins.svg"
                alt="placeholder"
                className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
              />
              <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
                <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
                  <img
                    src="https://placehold.co/900/transparent/005661?text=D&font=poppins.svg"
                    alt="logo"
                    className="mr-auto h-12"
                  />
                  <div>
                    <p className="mb-2 text-lg font-semibold">Who We Are and What We Offer</p>
                    <p className="text-muted-foreground">
                      Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.
                    </p>
                  </div>
                  <Button variant="outline" className="mr-auto">
                    Discover more
                  </Button>
                </div>
                <img
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=C&font=poppins.svg"
                  alt="placeholder"
                  className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
                />
              </div>
            </div>
    
            <div className="py-32">
              <p className="text-center">Valued by clients worldwide</p>
              <div className="mt-8 flex flex-wrap justify-center gap-8">
                {AboutData.Companies.map((company, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src={company.src}
                      alt={company.name}
                      className="h-8 w-auto md:h-12"
                    />
                    <p className="text-xl font-semibold md:text-2xl">{company.name}</p>
                  </div>
                ))}
              </div>
            </div>
    
            <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-4xl font-semibold">Our Achievements in Numbers</h2>
                <p className="max-w-screen-sm text-muted-foreground">
                  Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
                {AboutData.Stats.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <p>{stat.label}</p>
                    <span className="text-4xl font-semibold md:text-5xl">{stat.value}</span>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden size-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block" />
            </div>
          </div>
        </section>
      );
}