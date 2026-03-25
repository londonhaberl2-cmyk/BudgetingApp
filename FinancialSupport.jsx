import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Globe, Building, Users } from 'lucide-react';

const contacts = [
  {
    name: "National Foundation for Credit Counseling",
    phone: "1-800-388-2227",
    website: "nfcc.org",
    description: "Free or low-cost financial counseling and debt management plans."
  },
  {
    name: "United Way 211",
    phone: "211",
    website: "211.org",
    description: "Connect to local financial assistance, rent help, and utility assistance programs."
  },
  {
    name: "Consumer Financial Protection Bureau",
    phone: "1-855-411-2372",
    website: "consumerfinance.gov",
    description: "File complaints, get answers about financial products and services."
  },
  {
    name: "Financial Counseling Association of America",
    phone: "1-800-450-1794",
    website: "fcaa.org",
    description: "Nonprofit credit counseling and financial education services."
  },
  {
    name: "Benefits.gov",
    phone: "N/A",
    website: "benefits.gov",
    description: "Find government benefits you may qualify for including SNAP, housing, and healthcare."
  },
  {
    name: "Operation HOPE",
    phone: "1-888-388-4673",
    website: "operationhope.org",
    description: "Financial coaching, credit and money management for underserved communities."
  }
];

export default function FinancialSupport() {
  return (
    <div className="space-y-4">
      <p className="text-slate-600 text-center mb-6">
        You're not alone. These organizations offer free support and resources.
      </p>
      <div className="grid gap-4">
        {contacts.map((contact, index) => (
          <Card key={index} className="border-0 shadow-md">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  <Building className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">{contact.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{contact.description}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {contact.phone !== "N/A" && (
                      <a 
                        href={`tel:${contact.phone}`}
                        className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700"
                      >
                        <Phone className="w-4 h-4" />
                        {contact.phone}
                      </a>
                    )}
                    <a 
                      href={`https://${contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
                    >
                      <Globe className="w-4 h-4" />
                      {contact.website}
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
