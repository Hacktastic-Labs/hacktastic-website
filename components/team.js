import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Team() {
  const testimonials = [
    {
      quote:
        "csmaxxing and dilettante, a person interested in computers and art with a passion for hackathons",
      name: "Pushkar Aggarwal",
      designation: "co-founder",
      src: "https://res.cloudinary.com/dztauqacf/image/upload/v1745083789/20240126105925_IMG_6337_g0uvb2.jpg",
    },
    {
      quote:
        "so long as I don't give up the possibility of winning will never fall to zero",
      name: "Pranay Sharma",
      designation: "co-founder",
      src: "https://res.cloudinary.com/dztauqacf/image/upload/v1745078611/Snapchat-694364382_au9bsu.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
