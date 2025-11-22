export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Name */}
        <div className="text-[16px] font-semibold tracking-tight">
          Ivan&nbsp;Li <span className="font-normal">[李孝蕤]</span>
        </div>

        {/* Navigation */}
        <nav className="text-[16px] hidden gap-8 text-sm text-neutral-700 md:flex">
          <a href="#work" className="hover:text-black">
            Work
          </a>
          <a href="#experience" className="hover:text-black">
            Experience
          </a>
          <a href="#about-me" className="hover:text-black">
            About
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </nav>

        {/* Resume button */}
        <button className="text-[16px] rounded-full bg-black px-4 py-2 text-xs font-medium text-white hover:bg-neutral-900">
          View&nbsp;Resume
        </button>
      </div>
    </header>
  );
}
