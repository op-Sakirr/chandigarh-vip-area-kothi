import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Kothi for Sale in Chandigarh VIP Area | Luxury Homes',
  description: 'Looking for a luxury kothi for sale in a VIP area of Chandigarh? Explore premium independent houses and bungalows with Aisha Real Estate. Call 95015 74040 for property enquiries and details.',
  openGraph: {
    title: 'Kothi for Sale in Chandigarh VIP Area | Luxury Homes',
    description: 'Looking for a luxury kothi for sale in a VIP area of Chandigarh? Explore premium independent houses and bungalows with Aisha Real Estate. Call 95015 74040 for property enquiries and details.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kothi for Sale in Chandigarh VIP Area | Luxury Homes',
    description: 'Looking for a luxury kothi for sale in a VIP area of Chandigarh? Explore premium independent houses and bungalows with Aisha Real Estate. Call 95015 74040 for property enquiries and details.',
  },
};

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-slate-900">Kothi for Sale in Chandigarh VIP Area</h1>
      <p className="mb-4">Looking for a kothi for sale in a VIP area of Chandigarh? Whether you are searching for a luxury family home, an independent kothi, or a premium residential property in a prime location, choosing the right property is an important decision.</p>
      <p className="mb-6">Chandigarh is known for its planned sectors, organised roads, green spaces, and established residential neighbourhoods. Buyers looking for a luxury kothi in Chandigarh often consider factors such as location, property size, layout, privacy, nearby facilities, and connectivity.</p>
      <p className="mb-6 bg-slate-100 p-4 rounded-lg font-semibold text-lg">For enquiries about a kothi for sale in Chandigarh, call <a href="tel:+919501574040" className="text-blue-600 underline">95015 74040</a>.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Luxury Kothi in Chandigarh's VIP Areas</h2>
      <p className="mb-4">A luxury kothi offers an independent living space with the privacy and flexibility many homebuyers prefer. Depending on the property, features may include spacious bedrooms, multiple living areas, parking facilities, private outdoor spaces, and modern interiors.</p>
      
      <div className="bg-slate-50 border rounded-xl p-6 my-8">
        <h3 className="font-bold text-lg mb-4">Featured Property Placeholder</h3>
        <div className="aspect-video bg-slate-200 rounded-lg mb-4 flex items-center justify-center text-slate-500">Property Image Placeholder</div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
            <p><strong>Location:</strong> Sector 5/8/9/10/11</p>
            <p><strong>Price Range:</strong> Request for Quote</p>
            <p><strong>Details:</strong> 5 BHK Luxury Kothi with Garden</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Chandigarh Mein Premium Kothi in Prime Locations</h2>
      <p className="mb-4">The location of a residential property can influence everyday convenience, accessibility, and overall suitability. Buyers searching for a premium kothi in Chandigarh should compare neighbourhoods and individual properties rather than relying on the term "VIP area" alone.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Luxury House for Sale in Chandigarh</h2>
      <p className="mb-4">If you are exploring a luxury house for sale in Chandigarh, an independent kothi or bungalow may be worth considering, depending on your preferred layout and lifestyle.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Chandigarh Mein Bungalow for Sale</h2>
      <p className="mb-4">A bungalow for sale in Chandigarh may appeal to buyers looking for independent residential space and greater flexibility in how they use their home.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Independent Kothi in Chandigarh for Families</h2>
      <p className="mb-4">An independent kothi can offer a different living experience from an apartment, particularly for families who value privacy and additional space.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Premium Residential Property in Chandigarh</h2>
      <p className="mb-4">Choosing a premium residential property involves more than appearance and location. The property's legal status, construction quality, neighbourhood, maintenance requirements, and resale considerations also deserve attention.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">Where can I find a kothi in a VIP area of Chandigarh?</summary>
            <p className="mt-2 text-sm text-slate-700">You can explore independent houses and premium residential properties in Chandigarh's established residential sectors.</p>
        </details>
        <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">What is the price of a luxury kothi in Chandigarh?</summary>
            <p className="mt-2 text-sm text-slate-700">The price varies according to the sector, plot size, construction, property condition, amenities, and current market conditions. Contact us to enquire.</p>
        </details>
      </div>

      <div className="mt-12 bg-blue-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Find Your Preferred Kothi in Chandigarh</h2>
        <p className="mb-6">Share your preferred location, budget, and property requirements to enquire about suitable options.</p>
        <a href="tel:+919501574040" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg">Call 95015 74040</a>
      </div>
    </main>
  );
}
