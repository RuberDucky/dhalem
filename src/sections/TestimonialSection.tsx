import TestimonialCard from "@/components/TestimonialComponents";

const testimonials = [
  {
    name: "John Doe",
    location: "New York, USA",
    testimonial: "This service was exceptional. The team was professional and attentive to our needs.",
    imageSrc: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Jane Smith",
    location: "London, UK",
    testimonial: "Highly recommend! The process was smooth, and we found our dream home in no time.",
    imageSrc: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Isaiah Carter",
    location: "Taiwan",
    testimonial: "Highly recommend! The process was smooth, and we found our dream home in no time.",
    imageSrc: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  // Add more testimonials here
];

export const TestimonialsSection = () => {
  return (
    <div className="container mx-auto mt-4 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-[#023524] text-start mb-8">
        What Says from Our Happy Customers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            location={testimonial.location}
            testimonial={testimonial.testimonial}
            imageSrc={testimonial.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};
