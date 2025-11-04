import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Get Your{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Data Quality{" "}
            </span>
            Report Now
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Stop manually checking CSVs. Upload your data and instantly receive a
            comprehensive report on completeness, structure, and potential
            errors, powered by FastAPI and Pandas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:col-start-2">
          <a href="/login" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Start Profiling</Button>
          </a>

          <a href="/docs" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              View documentation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
