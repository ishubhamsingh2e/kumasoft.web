import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ArrowUpRight } from "lucide-react"

export function ContactDetails() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-12">
      <div className="mb-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="font-bold">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-black/50">Contact: Agency</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <div className="space-y-4 text-black/80">
            <div>
              <p className="text-sm font-bold opacity-50 uppercase tracking-widest mb-2">Work Inquiries</p>
              <p className="text-lg font-bold">+1.809.120.6705</p>
            </div>
            <div>
              <p className="text-sm font-bold opacity-50 uppercase tracking-widest mb-2">Assistance hours:</p>
              <p className="text-lg leading-relaxed">
                Monday – Friday
                <br />6 am to 8 pm EST
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Post address</h2>
          <div className="space-y-4 text-black/80">
            <div>
              <p className="text-lg leading-relaxed">
                541 Melville Ave, Palo Alto,
                <br />
                CA 94301,
                <br />
                United States
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 font-bold hover:underline">
              Get Direction <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Social media</h2>
          <ul className="space-y-2 text-lg font-bold">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Threads
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-[1px] bg-black/10 w-full mt-24" />
    </section>
  )
}
