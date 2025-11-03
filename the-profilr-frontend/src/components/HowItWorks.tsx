import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LogIn, Upload, Cpu, LayoutDashboard } from "lucide-react"; 

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <LogIn className="w-8 h-8 text-primary" />,
    title: "1. Secure Access",
    description:
      "Users securely sign up and log in via the dedicated Node.js/Express.js web server, establishing session control.",
  },
  {
    icon: <Upload className="w-8 h-8 text-primary" />,
    title: "2. Data Ingestion",
    description:
      "Raw data files (CSV, JSON) are uploaded directly to the high-speed, validated ingestion layer built with FastAPI.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "3. Core Profiling",
    description:
      "The FastAPI backend executes data validation, runs Pandas analysis scripts, and saves detailed metrics to MongoDB.",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    title: "4. Visualize Insights",
    description:
      "Results are retrieved by the React frontend and displayed in the interactive dashboard for final analysis and filtering.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our Project's{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Pipeline{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        A breakdown of the microservice architecture, showing how data flows through FastAPI, Node.js, MongoDB, and the React frontend.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
