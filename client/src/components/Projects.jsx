export default function Projects() {
    const projects = [
      {
        title: "Fullstack Real-Time Sign Language Translation",
        description: "Built a fullstack ASL translator with live feed from OpenCV, and Flask for RestfulAPIs.",
        tech: ["Python", "React", "Flask"],
        link: "https://github.com/A-d-e-e/Fullstack-Sign-Language-Prediction"
      },
      {
        title: "Unbeatable Tic-Tac-Toe",
        description: "An impossible opponent at Tic-Tac-Toe crafted using Minmax Algorithm and Alpha-Beta Pruning.",
        tech: ["Python", "Artificial Intelligence", "Tkinter GUI"],
        link: "https://github.com/A-d-e-e/CODSOFT/blob/main/TTT.py"
      },
      {
        title: "House Price Prediction",
        description: "Predicting house prices using linear regression based on a dataset covering over 1,50,000+ epochs.",
        tech: ["Python", "Machine Learning", "Scikit-Learn"],
        link: "https://github.com/A-d-e-e/Prodigy_ML_01/blob/main/task1.ipynb"
      }
    ]
  
    return (
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }