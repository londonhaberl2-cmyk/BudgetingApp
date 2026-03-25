import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Calendar, Percent, Wallet, TrendingDown } from 'lucide-react';

const strategies = [
  {
    icon: Zap,
    title: "50/30/20 Rule",
    description: "Allocate 50% to needs, 30% to wants, and 20% to savings. Simple and effective framework.",
    color: "from-amber-100 to-orange-100",
    iconColor: "text-amber-600"
  },
  {
    icon: Calendar,
    title: "Pay Yourself First",
    description: "Set up automatic transfers to savings on payday before you can spend it.",
    color: "from-blue-100 to-cyan-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Target,
    title: "Envelope Method",
    description: "Divide cash into envelopes for different categories. When it's gone, it's gone.",
    color: "from-violet-100 to-purple-100",
    iconColor: "text-violet-600"
  },
  {
    icon: Percent,
    title: "Round-Up Savings",
    description: "Apps like Acorns round up purchases and invest the difference automatically.",
    color: "from-emerald-100 to-green-100",
    iconColor: "text-emerald-600"
  },
  {
    icon: TrendingDown,
    title: "No-Spend Challenges",
    description: "Try no-spend weekends or weeks. Track how much you save and redirect to goals.",
    color: "from-rose-100 to-pink-100",
    iconColor: "text-rose-600"
  },
  {
    icon: Wallet,
    title: "High-Yield Savings",
    description: "Move savings to high-yield accounts (4-5% APY) instead of traditional banks (0.01%).",
    color: "from-teal-100 to-cyan-100",
    iconColor: "text-teal-600"
  }
];

export default function SavingStrategies() {
  return (
    <div className="space-y-4">
      <p className="text-slate-600 text-center mb-6">
        Small changes add up. Choose strategies that fit your lifestyle.
      </p>
      <div className="grid gap-4">
        {strategies.map((strategy, index) => (
          <Card key={index} className={`border-0 shadow-md bg-gradient-to-r ${strategy.color}`}>
            <CardContent className="p-4 flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-white/70 ${strategy.iconColor}`}>
                <strategy.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">{strategy.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{strategy.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
