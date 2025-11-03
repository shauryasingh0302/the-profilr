import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { BookOpen } from "lucide-react"; 

export const Hero = () => {

  return (
    <>
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                The Profilr
              </span>{" "}
              empowers
            </h1>{" "}
            data{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                visualization
              </span>{" "}
              and insights
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            A modern tool for data profiling, validation, and insights — powered by FastAPI, MongoDB, Node.js/Express.js, and an interactive React frontend.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            
            <a
              href="/login" 
              className={`w-full md:w-1/3 ${buttonVariants({
                variant: "default",
              })}`}
            >
              Start Profiling
            </a>

            <a
              href="/docs" 
              className={`w-full md:w-1/3 flex items-center justify-center ${buttonVariants({
                variant: "outline",
              })}`}
            >
              Quick Start Guide
              <BookOpen className="ml-2 w-5 h-5" />
            </a>
            
          </div>
        </div>

        <div className="z-10">
          <HeroCards />
        </div>
        <div className="shadow"></div>
      </section>
    </>
  );
};
