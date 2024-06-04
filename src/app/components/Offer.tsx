import { JSX, SVGProps } from "react";

export default function Offer() {
  function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }
  return (
    <section
      id="offer"
      className="w-full flex justify-center py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What I Offer
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Tailored English lessons to help you achieve your goals.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gray-900 dark:text-gray-50" />
              <div>
                <h3 className="text-lg font-bold">
                  Over 15 years of teaching experience
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I have been helping students of all levels improve their
                  English skills for over 15 years.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gray-900 dark:text-gray-50" />
              <div>
                <h3 className="text-lg font-bold">
                  Effective, student-focused, and custom-tailored lessons
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  My lessons are designed to be engaging and effective, tailored
                  to your specific needs and goals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gray-900 dark:text-gray-50" />
              <div>
                <h3 className="text-lg font-bold">
                  Standardized exam (IELTS or Celpip) preparation assistance
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I can help you prepare for the IELTS or Celpip exams, ensuring
                  you&apos;re fully equipped to achieve your desired score.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gray-900 dark:text-gray-50" />
              <div>
                <h3 className="text-lg font-bold">Business English lessons</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Improve your English skills for the workplace with my
                  specialized business English lessons.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gray-900 dark:text-gray-50" />
              <div>
                <h3 className="text-lg font-bold">Competitive rates</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I offer competitive rates to ensure high-quality English
                  lessons are accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
