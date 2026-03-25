import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Heart } from 'lucide-react';
import GoogleTranslate from './components/GoogleTranslate';

export default function Layout({ children, currentPageName }) {
  const navItems = [
  { name: 'Budget Strategy', path: 'Home' },
  { name: 'Mental Health', path: 'CalmDown' },
  { name: 'Ways to Make Money', path: 'MakeMoney' },
  { name: 'Local Banks', path: 'Banks' },
  { name: 'Gambling Help', path: 'GamblingHelp' },
  { name: 'Charity', path: 'Charity' },
  { name: 'Brain Game', path: 'BrainGame' }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="bg-transparent mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Financial Wellness</h1>
                <p className="text-emerald-100 text-xs md:text-sm">Your journey to financial peace</p>
              </div>
            </div>
            <GoogleTranslate />
          </div>

          {/* Navigation */}
          <nav className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {navItems.map((item) =>
            <Link
              key={item.path}
              to={createPageUrl(item.path)} className="bg-white text-teal-700 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all shadow-md">






                {item.name}
              </Link>
            )}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {children}
      </div>


    </div>);

}
