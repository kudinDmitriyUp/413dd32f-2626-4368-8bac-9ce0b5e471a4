"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import FeatureCardThirteen from '@/components/sections/feature/FeatureCardThirteen';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TeamCardFour from '@/components/sections/team/TeamCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, BookOpen, Award, Users } from "lucide-react";

export default function LearningPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="largeSizeMediumTitles"
      background="animatedGrid"
      cardStyle="neon-glow"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878758190-kdbbrzog.jpg"
          logoAlt="Scooby Doo Learning Logo"
          brandName="Scooby's Learning Lab"
          button={{
            text: "Start Learning",
            href: "#hero"
          }}
          className="bg-white shadow-sm"
          buttonClassName="px-6 py-2 rounded-sharp"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Solve Mysteries While Learning"
          description="Join Scooby Doo and his friends on an exciting adventure where every mystery solved helps you master new skills. Learn through fun, interactive adventures designed for kids."
          tag="Adventure Learning"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Your Adventure",
              href: "#learning"
            },
            {
              text: "Watch Demo",
              href: "#testimonials"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878759083-6b1lgz61.jpg"
          imageAlt="Scooby Doo and friends solving mysteries"
          imagePosition="right"
          className="py-20"
          titleClassName="text-5xl font-bold"
          descriptionClassName="text-lg"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Learning Through Adventure"
          description={[
            "Scooby's Learning Lab combines the magic of mystery-solving with proven educational methods. Kids learn reading, math, problem-solving, and critical thinking while enjoying thrilling adventures with beloved characters."
          ]}
          metrics={[
            {
              label: "Active Young Learners",
              value: "50K+"
            },
            {
              label: "Hours of Learning Fun",
              value: "2M+"
            }
          ]}
          useInvertedBackground="noInvert"
          showBorder={true}
          titleClassName="text-6xl font-bold"
          descriptionClassName="text-xl"
        />
      </div>

      <div id="learning" data-section="learning">
        <FeatureCardThirteen
          title="Learning Modules"
          description="Each mystery is packed with educational content covering different subjects and skills."
          tag="Educational Adventure"
          tagIcon={BookOpen}
          features={[
            {
              id: "01",
              title: "Reading Mysteries",
              description: "Solve reading comprehension mysteries while building vocabulary and understanding. Each case teaches new words in context."
            },
            {
              id: "02",
              title: "Math Challenges",
              description: "Use math skills to crack codes, solve puzzles, and help Scooby track clues. Learn addition, subtraction, multiplication through real scenarios."
            },
            {
              id: "03",
              title: "Logic Puzzles",
              description: "Develop critical thinking and problem-solving abilities by piecing together clues and solving the mystery alongside the gang."
            },
            {
              id: "04",
              title: "Science Exploration",
              description: "Discover scientific concepts through investigation-based learning. Learn how detectives use science to solve cases."
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Learning Success Stories"
          description="See how Scooby's Learning Lab helps kids achieve their educational goals."
          tag="Results"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "95%",
              title: "Reading Improvement",
              items: [
                "Average improvement in 3 months",
                "Student comprehension scores up",
                "Love reading more than ever"
              ]
            },
            {
              id: "2",
              value: "88%",
              title: "Math Skills Growth",
              items: [
                "Problem-solving abilities enhanced",
                "Confidence with numbers improved",
                "Faster computation speed"
              ]
            },
            {
              id: "3",
              value: "92%",
              title: "Parent Satisfaction",
              items: [
                "Happy with learning outcomes",
                "Kids excited to learn daily",
                "Recommend to other parents"
              ]
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="card"
          useInvertedBackground="noInvert"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg"
          valueClassName="text-9xl font-bold text-accent"
          metricTitleClassName="text-2xl font-semibold"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFour
          title="Meet Our Learning Guides"
          description="Experienced educators and child development experts dedicated to making learning fun."
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          team={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Lead Educator",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878766724-wr95thm2.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Curriculum Designer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878767705-s44tdu2r.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Child Psychologist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878768540-b08sqvnz.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Learning Coach",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878769517-t77ndkgh.jpg"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Content Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878770332-xemepryo.jpg"
            },
            {
              id: "6",
              name: "James Wilson",
              role: "Tech Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878771205-9mbtvcyx.jpg"
            },
            {
              id: "7",
              name: "Angela Martinez",
              role: "Assessment Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878772078-qjuuzjmd.jpg"
            },
            {
              id: "8",
              name: "Robert Lee",
              role: "Development Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878773147-0w6c02bv.jpg"
            }
          ]}
          speed={40}
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="My son absolutely loves Scooby's Learning Lab! He goes from playing video games to asking about the next learning adventure. His reading level improved dramatically in just two months, and he's finally excited about learning!"
          rating={5}
          author="Jennifer Martinez, Parent"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878763307-htsj1ww0.jpg",
              alt: "Parent 1"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878764137-hz8caqev.jpg",
              alt: "Parent 2"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878765119-cqi25pon.jpg",
              alt: "Parent 3"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878765879-5sejjlaa.jpg",
              alt: "Parent 4"
            }
          ]}
          useInvertedBackground="noInvert"
          testimonialClassName="text-2xl font-semibold"
          ratingClassName="mb-6"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about Scooby's Learning Lab and how it works."
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What age group is Scooby's Learning Lab for?",
              content: "Scooby's Learning Lab is designed for children ages 6-12. Content is tailored to different reading and comprehension levels, making it suitable for early readers through advanced learners."
            },
            {
              id: "2",
              title: "How long are the learning adventures?",
              content: "Each adventure takes 20-40 minutes to complete, making it perfect for daily learning sessions or after-school activities. Kids can pause and resume at any time."
            },
            {
              id: "3",
              title: "Can I track my child's progress?",
              content: "Yes! Parents get detailed progress reports showing which topics were learned, time spent, and areas where additional practice might help. Reports are available weekly and monthly."
            },
            {
              id: "4",
              title: "Is the content aligned with school curriculum?",
              content: "Absolutely. Our learning modules are aligned with Common Core standards and cover reading, math, science, and critical thinking skills taught in schools."
            },
            {
              id: "5",
              title: "What if my child gets stuck on a mystery?",
              content: "Helpful hints are available throughout each adventure. Kids can ask for hints without losing points, encouraging them to think critically while providing support when needed."
            },
            {
              id: "6",
              title: "How much does it cost?",
              content: "We offer flexible pricing starting at $9.99/month for individual access or $49.99/year for unlimited access to all adventures and features."
            }
          ]}
          sideTitleClassName="text-4xl font-bold"
          sideDescriptionClassName="text-lg"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Start Your Child's Learning Journey"
          description="Get in touch with us to learn more about Scooby's Learning Lab, ask questions, or get help getting started. We're here to support your child's learning adventure!"
          inputs={[
            {
              name: "parent_name",
              type: "text",
              placeholder: "Parent Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "child_name",
              type: "text",
              placeholder: "Child's Name",
              required: true
            },
            {
              name: "child_age",
              type: "number",
              placeholder: "Child's Age",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your learning goals or ask us anything...",
            rows: 5,
            required: false
          }}
          buttonText="Get Started"
          useInvertedBackground="noInvert"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "#learning"
                },
                {
                  label: "Learning Modules",
                  href: "#learning"
                },
                {
                  label: "Progress Tracking",
                  href: "#metrics"
                },
                {
                  label: "Pricing",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Our Team",
                  href: "#team"
                },
                {
                  label: "Blog",
                  href: "/"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "FAQ",
                  href: "#faq"
                },
                {
                  label: "Parent Guide",
                  href: "/"
                },
                {
                  label: "Privacy Policy",
                  href: "/"
                },
                {
                  label: "Terms of Service",
                  href: "/"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Scooby's Learning Lab. Making education an adventure."
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878758190-kdbbrzog.jpg"
          logoWidth={40}
          logoHeight={40}
        />
      </div>
    </ThemeProvider>
  );
}