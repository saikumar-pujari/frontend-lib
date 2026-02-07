const ColorSpacingDemo = () => {
  // Reusable section component
  const Section = ({ title, children }) => (
    <section className="my-8">
      <h2 className="text-2xl font-extrabold text-center mb-6">{title}</h2>
      {children}
    </section>
  );

  // Generate color scale items
  const ColorScale = ({ type, color, property = 'text' }) => {
    const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const propertyMap = {
      text: 'text',
      bg: 'bg',
      border: 'border'
    };
    
    return (
      <div className="space-y-2">
        {scales.map((scale) => {
          const className = property === 'border' 
            ? `border-${color}-${scale} border-4 p-2`
            : `${propertyMap[property]}-${color}-${scale} p-2`;
          
          return (
            <h3 key={scale} className={className}>
              {property === 'text' ? `Text Color ${scale}` : 
               property === 'bg' ? `Background ${scale}` : 
               `Border ${scale}`}
            </h3>
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-6 space-y-12 max-w-6xl mx-auto">
      {/* Color Scales */}
      <Section title="Text Color Scale (Green)">
        <ColorScale type="text" color="green" property="text" />
      </Section>

      <Section title="Background Color Scale (Red)">
        <ColorScale type="bg" color="red" property="bg" />
      </Section>

      <Section title="Border Color Scale (Yellow)">
        <ColorScale type="border" color="yellow" property="border" />
      </Section>

      {/* Padding and Margin */}
      <Section title="Padding & Margin">
        <div className="space-y-4">
          <div className="p-2 m-10 bg-green-700 text-white">
            All sides padding (p-2) & margin (m-10)
          </div>
          
          <div className="px-5 mx-20 bg-red-600 text-white">
            Horizontal padding (px-5) & margin (mx-20)
          </div>
          
          <div className="py-5 my-20 bg-red-900 text-white border-4 border-black">
            Vertical padding (py-5) & margin (my-20)
          </div>
          
          <div className="pt-20 mt-6 bg-green-300 border-4 border-black">
            Top padding (pt-20) & margin (mt-6)
          </div>
          
          <div className="pb-20 mb-6 bg-green-300 border-4 border-black">
            Bottom padding (pb-20) & margin (mb-6)
          </div>
          
          <div className="pl-20 ml-3 bg-green-300 border-4 border-black">
            Left padding (pl-20) & margin (ml-3)
          </div>
          
          <div className="pr-20 mr-3 bg-green-300 border-4 border-black">
            Right padding (pr-20) & margin (mr-3)
          </div>
          
          {/* Custom values */}
          <div className="p-[2px] m-[2px] bg-blue-200 border border-blue-400">
            Custom 2px padding & margin using arbitrary values
          </div>
        </div>
      </Section>

      {/* Width */}
      <Section title="Width Utilities">
        <div className="space-y-4">
          <div className="bg-pink-200 w-10 p-2">Fixed width w-10</div>
          
          <div className="bg-pink-200 w-full max-w-md p-2">
            Fixed width w-100 (use max-w for responsiveness)
          </div>
          
          <div className="bg-pink-200 min-w-20 max-w-64 p-2">
            Min width 20, max width 64
          </div>
          
          <div className="bg-pink-200 w-1/2 p-2">
            Half width (w-1/2)
          </div>
          
          <div className="bg-pink-200 w-1/3 p-2">
            One third width (w-1/3)
          </div>
          
          <div className="bg-pink-100 w-full p-2 mb-4">
            <p className="break-words">
              Full width paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Minima sequi ex ratione quae aspernatur! Reiciendis enim voluptatem maiores nemo 
              quia quisquam mollitia repudiandae similique, atque earum quod ipsa blanditiis.
            </p>
          </div>
          
          <div className="bg-pink-100 w-20 p-2 mb-4">
            <p className="break-words text-xs">
              Narrow width (w-20): Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          
          <div className="bg-pink-100 w-fit p-2 mb-4">
            <p>
              Fit content width (w-fit): This div fits its content width
            </p>
          </div>
          
          <div className="bg-pink-100 w-full p-2">
            <p>
              Full width (w-full): Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fuga non unde aliquam voluptatibus reiciendis repudiandae officiis tempora molestiae.
            </p>
          </div>
          
          <div className="bg-green-400 w-auto hover:bg-orange-500 transition-colors p-2 cursor-pointer">
            Auto width (w-auto) with hover effect
          </div>
        </div>
      </Section>

      {/* Height */}
      <Section title="Height Utilities">
        <div className="space-y-4">
          <div className="h-10 bg-amber-300 p-2 flex items-center">
            Fixed height h-10
          </div>
          
          <div className="h-32 bg-amber-900 text-white p-2 flex items-center">
            Fixed height h-32 (h-100 doesn't exist in standard Tailwind)
          </div>
          
          <div className="h-64 bg-amber-500 p-2 flex items-center">
            Fixed height h-64
          </div>
          
          <div className="h-screen bg-orange-600 text-white p-2 flex items-center justify-center">
            Full viewport height (h-screen)
          </div>
          
          <div className="h-full bg-orange-100 p-2 min-h-20 flex items-center">
            Height full (h-full) - requires parent with defined height, using min-h-20 for visibility
          </div>
          
          <div className="h-screen bg-orange-200 max-h-20 p-2 flex items-center overflow-hidden">
            Max height constraint (max-h-20) on h-screen
          </div>
        </div>
      </Section>

      {/* Size Utility */}
      <Section title="Size Utility (Equal Width & Height)">
        <p className="text-gray-700 mb-4">
          Pro tip: When width and height are the same, use <code className="bg-gray-200 px-2 py-1 rounded">size-*</code> instead of separate w-* and h-*
        </p>
        <div className="flex flex-wrap gap-8 items-center">
          <div>
            <p className="text-sm mb-2 text-gray-600">Old way (w-50 h-50):</p>
            <div className="w-32 h-32 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold">
              Circle
            </div>
          </div>
          
          <div>
            <p className="text-sm mb-2 text-gray-600">Better way (size-50):</p>
            <div className="size-32 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold">
              Circle
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ColorSpacingDemo;