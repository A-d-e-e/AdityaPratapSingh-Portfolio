export default function Education() {
    const education = [
      {
        degree: "BSc Computer Science",
        university: "Tech University",
        duration: "2021 - Present",
        courses: [
          "Machine Learning Fundamentals",
          "Neural Networks & Deep Learning",
          "Web Development"
        ]
      },
      {
        degree: "High School Diploma",
        university: "Science Academy",
        duration: "2019 - 2021",
        courses: [
          "Advanced Mathematics",
          "Computer Fundamentals",
          "Physics"
        ]
      }
    ]
  
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md relative border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-gray-600 mb-2">{item.university}</p>
                <p className="text-sm text-gray-500 mb-4">{item.duration}</p>
                <ul className="list-disc pl-6 text-gray-600">
                  {item.courses.map((course, i) => (
                    <li key={i} className="mb-2">{course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }