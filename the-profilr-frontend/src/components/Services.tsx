import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, BarChart3, Lock } from "lucide-react"; 
import dataImage from "../assets/data.svg";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Comprehensive Data Profiling",
    description:
      "Instantly assess data quality. Get detailed statistics on completeness, missing values, and type distribution using the Python/Pandas core.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Interactive Visualization Dashboard",
    description:
      "Turn raw numbers into actionable insights. Explore, filter, and drill down into profile results using the modern React visualization dashboard.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Secure & Scalable Architecture",
    description:
      "Built on a robust stack (FastAPI, Node.js, MongoDB) to ensure fast processing, secure user authentication, and flexible data storage.",
    icon: <Lock className="w-6 h-6" />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Key{" "}
            </span>
            Features & Benefits
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            The Profilr demonstrates tangible value by combining high-speed profiling with a focus on data quality and user clarity.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={dataImage}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt=""
        />
      </div>
    </section>
  );
};
