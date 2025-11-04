import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";



interface EndorsementProps {
  _id?: string;
  image: string;
  name: string;
  role: string;
  comment: string;
  createdAt?: string;
}

export const Testimonials = () => {
  const defaultAvatar =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [endorsements, setEndorsements] = useState<EndorsementProps[]>([]);
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    comment: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/reviews`);
        if (!res.ok) throw new Error("Failed to fetch reviews");
        const data = await res.json();
        setEndorsements(data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Could not load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [API_BASE_URL]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newReview.name || !newReview.comment || !newReview.role) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to submit review.");
        return;
      }
      
      setError(""); 
      
      setEndorsements((prev) => [data.review, ...prev]);
      setNewReview({ name: "", role: "", comment: "" });
    } catch (err) {
      console.error("Error submitting review:", err);
      setError("Unable to connect to the server.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="endorsements" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          People Love{" "}
        </span>
        The Profilr's Architecture
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Endorsements highlighting the technical rigor and practical value of The
        Profilr’s design and features.
      </p>

      {/*Display states */}
      {loading ? (
        <p className="text-center text-muted-foreground">Loading reviews...</p>
      ) : error && endorsements.length === 0 ? (
        <p className="text-center text-destructive">{error}</p>
      ) : endorsements.length === 0 ? (
        <p className="text-center text-muted-foreground">No reviews yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {endorsements.map(({ _id, image, name, role, comment }) => (
            <Card
              key={_id || name}
              className="transition-all hover:shadow-lg hover:scale-[1.01] dark:hover:shadow-black/20"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt={name} src={image || defaultAvatar} />
                  <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {comment}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/*Add Review Form */}
      <div className="mt-20">
        <Card className="max-w-2xl mx-auto border border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              Add Your Review
            </CardTitle>
            <CardDescription className="text-center">
              We value your experience with The Profilr — share your thoughts.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 mt-4 text-foreground"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newReview.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="e.g. Shaurya Singh"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">
                    Your Role / Designation{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={newReview.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="e.g. Full Stack Developer"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">
                  Your Review <span className="text-destructive">*</span>
                </label>
                <textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[100px]"
                  placeholder="Write your thoughts..."
                />
              </div>

              {error && (
                <p className="text-sm text-destructive font-medium">{error}</p>
              )}

              <Button
                type="submit"
                disabled={submitting}
                className="mt-4 self-center sm:self-end"
              >
                {submitting ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};