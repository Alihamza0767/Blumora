import { BlumoraIcon } from "./blumora-icon"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 relative flex-shrink-0">
              <img
                src="/blumora-white.png"
                alt="Blumora Logo"
                className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            <h3 className="text-2xl font-semibold">{"Blumora"}</h3>
          </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {"A strategic creative agency helping brands bloom with clarity and intention."}
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6 text-primary-foreground/60">{"Navigate"}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#philosophy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {"Philosophy"}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {"Services"}
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {"Process"}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {"Contact"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6 text-primary-foreground/60">{"Connect"}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.instagram.com/blumora.media/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {"Instagram"}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {"LinkedIn"}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {"Twitter"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>{`© ${currentYear} Blumora. All rights reserved.`}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              {"Privacy"}
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              {"Terms"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
