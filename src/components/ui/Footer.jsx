import React from 'react'

function Footer() {
  return (
    <div  className="bg-green-800 rounded-2xl text-white py-12 px-4 sm:px-6 sm:mx-6 lg:px-16 lg:mx-16 h-80 m-6">

         {/* Footer */}
 <div className="container mx-auto">
   <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
     <div>
       <div className="text-xl font-bold mb-4">Danapaani Foundation</div>
       <div className="flex items-center gap-4">
         <div className="w-8 h-8 bg-white/20 rounded-full"></div>
         <div className="w-8 h-8 bg-white/20 rounded-full"></div>
         <div className="w-8 h-8 bg-white/20 rounded-full"></div>
       </div>
     </div>

     <div>
       <h4 className="font-semibold mb-4">© 2025 Danapaani NGO</h4>
       <div className="space-y-2 text-sm">
         <p>Privacy Policy</p>
         <p>Terms of Use</p>
       </div>
     </div>

     <div className="md:col-span-2">
       <p className="text-sm leading-relaxed">
         Dana Pani is dedicated to fighting hunger and restoring dignity through every meal served. With compassion at our core, we believe that access to food is a basic human right — not a privilege. Join us in our mission to ensure that no one sleeps hungry.
       </p>
     </div>
   </div>
 </div>
    </div>
  )
}

export default Footer