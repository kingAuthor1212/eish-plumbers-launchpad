export function TopBar() {
  return (
    <div className="bg-hazard text-background font-heading text-[11px] sm:text-sm tracking-[0.2em] py-1.5 px-4 sm:px-12 flex justify-between items-center uppercase font-black relative z-30">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="size-2 bg-background animate-pulse" />
        <span>Rapid Response Active</span>
      </div>
      <span className="hidden sm:inline-block">PIRB Registered // Gauteng</span>
      <a href="tel:0114750719" className="sm:hidden font-black">011 475 0719</a>
    </div>
  );
}
