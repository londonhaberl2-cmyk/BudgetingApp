/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Banks from './pages/Banks';
import BrainGame from './pages/BrainGame';
import CalmDown from './pages/CalmDown';
import Charity from './pages/Charity';
import GamblingHelp from './pages/GamblingHelp';
import Home from './pages/Home';
import MakeMoney from './pages/MakeMoney';
import SaveMoney from './pages/SaveMoney';
import Support from './pages/Support';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Banks": Banks,
    "BrainGame": BrainGame,
    "CalmDown": CalmDown,
    "Charity": Charity,
    "GamblingHelp": GamblingHelp,
    "Home": Home,
    "MakeMoney": MakeMoney,
    "SaveMoney": SaveMoney,
    "Support": Support,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
