import Link from "next/link";

export interface FAQItem {
  question: string;
  answer: string;
  href?: string;
}

export default function FAQCard({ question, answer, href = "/" }: FAQItem) {
  return (
    <div className="h-full flex flex-col justify-between border border-border rounded-[12px] bg-surface p-8 md:p-10">
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-white mb-4 leading-snug">
          {question}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">{answer}</p>
      </div>
      <div className="mt-6">
        <Link
          href={href}
          className="inline-block px-5 py-3 text-sm bg-background text-white border border-border rounded-[10px] hover:bg-background transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
