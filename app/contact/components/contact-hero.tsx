import { Button } from "@/components/ui/button"

export function ContactHero() {
  return (
    <section className="relative h-[45vh] min-h-[200px] w-full flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: 'url("https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img93.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-12 w-full text-white space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Contact: Agency</h1>
        <p className="text-xl opacity-90">Leave us a little info, and we'll be in touch.</p>
        <Button className="bg-[#F05A29] text-white rounded-full px-4 py-2 h-auto text-lg font-bold">
          Send Us Email
        </Button>
      </div>
    </section>
  )
}
