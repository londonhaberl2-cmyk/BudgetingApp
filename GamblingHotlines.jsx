import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare, Globe, Heart } from 'lucide-react';

const hotlines = [
  {
    name: "National Problem Gambling Helpline",
    phone: "1-800-522-4700",
    text: "Text 'HELP' to 233-579",
    website: "ncpgambling.org",
    description: "24/7, free, confidential support. Available in 180+ languages.",
    highlight: true
  },
  {
    name: "Gamblers Anonymous",
    phone: "N/A",
    website: "gamblersanonymous.org",
    description: "Find local meetings and 12-step support groups in your area.",
    highlight: false
  },
  {
    name: "National Council on Problem Gambling",
    phone: "1-800-522-4700",
    website: "ncpgambling.org/chat",
    description: "Live chat available. Resources for gamblers and their families.",
    highlight: false
  },
  {
    name: "Gam-Anon",
    phone: "N/A",
    website: "gam-anon.org",
    description: "Support for family members and friends affected by gambling.",
    highlight: false
  },
  {
    name: "SAMHSA National Helpline",
    phone: "1-800-662-4357",
    website: "samhsa.gov",
    description: "Free, confidential treatment referrals and information 24/7.",
    highlight: false
  }
];

export default function GamblingHotlines() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-xl text-center mb-6">
        <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" />
        <p className="text-slate-700 font-medium">
          Reaching out takes courage. You deserve support.
        </p>
        <p className="text-sm text-slate-500 mt-1">
          All services are confidential and judgment-free.
        </p>
      </div>
      
      <div className="grid gap-4">
        {hotlines.map((hotline, index) => (
          <Card 
            key={index} 
            className={`border-0 shadow-md ${hotline.highlight ? 'ring-2 ring-rose-300 bg-gradient-to-r from-rose-50 to-pink-50' : ''}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${hotline.highlight ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-600'}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">{hotline.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{hotline.description}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {hotline.phone !== "N/A" && (
                      <a 
                        href={`tel:${hotline.phone.replace(/-/g, '')}`}
                        className="flex items-center gap-1 text-sm font-medium text-rose-600 hover:text-rose-700 bg-rose-50 px-3 py-1.5 rounded-full"
                      >
                        <Phone className="w-4 h-4" />
                        {hotline.phone}
                      </a>
                    )}
                    {hotline.text && (
                      <span className="flex items-center gap-1 text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                        <MessageSquare className="w-4 h-4" />
                        {hotline.text}
                      </span>
                    )}
                    <a 
                      href={`https://${hotline.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-700"
                    >
                      <Globe className="w-4 h-4" />
                      {hotline.website}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
