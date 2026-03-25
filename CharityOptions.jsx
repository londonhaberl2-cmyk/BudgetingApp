import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Users, Home, Utensils, GraduationCap } from 'lucide-react';

const charities = [
  {
    icon: Home,
    name: "Habitat for Humanity",
    website: "habitat.org",
    focus: "Housing",
    description: "Build homes for families in need. Volunteer or donate building materials."
  },
  {
    icon: Utensils,
    name: "Feeding America",
    website: "feedingamerica.org",
    focus: "Food Security",
    description: "Supports 200+ food banks nationwide. $1 provides 10 meals."
  },
  {
    icon: Users,
    name: "United Way",
    website: "unitedway.org",
    focus: "Community",
    description: "Funds local programs for education, financial stability, and health."
  },
  {
    icon: GraduationCap,
    name: "Khan Academy",
    website: "khanacademy.org",
    focus: "Education",
    description: "Free world-class education for anyone, anywhere. Support their mission."
  },
  {
    icon: Heart,
    name: "St. Jude Children's Hospital",
    website: "stjude.org",
    focus: "Healthcare",
    description: "Families never receive a bill for treatment, housing, or food."
  },
  {
    icon: Globe,
    name: "Local Food Banks",
    website: "feedingamerica.org/find-your-local-foodbank",
    focus: "Local",
    description: "Support your immediate community. Search for food banks near you."
  }
];

export default function CharityOptions() {
  return (
    <div className="space-y-4">
      <p className="text-slate-600 text-center mb-6">
        Giving back can also be healing. Every contribution makes a difference.
      </p>
      <div className="grid gap-4">
        {charities.map((charity, index) => (
          <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-4 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 text-rose-600">
                <charity.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-semibold text-slate-800">{charity.name}</h3>
                  <span className="text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-full">
                    {charity.focus}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">{charity.description}</p>
                <a 
                  href={`https://${charity.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mt-2"
                >
                  <Globe className="w-4 h-4" />
                  {charity.website}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
