import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EndorsementProps { 
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const endorsements: EndorsementProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=11", 
    name: "Saksham",
    userName: "Data Architect",
    comment: "The FastAPI pipeline for data ingestion is robust and incredibly fast. A solid microservice approach.",
  },
  {
    image: "https://i.pravatar.cc/150?img=17", 
    name: "Shreya Mishra",
    userName: "Software Engineering",
    comment: "Excellent command of a modern tech stack (FastAPI, Node.js, MongoDB). This shows real full-stack capability.",
  },
  {
    image: "https://i.pravatar.cc/150?img=53", 
    name: "Sanskar Gupta",
    userName: "UX Designer",
    comment: "The React dashboard provides the interactive clarity needed for complex profiling results. Great user experience focus.",
  },
  {
    image: "https://i.pravatar.cc/150?img=33", 
    name: "Vandit Singh",
    userName: "Backend Developer",
    comment: "Node/Express handling auth and web server tasks simplifies deployment. A smart division of labor in the backend.",
  },
  {
    image: "https://i.pravatar.cc/150?img=25", 
    name: "Shreyansh Rai",
    userName: "Data Scientist",
    comment: "The Pandas profiling metrics generated are exactly what is required for pre-analysis data quality checks.",
  },
  {
    image: "https://i.pravatar.cc/150?img=7", 
    name: "Parth Singh",
    userName: "Project Reviewer",
    comment: "A highly ambitious and successful third-year project. The team clearly mastered microservices integration.",
  },
];
// -------------------------------------------------------------


export const Testimonials = () => {
  return (
    <section
      id="endorsements"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        The Profilr's Architecture
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Endorsements highlighting the technical rigor and practical value of The Profilr's design and features.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {endorsements.map(
          ({ image, name, userName, comment }: EndorsementProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>{name.substring(0, 2)}</AvatarFallback> 
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
