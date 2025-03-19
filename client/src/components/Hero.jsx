import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const words = ['Student', 'Software Engineer', 'Fullstack Developer', 'ML & AI Enthusiast'];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;
      
      // Current length of displayed text
      const newDisplayText = shouldDelete 
        ? currentWord.substring(0, displayText.length - 1) 
        : currentWord.substring(0, displayText.length + 1);
      
      setDisplayText(newDisplayText);
      
      // Adjust typing speed - faster when deleting
      setTypingSpeed(isDeleting ? 120 : 150);
      
      // If completed typing the word
      if (!isDeleting && newDisplayText === currentWord) {
        // Pause at the end of the word
        setTypingSpeed(2000); // Wait 2 seconds before deleting
        setIsDeleting(true);
      } 
      // If completed deleting the word
      else if (isDeleting && newDisplayText === '') {
        setIsDeleting(false);
        setTypingSpeed(500); // Slight pause before starting next word
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section id="home" className="min-h-screen pt-24 px-4 flex items-center bg-gradient-to-br from-blue-900 to-blue-600">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-white animate-fade-in-down">
          Aditya Pratap Singh
        </h1>
        
        <div className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          <div className="inline-flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <div className="h-8 inline-flex items-center">
              <span className="relative">
                {displayText}
                <span className="absolute right-[-4px] top-0 w-[2px] h-full bg-white animate-blink"></span>
              </span>
            </div>
          </div>
        </div>

        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating intelligent solutions through machine learning and full-stack development
        </p>
      </div>
    </section>
  );
}