const C = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };
    
  return (
    <div className="space-y-6 p-8">
      {/* Responsive backgrounds with breakpoints */}
      <h1 className="text-2xl font-semibold bg-red-500 md:bg-yellow-500 lg:bg-green-600 p-4 rounded-lg">
        Responsive Breakpoints Demo (sm: 700px, lg: 900px)
      </h1>

      {/* Custom padding demos */}
      <div className="bg-blue-300 p-sai rounded-lg">
        Custom padding using CSS variable (100px)
      </div>
      
      <div className="bg-blue-300 p-[25.6px] rounded-lg">
        Arbitrary padding value (25.6px)
      </div>

      {/* Custom margin demo */}
      <div className="bg-pink-600 p-20 m-m-sai rounded-lg">
        <div className="bg-red-600 p-4 rounded">
          Custom margin (100px all around)
        </div>
      </div>

      {/* Custom component styling */}
      <sai>Custom Element Styling</sai>

      {/* Dark mode demo */}
      <div className="bg-red-300 text-black dark:bg-black dark:text-white p-6 rounded-lg transition-colors">
        Dark mode toggle demo - click button below
      </div>

      <button 
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>

      {/* Custom styled element */}
      <sony>Custom Sony Element</sony>

      {/* Custom button components */}
      <div className="flex gap-2">
        <button className="btn">Base Button</button>
        <button className="btn btn-blue">Blue Button</button>
      </div>
    </div>
  );
};

export default C;