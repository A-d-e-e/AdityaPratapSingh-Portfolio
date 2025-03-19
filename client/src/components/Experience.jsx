export default function Experience() {
    const experiences = [
      {
        company: "Instruments Research & Development Establishment [IRDE], DRDO, Dehradun",
        position: "Research Student Trainee",
        duration: "August 2024 - September 2024",
        tasks: [
          "Pioneered research evaluating 20+ AI/ML-based digital video stabilization algorithms, identifying 3 major inefficiencies and enhancing model efficiency by 25%.",
          "Engineered a Hybrid Neural Fusion model for Full-frame Video Stabilization, reducing processing time by 30% while maintaining 87% accuracy across 150 test cases."
        ]
      },
      {
        company: "Digital Hub Solutions, Noida S-62",
        position: "Cloud Support Intern",
        duration: "July 2024 - August 2024",
        tasks: [
          "Resolved 40+ cloud-related issues weekly, reducing average ticket resolution time by 35% and improving client satisfaction scores by 25%.",
          "Developed and deployed a domain-specific chatbot- ”DHSupBot” using AWS’ Amazon Lex, increasing sales-qualified leads by estimated 60% and reduced onboarding time by 50%.",
          "Gained hands-on experience with AWS services like EC2 and distributed systems architecture"
        ]
      }
    ]
  
    return (
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Experience
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="relative bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {experience.position}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {experience.company}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {experience.duration}
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  {experience.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }