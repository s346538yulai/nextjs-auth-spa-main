import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-gray-700 text-white py-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to ConnectHub</h1>
          <p className="text-lg">Stay connected with friends and discover new interests.</p>
          <div className="flex justify-center mt-4 space-x-2">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="rounded-full px-4 py-2 w-2/3 text-gray-800 focus:outline-none"
            />
            <button className="bg-black text-white rounded-full px-6 py-2 font-semibold">
              Post
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <button className="bg-gray-500 text-white rounded-full px-4 py-1">All Posts</button>
            <button className="bg-gray-500 text-white rounded-full px-4 py-1">Friends</button>
            <button className="bg-gray-500 text-white rounded-full px-4 py-1">Groups</button>
          </div>
        </div>
      </div>

      {/* Feed Section */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-8 space-y-8">
        <h2 className="text-2xl font-bold text-gray-800">Latest from Friends</h2>
        <p className="text-gray-500">See what your friends are up to!</p>
        <div className="flex space-x-4 mt-4">
          <button className="border border-gray-800 text-gray-800 rounded px-4 py-1">See All</button>
          <button className="bg-black text-white rounded px-4 py-1">View More</button>
        </div>

        {/* Post Cards */}
        {[
          {
            name: 'Jane Doe',
            time: '2h ago',
            location: 'London',
            imageAlt: 'Jane enjoying a sunset.',
            text: 'What a beautiful day!',
            tags: ['Sunset', 'Nature'],
          },
          {
            name: 'John Smith',
            time: '3h ago',
            location: 'New York',
            imageAlt: 'John at the coffee shop.',
            text: 'Started my day with a great coffee!',
            tags: ['Coffee', 'Morning'],
          },
          {
            name: 'Emily Jones',
            time: '1d ago',
            location: 'Sydney',
            imageAlt: 'Emily at the beach.',
            text: 'Beach day is the best day!',
            tags: ['Beach', 'Relaxation'],
          },
        ].map((post, idx) => (
          <article key={idx} className="bg-white rounded-lg shadow">
            <header className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-800">{post.name}</p>
                  <p className="text-xs text-gray-500">{post.time} • {post.location}</p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700">⋯</button>
            </header>
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
              {post.imageAlt}
            </div>
            <div className="px-4 py-3">
              <p className="text-gray-800 mb-2">{post.text}</p>
              <div className="flex space-x-2 text-xs">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 px-2 py-1 rounded-full text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* Footer Links */}
      <footer className="bg-white py-6">
        <div className="max-w-3xl mx-auto px-4 flex justify-between text-sm text-gray-600">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Follow Us on Social Media</a>
        </div>
      </footer>
    </div>
  );
}
