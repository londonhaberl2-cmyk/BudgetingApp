import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Star, CheckCircle } from 'lucide-react';

const banks = [
  {
    name: "Credit Unions",
    type: "Member-owned",
    benefits: ["Lower fees", "Better rates", "Community focused", "Personalized service"],
    tip: "Search 'credit unions near me' - they often have better terms than big banks."
  },
  {
    name: "Community Banks",
    type: "Local",
    benefits: ["Know your community", "Flexible lending", "Relationship banking", "Local decision-making"],
    tip: "Great for small business loans and personalized mortgage assistance."
  },
  {
    name: "Online Banks",
    type: "Digital",
    benefits: ["High-yield savings", "No minimum balance", "Low/no fees", "24/7 access"],
    tip: "Ally, Marcus, Discover - often offer 4-5% APY on savings accounts."
  },
  {
    name: "Bank of America",
    type: "National",
    benefits: ["Extensive ATM network", "Mobile app", "Rewards programs", "Investment services"],
    tip: "Check if you qualify for Preferred Rewards for fee waivers."
  },
  {
    name: "Chase Bank",
    type: "National",
    benefits: ["Branch availability", "Sign-up bonuses", "Credit cards", "Business services"],
    tip: "Look for new account bonuses - sometimes $200-300 for opening."
  },
  {
    name: "Wells Fargo",
    type: "National",
    benefits: ["Many locations", "Full service", "Online tools", "Financial advisors"],
    tip: "Ask about fee waiver options based on direct deposit or balance."
  }
];

export default function LocalBanks() {
  return (
    <div className="space-y-4">
      <p className="text-slate-600 text-center mb-6">
        Compare banking options to find the best fit for your financial needs.
      </p>
      <div className="grid gap-4">
        {banks.map((bank, index) => (
          <Card key={index} className="border-0 shadow-md">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-800">{bank.name}</h3>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                      {bank.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {bank.benefits.map((benefit, i) => (
                      <span key={i} className="flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-blue-600 mt-3 bg-blue-50 p-2 rounded-lg">
                    💡 {bank.tip}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
