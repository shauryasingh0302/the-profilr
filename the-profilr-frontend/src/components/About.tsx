import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          
          <div className="w-[300px] flex items-center justify-center rounded-lg p-8 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Meet{" "}
                </span>
                The Profilr Team
              </h2>
              
              <p className="text-xl text-muted-foreground mt-4">
                The Profilr is a core project developed by Naina, Palak, and Shaurya, third-year undergraduate students focusing on full-stack data solutions. We built a robust architecture using FastAPI for high-speed profiling and Node.js/Express.js for secure user management.
              </p>
            </div>

            <Statistics /> 
          </div>
        </div>
      </div>
    </section>
  );
};
