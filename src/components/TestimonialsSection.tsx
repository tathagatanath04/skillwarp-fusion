
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "EduForge completely transformed how I learn programming. The AI-powered roadmap saved me months of figuring out what to study next.",
    author: "Alex Johnson",
    title: "Software Engineer",
    avatar: "AJ",
    rating: 5,
  },
  {
    quote: "The real-time collaboration feature made group projects actually enjoyable. We coded together and solved problems as a team, despite being in different countries.",
    author: "Maria Rodriguez",
    title: "Computer Science Student",
    avatar: "MR",
    rating: 5,
  },
  {
    quote: "I was stuck on a complex algorithm for days. The AI tutor not only explained the concept, but also helped me debug step-by-step. Game changer!",
    author: "David Chen",
    title: "Data Scientist",
    avatar: "DC",
    rating: 5,
  },
  {
    quote: "The auto-generated portfolio got me three job interviews in one week. Employers were impressed by how it showcased my skills and projects.",
    author: "Sarah Williams",
    title: "Front-end Developer",
    avatar: "SW",
    rating: 5,
  },
  {
    quote: "As someone with ADHD, traditional learning platforms never worked for me. EduForge's personalized approach and interactive exercises keep me engaged.",
    author: "Michael Lee",
    title: "Full-stack Developer",
    avatar: "ML",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Hear from learners who have accelerated their careers with EduForge.
          </p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="border border-slate-200 dark:border-slate-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-yellow-400"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-lg mb-6 italic">"{testimonial.quote}"</blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-eduforge-100 dark:bg-eduforge-900/30 flex items-center justify-center text-eduforge-700 dark:text-eduforge-300 font-medium">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
