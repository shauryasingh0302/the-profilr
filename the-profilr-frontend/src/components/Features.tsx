import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/fastapi.png";
import image3 from "../assets/panda.png";
import image4 from "../assets/sec.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "High Speed Data Ingestion (FastAPI)",
    description:
      "Our backend is built on FastAPI to ensure rapid data ingestion and validation, efficiently handling the uploads and initial processing.",
    image: image4,
  },
  {
    title: "Data Profiling with Pandas",
    description:
      "Leveraging Python's Pandas library, we generate essential metrics like completeness, type distribution, and missing values for true data quality assessment.",
    image: image3,
  },
  {
    title: "Secure Auth & Web Server",
    description:
      "User accounts are managed by a dedicated Node.js/Express.js service, ensuring secure login, session management, and separation of concerns.",
    image: image,
  },
];

const featureList: string[] = [
  "Microservice Architecture",
  "MongoDB Persistence",
  "FastAPI Data Pipeline",
  "Node.js Authentication",
  "Real-Time Data Views",
  "Responsive Design",
  "Python Integration",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        The Profilr's{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Technical
        </span> Capabilities
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
