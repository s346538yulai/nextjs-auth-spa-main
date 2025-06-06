import Image from "next/image";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-base">
      {/* Tabs*/}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between">
            {["Hot Topics", "News", "Events", "Resources", "Community"].map((label, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 ${
                  idx === 0
                    ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
                    : "text-gray-700 hover:text-purple-500"
                }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/*zoom-in*/}
          <div className="relative w-full h-80 rounded-md overflow-hidden group">
            <Image
              src="/images/group_chat.jpg"
              alt="Banner 图片"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-md animate-fade-in">
                Welcome to Social Awareness Web!
              </h1>
            </div>
          </div>
        </div>
      </div>


      {/* 3. main content*/}
      <div className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-64 rounded-md overflow-hidden">
              <Image
                src="/images/SA_skills.webp"
                alt="content_left"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4">
              <h2>Caring about mental health is a social responsibility</h2>
              <h3 className="text-lg text-gray-500">Everyone's emotions deserve attention</h3>
              <p>
                In this fast-paced era, anxiety, loneliness and stress have become common emotions. 
                It is our common responsibility to raise awareness of mental health and encourage more people to bravely seek support. 
                Replace labels with understanding and break silence with care.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 order-2 lg:order-1">
              <h2>Equality is not just a right, but also respect</h2>
              <h3 className="text-lg text-gray-500">Gender should not define opportunities.</h3>
              <p>
                Social progress should be based on a fair starting point for everyone. Regardless of gender, 
                everyone should have equal opportunities for education, work and life. Let's break prejudice together 
                and make respect the norm.
              </p>
            </div>
            <div className="relative w-full h-64 rounded-md overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/SA_Students.jpg"
                alt="content_right"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full h-48 rounded-md overflow-hidden">
              <Image
                src="/images/SA.jpg"
                alt="pic 1"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative w-full h-48 rounded-md overflow-hidden">
              <Image
                src="/images/unnamed.png"
                alt="pic 2"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div>
            <p>
              We come from different backgrounds, but share the same world. Accepting diverse cultures and promoting inclusive exchanges are the key to building a more harmonious society. 
              Listen to each other's stories and let diversity become a bridge for mutual understanding.
              </p>
          </div>
        </div>
      </div>

      {/* 4. Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center space-x-4 mb-8 md:mb-0">
              <span className="text-gray-600 text-sm">
                © 2025 Social Awareness Web.
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
              <div>
                <h4 className="font-semibold mb-4">Our Goal</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Promote awareness of social issues</li>
                  <li>Provide a platform for open expression</li>
                  <li>Encourage thoughtful dialogue and change</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Topics</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Social justice & equity</li>
                  <li>Mental health awareness</li>
                  <li>Environmental concerns</li>
                  <li>Diversity & inclusion</li>
                  <li>Public education</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Get Involved</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="hover:text-gray-800 cursor-pointer">Share your story</li>
                  <li className="hover:text-gray-800 cursor-pointer">Join community events</li>
                  <li className="hover:text-gray-800 cursor-pointer">Volunteer or donate</li>
                  <li className="hover:text-gray-800 cursor-pointer">Connect with us</li>
                  <li className="hover:text-gray-800 cursor-pointer">Contact support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
