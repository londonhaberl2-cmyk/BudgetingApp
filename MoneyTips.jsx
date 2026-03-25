import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Laptop, ShoppingBag, BookOpen, GraduationCap, Package } from 'lucide-react';

const tips = [
  {
    icon: GraduationCap,
    title: "Campus Jobs",
    description: "Work at your college library, dining hall, gym, or as a teaching/research assistant. Often flexible with class schedules.",
    earnings: "$12-18/hr"
  },
  {
    icon: BookOpen,
    title: "Online Tutoring",
    description: "Tutor K-12 students through Tutor.com, Wyzant, Chegg Tutors, or offer private tutoring to classmates.",
    earnings: "$15-40/hr"
  },
  {
    icon: Laptop,
    title: "Freelance Your Skills",
    description: "Graphic design, writing, coding, video editing, or social media management on Fiverr, Upwork, or Freelancer.",
    earnings: "$20-50/hr"
  },
  {
    icon: Package,
    title: "Reselling",
    description: "Buy and resell textbooks, thrift store finds, or sneakers on eBay, Poshmark, Depop, or Mercari.",
    earnings: "$50-300/mo"
  },
  {
    icon: Briefcase,
    title: "Paid Internships",
    description: "Find internships in your field through Handshake, LinkedIn, or your campus career center - builds resume & earns money.",
    earnings: "$15-30/hr"
  },
  {
    icon: ShoppingBag,
    title: "Food Delivery & Gig Work",
    description: "DoorDash, Uber Eats, Instacart, or grocery delivery - flexible hours perfect for student schedules.",
    earnings: "$15-25/hr"
  },
  {
    icon: BookOpen,
    title: "Note-Taking Services",
    description: "Sell your well-organized class notes on Stuvia, Nexus Notes, or OneClass.",
    earnings: "$5-20/set"
  },
  {
    icon: GraduationCap,
    title: "Pet Sitting & Dog Walking",
    description: "Care for pets through Rover or Wag - study while pet sitting and earn extra cash.",
    earnings: "$20-40/day"
  }
];

export default function MoneyTips() {
  return (
    <div className="space-y-4">
      <p className="text-slate-600 text-center mb-6">
        Flexible income opportunities designed for busy college students
      </p>
      <div className="grid gap-4">
        {tips.map((tip, index) => (
          <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600">
                <tip.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-800">{tip.title}</h3>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {tip.earnings}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">{tip.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
