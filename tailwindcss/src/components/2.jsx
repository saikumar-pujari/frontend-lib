const TailwindDemo = () => {
  // Reusable section component
  const Section = ({ title, children }) => (
    <section className="my-8">
      <h2 className="text-2xl font-extrabold mb-4">{title}</h2>
      {children}
    </section>
  );

  // Reusable grid item component
  const GridItem = ({ color = "red", className = "" }) => {
    const colorClass =
      {
        red: "bg-red-600",
        yellow: "bg-yellow-600",
      }[color] || "bg-red-600";

    return <div className={`${colorClass} size-20 ${className}`}></div>;
  };

  return (
    <div className="p-6 space-y-12">
      {/* Position Examples */}
      <Section title="Position (uncomment to see examples)">
        {/* <div className="size-90 bg-pink-600 absolute top-0 left-0"></div>
        <div className="size-90 bg-pink-600 absolute bottom-0 right-0"></div>
        <div className="size-90 bg-pink-600 absolute top-0 right-0"></div>
        <div className="size-90 bg-pink-600 absolute bottom-0 left-0"></div> */}
      </Section>

      {/* Gradient Examples */}
      <Section title="Gradients (uncomment to see examples)">
        {/* <div className="bg-gradient-to-l from-red-500 to-green-500 size-96"></div>
        <div className="bg-gradient-to-r from-red-500 to-green-500 size-96"></div>
        <div className="bg-gradient-to-b from-red-500 to-green-500 size-96"></div> */}
      </Section>

      {/* Image Filters */}
      <Section title="Image Filters">
        <ul className="list-disc list-inside space-y-1">
          <li>Invert</li>
          <li>Grayscale</li>
          <li>Brightness</li>
          <li>Blur</li>
          <li>Hue</li>
        </ul>
      </Section>

      {/* Hover States */}
      <Section title="Interactive States">
        <div className="flex flex-wrap gap-4">
          <button 
            className="bg-blue-400 size-17 rounded-2xl hover:bg-amber-800 hover:p-10 transition-all" 
            type="button"
            aria-label="Hover demo"
          />
          <button 
            className="bg-blue-400 size-17 rounded-2xl hover:bg-amber-400 transition-colors" 
            type="button"
            aria-label="Hover last demo"
          />
          <button 
            className="bg-blue-400 size-17 rounded-2xl focus:bg-amber-700 transition-colors" 
            type="button"
            aria-label="Focus demo"
          />
          <button 
            className="bg-blue-400 size-17 rounded-2xl active:bg-red-400 transition-colors" 
            type="button"
            aria-label="Active demo"
          />
          <button 
            className="bg-blue-400 size-17 rounded-2xl disabled:bg-red-400 transition-colors" 
            type="button"
            disabled
            aria-label="Disabled demo"
          />
        </div>
      </Section>

      {/* Breakpoint Tags */}
      <Section title="Responsive Breakpoints">
        <p className="mb-2 text-gray-700">
          Breakpoints are based on pixel width. Use <code className="bg-gray-200 px-1 rounded">md:</code> for mobile 
          and <code className="bg-gray-200 px-1 rounded">lg:</code> for tablets.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><code>sm:</code> - Small (640px+)</li>
          <li><code>md:</code> - Medium (768px+)</li>
          <li><code>lg:</code> - Large (1024px+)</li>
          <li><code>xl:</code> - Extra Large (1280px+)</li>
          <li><code>2xl:</code> - 2X Large (1536px+)</li>
        </ul>
      </Section>

      {/* Column Layout */}
      <Section title="Column Layout">
        <div className="columns-2 md:columns-3 lg:columns-5 gap-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div 
              key={num} 
              className={`${num === 5 ? 'bg-pink-600' : 'bg-red-600'} p-4 mb-4 rounded`}
            >
              Item {num}
            </div>
          ))}
        </div>
      </Section>

      {/* Flexbox - Space Between */}
      <Section title="Flexbox - Space Between">
        <div className="flex gap-6 justify-between items-center min-h-screen flex-wrap">
          {Array(19).fill(null).map((_, i) => (
            <GridItem key={i} />
          ))}
        </div>
      </Section>

      {/* Flexbox - End Alignment */}
      <Section title="Flexbox - End Alignment">
        <div className="flex gap-6 justify-end items-center min-h-screen flex-wrap">
          {Array(19).fill(null).map((_, i) => (
            <GridItem key={i} />
          ))}
        </div>
      </Section>

      {/* Grid Layout */}
      <Section title="Grid Layout">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array(11).fill(null).map((_, i) => (
            <GridItem key={i} color="yellow" />
          ))}
          <GridItem color="yellow" className="row-span-3" />
          <GridItem color="yellow" className="col-span-2 md:col-span-3" />
        </div>
      </Section>

      {/* Transitions */}
      <Section title="Transitions & Transform">
        <div className="space-y-4">
          <button 
            className="bg-blue-400 px-6 py-3 rounded-xl hover:bg-amber-600 transition-colors" 
            onClick={() => console.log('Button clicked!')}
          >
            Click me - Color transition
          </button>
          <p className="bg-blue-400 inline-block px-6 py-3 rounded-xl hover:bg-amber-600 transition-all duration-300">
            Hover - Slow transition
          </p>
          <p className="bg-blue-400 inline-block px-6 py-3 rounded-xl hover:rotate-45 hover:bg-red-500 transition-transform duration-300">
            Hover - Rotate transform
          </p>
        </div>
      </Section>

      {/* Animations */}
      <Section title="Animations">
        <div className="flex flex-wrap gap-8">
          <div className="bg-red-600 size-40 animate-pulse rounded-full" />
          <div className="bg-red-600 size-40 animate-bounce rounded-full" />
          <div className="bg-red-600 size-40 animate-spin rounded-full" />
          <div className="bg-red-600 size-40 animate-ping rounded-full" />
          <div className="bg-red-600 size-40 rounded-full" />
        </div>
      </Section>
    </div>
  );
};

export default TailwindDemo;