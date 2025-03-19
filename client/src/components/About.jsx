export default function About() {
    return (
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            About Me
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </h2>
  
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative group">
                <img 
                  src="public/profile.jpg" 
                  alt="Profile" 
                  className="w-64 h-64 rounded-full object-cover shadow-xl transform group-hover:scale-105 transition-all"
                />
                <div className="absolute inset-0 rounded-full border-4 border-white/20 group-hover:border-blue-200 transition-all"></div>
              </div>
            </div>
  
            <div className="md:col-span-2 space-y-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm an AI and machine learning enthusiast with hands-on experience in full stack development. 
                Currently pursuing my Bachelor's in Computer Science with a focus on intelligent systems.
              </p>
  
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Education</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">🎓 B.Tech Computer Science Engineering</p>
                    <p className="text-sm text-gray-500">Graphic Era Hill University, Dehradun (2021-2025)</p>
                    <p className="text-blue-600 font-medium">GPA: 8.0/10.0</p>
                  </div>
                </div>
  
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Javascript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TensorFlow</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDB</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AWS</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }