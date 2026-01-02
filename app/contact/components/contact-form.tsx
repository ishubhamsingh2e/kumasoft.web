"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data: any) => {
    console.log("[v0] Contact form data:", data)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      reset()
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-3xl font-bold text-primary">Message Received</h3>
        <p className="text-muted-foreground max-w-sm">
          Thank you for reaching out. A partner from our studio will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-2 group">
          <Label
            htmlFor="name"
            className="text-xs font-bold uppercase tracking-widest text-primary/50 group-focus-within:text-accent transition-colors"
          >
            Your Name
          </Label>
          <Input
            id="name"
            {...register("name", { required: true })}
            placeholder="John Doe"
            className="border-0 border-b border-primary/20 rounded-none bg-transparent px-0 h-12 text-lg focus-visible:ring-0 focus-visible:border-accent transition-all placeholder:text-muted-foreground/30"
          />
        </div>
        <div className="space-y-2 group">
          <Label
            htmlFor="email"
            className="text-xs font-bold uppercase tracking-widest text-primary/50 group-focus-within:text-accent transition-colors"
          >
            Your Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: true })}
            placeholder="john@example.com"
            className="border-0 border-b border-primary/20 rounded-none bg-transparent px-0 h-12 text-lg focus-visible:ring-0 focus-visible:border-accent transition-all placeholder:text-muted-foreground/30"
          />
        </div>
      </div>

      <div className="space-y-2 group">
        <Label
          htmlFor="subject"
          className="text-xs font-bold uppercase tracking-widest text-primary/50 group-focus-within:text-accent transition-colors"
        >
          What are we building?
        </Label>
        <Input
          id="subject"
          {...register("subject")}
          placeholder="New Brand Identity, SaaS Platform..."
          className="border-0 border-b border-primary/20 rounded-none bg-transparent px-0 h-12 text-lg focus-visible:ring-0 focus-visible:border-accent transition-all placeholder:text-muted-foreground/30"
        />
      </div>

      <div className="space-y-2 group">
        <Label
          htmlFor="message"
          className="text-xs font-bold uppercase tracking-widest text-primary/50 group-focus-within:text-accent transition-colors"
        >
          Tell us more
        </Label>
        <Textarea
          id="message"
          {...register("message", { required: true })}
          placeholder="I have an idea for..."
          className="min-h-[150px] border border-primary/10 rounded-xl bg-primary/5 p-4 text-lg focus-visible:ring-0 focus-visible:border-accent transition-all placeholder:text-muted-foreground/30 resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-lg font-bold group"
      >
        SEND MESSAGE{" "}
        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </form>
  )
}
