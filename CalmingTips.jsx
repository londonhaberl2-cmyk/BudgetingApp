import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Heart, Music, Sparkles, TreePine, Moon } from 'lucide-react';

const tips = [
  {
    icon: Wind,
    title: "Box Breathing",
    description: "Breathe in for 4 seconds, hold for 4, exhale for 4, hold for 4. Repeat 4 times.",
    color: "from-sky-100 to-blue-100",
    iconColor: "text-sky-600"
  },
  {
    icon: Heart,
    title: "Progressive Muscle Relaxation",
    description: "Tense each muscle group for 5 seconds, then release. Start from toes, work up to head.",
    color: "from-rose-100 to-pink-100",
    iconColor: "text-rose-600"
  },
  {
    icon: Music,
    title: "Calming Sounds",
    description: "Listen to nature sounds, white noise, or slow tempo music (60 BPM) for 10 minutes.",
    color: "from-violet-100 to-purple-100",
    iconColor: "text-violet-600"
  },
  {
    icon: Sparkles,
    title: "5-4-3-2-1 Grounding",
    description: "Name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.",
    color: "from-amber-100 to-yellow-100",
    iconColor: "text-amber-600"
  },
  {
    icon: TreePine,
    title: "Nature Walk",
    description: "Spend 20 minutes outdoors. Focus on the sights, sounds, and smells around you.",
    color: "from-emerald-100 to-green-100",
    iconColor: "text-emerald-600"
  },
  {
    icon: Moon,
    title: "Guided Meditation",
    description: "Use apps like Calm or Headspace for 5-10 minute guided sessions.",
    color: "from-indigo-100 to-blue-100",
    iconColor: "text-indigo-600"
  }
];

export default function CalmingTips() {
  return (
    <div className="space-y-4">
      <p className="text-slate-600 text-center mb-6">
        Financial stress is real. Here are science-backed ways to calm your mind.
      </p>
      <div className="grid gap-4">
        {tips.map((tip, index) => (
          <Card key={index} className={`border-0 shadow-md bg-gradient-to-r ${tip.color} overflow-hidden`}>
            <CardContent className="p-4 flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-white/60 ${tip.iconColor}`}>
                <tip.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">{tip.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{tip.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
