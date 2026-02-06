const C = () => {
  return (
    <>
    <h1 className='text-green-50'>hey its the 50</h1>
    <h1 className='text-green-100'>hey its the 100</h1>
    <h1 className='text-green-200'>hey its the 200</h1>
    <h1 className='text-green-300'>hey its the 300</h1>
    <h1 className='text-green-400'>hey its the 400</h1>
    <h1 className='text-green-500'>hey its the 500</h1>
    <h1 className='text-green-600'>hey its the 600</h1>
    <h1 className='text-green-700'>hey its the 700</h1>
    <h1 className='text-green-800'>hey its the 800</h1>
    <h1 className='text-green-900'>hey its the 900</h1>
    <br />
    <h1 className='bg-red-50'>bg-50</h1>
    <h1 className='bg-red-100'>bg-100</h1>
    <h1 className='bg-red-200'>bg-200</h1>
    <h1 className='bg-red-300'>bg-300</h1>
    <h1 className='bg-red-400'>bg-400</h1>
    <h1 className='bg-red-500'>bg-500</h1>
    <h1 className='bg-red-600'>bg-600</h1>
    <h1 className='bg-red-700'>bg-700</h1>
    <h1 className='bg-red-800'>bg-800</h1>
    <h1 className='bg-red-900'>bg-900</h1>

    <h1 className='border-yellow-50 border-4'>border-50</h1>
    <h1 className='border-yellow-100 border-4'>border-100</h1>
    <h1 className='border-yellow-200 border-4'>border-200</h1>
    <h1 className='border-yellow-300 border-4'>border-300</h1>
    <h1 className='border-yellow-400 border-4'>border-400</h1>
    <h1 className='border-yellow-500 border-4'>border-500</h1>
    <h1 className='border-yellow-600 border-4'>border-600</h1>
    <h1 className='border-yellow-700 border-4'>border-700</h1>
    <h1 className='border-yellow-800 border-4'>border-800</h1>
    <h1 className='border-yellow-900 border-4'>border-900</h1>

   <h1 className='font-extrabold place-items-center'>padding and margin</h1> 
   <p className='p-2 m-10 bg-green-700 '>padding</p>
   <p className='px-5 mx-20 bg-red-600'>left and right</p>
   <p className='py-5 my-20 bg-red-900 border-4 border-black'>up and down</p>
   <p className="pt-20 mt-6 bg-green-300 border-4 border-black">margin and padding top</p>
   <p className="pb-20 mb-6 bg-green-300 border-4 border-black">margin and padding bottom</p>
   <p className="pl-20 ml-3 bg-green-300 border-4 border-black">marging and padding left</p>
   <p className="pr-20 mr-3 bg-green-300 border-4 border-black">margin and padding right</p>

   {/* extra use case */}
   <p className='p-[2px] m-[2px]'>only 2px padding and margin</p>
   <h1 className='font-extrabold place-items-center'>height and width</h1> 
   <h1>-----------------------width---------------</h1>
   <div className='bg-pink-200 w-10'>this is shit by the way</div>
   <div className='bg-pink-200 w-100'>this is shit by the way</div>
   <div className='bg-pink-200 min-w-5 max-w-20'>Min and max width</div>
   <div className='bg-pink-200  w-1/2'>w-1/2</div>
   <div className='bg-pink-200 w-1/3'>w-1/3</div>
   <p className='w-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sequi ex ratione quae aspernatur! Reiciendis enim voluptatem maiores nemo quia quisquam mollitia repudiandae similique, atque earum quod ipsa blanditiis quae aut adipisci recusandae? Incidunt necessitatibus reprehenderit placeat voluptates eligendi tenetur adipisci id doloribus vel assumenda. Accusantium minus, blanditiis ipsam vel quia alias mollitia molestias qui cum modi corporis sit praesentium voluptate sapiente aliquam ratione consequuntur odio aut officia tempore placeat perspiciatis incidunt! Rerum iure laboriosam consequuntur, natus ab pariatur porro recusandae ipsum? Quas atque, esse labore accusantium eligendi doloribus voluptatibus numquam eaque voluptas accusamus modi in quaerat. Fuga, laboriosam exercitationem.</p>
   <p className='w-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, placeat.</p>
   <p className='w-fit'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est vel aut repudiandae beatae mollitia optio eligendi? Maxime mollitia dolor assumenda sed impedit quasi quam earum animi veritatis praesentium itaque, numquam, repudiandae nam molestiae hic reprehenderit esse quod? Sint provident incidunt reprehenderit odit, quia a laboriosam dolore? Eveniet, temporibus magni asperiores perspiciatis, quaerat doloribus autem natus, excepturi et recusandae est sed molestias aperiam corrupti ipsam iure vero voluptate dignissimos nobis suscipit nam dolores quod. Optio illum ad officiis obcaecati autem officia blanditiis magnam cum a perspiciatis explicabo, dignissimos voluptate vero nulla eligendi minus quibusdam aperiam dolorem commodi, odio nemo? Nesciunt, libero?</p>
   <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non unde aliquam voluptatibus reiciendis repudiandae officiis tempora molestiae quam quas doloribus, ex excepturi omnis atque ut, reprehenderit dicta porro sed illum repellat aperiam sunt exercitationem iure. Possimus itaque repudiandae modi tempora culpa deleniti sint voluptatibus, voluptates nostrum aliquam facilis enim corrupti mollitia nulla saepe asperiores cupiditate distinctio rerum! Laboriosam, voluptates.</p>
   <p className="bg-green-400 w-auto hover:bg-orange-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit optio quo ratione natus voluptate a assumenda sapiente nobis doloremque, corporis et quasi magnam eius dicta ipsum deleniti ipsa autem.</p>

   <h1>-----------------------height---------------</h1>
   <div className="h-10 bg-amber-300">code is given and height is 10</div>
   <div className="h-100 bg-amber-900">code is given and height is 100</div>
   <div className="h-1/2 bg-amber-500">code is given and height is 1/2</div>
   <div className="h-screen bg-orange-600">code is for full screen</div>
   <div className="h-full bg-orange-100">code is for height full </div>
   <div className="h-screen bg-orange-100 max-h-20">max height is 20! </div>
   {/* tip:- when we have same height and width use directly as size ok!! */}
   <div className="w-50 h-50 bg-lime-500 rounded-full">circle</div>
   <div className="size-50 bg-lime-500 rounded-full">circle</div>

    </>
  )
}

export default C