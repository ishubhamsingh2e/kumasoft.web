import { ArrowRight, Code2, Eye, Globe, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function BentoGrid(){
    return(
        <>
        <div className="grid gap-6 md:grid-cols-12 pb-4">
          {/* Top Left - Quality Fonts */}
          <div className="flex flex-col justify-between rounded-2xl bg-linear-to-br from-purple-600 to-purple-900 p-8 text-white md:col-span-4 md:row-span-2">
            <div>
              <h2 className="mb-3 text-2xl font-bold">
                Quality fonts at your fingertips.
              </h2>
              <p className="mb-8 text-sm text-purple-100">
                Choose from 1.5M+ Google Fonts, 4.3K Adobe Fonts & unlimited
                custom fonts to be uploaded.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-xs text-purple-100">
                  Google Fonts
                  <br />
                  1.8M+ fonts
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur">
                  <Code2 className="h-5 w-5" />
                </div>
                <span className="text-xs text-purple-100">
                  Adobe Fonts
                  <br />
                  4.3K fonts
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-xs text-purple-100">
                  Custom Fonts
                  <br />
                  Unlimited
                </span>
              </div>
            </div>
          </div>

          {/* Top Center - Responsive Images */}
          <div className="flex items-center justify-between overflow-hidden rounded-2xl bg-slate-100 p-8 md:col-span-4 md:row-span-2">
            <div className="space-y-2">
              <img
                src="/responsive-design-interface-mockup.jpg"
                alt="Responsive design mockup"
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-bold text-slate-950">
                Responsive and retina ready images.
              </h3>
              <p className="text-sm text-slate-700">
                Deliver a perfect website experience with high-resolution images
                and graphics.
              </p>
            </div>
          </div>

          {/* Top Right - Regular Updates */}
          <div className="flex flex-col justify-between rounded-2xl bg-linear-to-br from-pink-500 to-pink-600 p-8 text-white md:col-span-4 md:row-span-2">
            <div>
              <div className="mb-4 inline-block rounded-full bg-white/20 p-2 backdrop-blur">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">
                Reliable and regular updates.
              </h2>
              <p className="mb-8 text-sm text-pink-100">
                Get a life-time consistent and dependable updates featuring
                innovative new functionalities, performance enhancements, and
                resolved issues.
              </p>
            </div>
            <Button className="w-fit bg-white text-pink-600 hover:bg-white/90">
              See Changelog <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Middle Left - Theme Settings */}
          <div className="rounded-2xl bg-pink-100 p-8 md:col-span-6">
            <div className="mb-4 inline-block rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">
              Updated
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-950">
              New reworked theme settings panel.
            </h3>
            <p className="mb-6 text-sm text-slate-700">
              Our revamped theme settings panel offers a fresh and intuitive
              interface to deliver the best configuration experience.
            </p>
            <img
              src="/color-picker-interface-design-settings.jpg"
              alt="Theme settings panel"
              className="rounded-lg"
            />
          </div>

          {/* Middle Right - Color Modes */}
          <div className="rounded-2xl bg-slate-200 p-8 md:col-span-6">
            <div className="mb-4 inline-block rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-white">
              Popular
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-950">
              Light, dark and system color mode browsing.
            </h3>
            <p className="mb-6 text-sm text-slate-700">
              Designed to enhance the browsing experience by allowing you to
              choose between light, dark, or system-based themes.
            </p>
            <img
              src="/light-dark-mode-interface-comparison.jpg"
              alt="Color mode browsing"
              className="rounded-lg"
            />
          </div>

          {/* Bottom Left - Fast Loading */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:col-span-4">
            <h3 className="mb-4 text-2xl font-bold text-slate-950">
              Optimized for fast loading.
            </h3>
            <p className="mb-8 text-sm text-slate-700">
              Olio is a highly performant WordPress theme with good defaults and
              well optimized source code to make your site fast and SEO
              optimized.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-slate-950">97</span>
                  <span className="mb-1 text-lg font-semibold text-slate-950">
                    %
                  </span>
                </div>
                <p className="text-xs text-slate-600">PageSpeed score</p>
              </div>
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-slate-950">35</span>
                  <span className="mb-1 text-lg font-semibold text-slate-950">
                    %
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Less CSS and JS code files
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Center - Simple Import */}
          <div className="rounded-2xl bg-linear-to-br from-purple-100 to-purple-200 p-8 md:col-span-4">
            <h3 className="mb-4 text-2xl font-bold text-slate-950">
              Simple import.
            </h3>
            <p className="mb-6 text-sm text-slate-700">
              Easy customization with smart code delivery to import only the
              parts you are required for.
            </p>
            <img
              src="/demo-showcase-event-interface.jpg"
              alt="Simple import interface"
              className="rounded-lg"
            />
          </div>

          {/* Bottom Right - Hello World */}
          <div className="flex flex-col justify-between rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 p-8 text-white md:col-span-4">
            <div>
              <div className="mb-4 inline-block rounded-full bg-white/20 p-2 backdrop-blur">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">
                Hello World translate ready.
              </h2>
              <p className="mb-8 text-sm text-white/90">
                Use pre-made translations or customize your website for multiple
                languages.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lg">🇺🇸</span> English
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lg">🇪🇸</span> Español
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lg">🇯🇵</span> 日本語
              </div>
            </div>
          </div>
        </div>
        </>
    )
}