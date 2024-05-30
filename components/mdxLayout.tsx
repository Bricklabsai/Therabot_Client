export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container px-6 mx-auto lg:px-20 pt-20">
      <div className="grid grid-cols-12">
        <div className="py-6 md:col-span-9 prose-li:list-disc prose-h2:text-2xl prose-h3:text-lg order-last md:order-first col-span-12 prose-slate prose-sm lg:prose-xl dark:prose-invert prose-headings:font-heading prose-headings:leading-relaxed max-sm:prose-headings:mb-4 max-sm:prose-headings:my-8 max-sm:prose-headings:text-3xl prose-headings:tracking-tighter prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400">
          {children}
        </div>
      </div>
    </div>
  );
}
