import { Footer } from "@/components/footer"
import { ContactForm } from "./components/contact-form"
import { ArrowDown } from "lucide-react"

export default function ContactPage() {
  return (
    <main className=" bg-background  selection:bg-accent selection:text-white pt-31">
      {/* Editorial Hero Section */}
      <section className="relative h-[calc(100vh-122px)] flex flex-col md:flex-row overflow-hidden border-b border-primary/10">
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-secondary">KUMASOFT STUDIO</span>
            <h1 className="text-7xl md:text-[10vw] font-black leading-[0.85] tracking-tighter text-primary uppercase">
              Let&apos;s <br />
              Start <br />
              <span className="italic font-light text-secondary">Something.</span>
            </h1>
          </div>

          <div className="flex items-start justify-between">
            <div className="max-w-xs space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                We partner with brands that want to redefine their digital presence through design and engineering.
              </p>
            </div>
            <div className="animate-bounce p-4 border border-primary/20 rounded-full">
              <ArrowDown className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="flex-1 relative bg-primary/5 border-l border-primary/10">
          <div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <img src="/office-hero.png" alt="Creative Space" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-l" />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container px-6 mx-auto py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Contact Info Column */}
        <div className="lg:col-span-4 space-y-16">
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest uppercase text-accent">Get in Touch</h3>
            <div className="space-y-2 text-2xl font-medium text-primary">
              <p className="hover:text-accent transition-colors cursor-pointer">hello@kumasoft.studio</p>
              <p>+1 (555) 000-0000</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest uppercase text-accent">Visit Us</h3>
            <div className="space-y-2 text-xl text-muted-foreground">
              <p>123 Creative Plaza</p>
              <p>Digital Valley, CA 94043</p>
              <p>United States</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest uppercase text-accent">Socials</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xl font-medium">
              {["Instagram", "Twitter", "LinkedIn", "Behance"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="hover:text-accent transition-colors border-b border-primary/20 pb-1"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-8">
          <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 border border-primary/10 rounded-2xl shadow-2xl shadow-primary/5">
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  )
}
