export default function Skills() {
    const skills = [
      { name: "Python", category: "AI/ML" },
      { name: "TensorFlow", category: "AI/ML" },
      { name: "PyTorch", category: "AI/ML" },
      { name: "JavaScript", category: "Web Dev" },
      { name: "React", category: "Web Dev" },
      { name: "Node.js", category: "Web Dev" },
      { name: "SQL", category: "Database" },
      { name: "Git", category: "Tools" }
    ]
  
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-4 border rounded-lg hover:bg-gray-50 transition"
              >
                <span className="text-gray-500 text-sm">{skill.category}</span>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }