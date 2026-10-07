export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  image: string;
  icon: string;
  overview: string;
  sections: {
    heading: string;
    body: string;
  }[];
  warningSigns: string[];
  needs: string[];
  faqs: ServiceFaq[];
  ctaLabel: string;
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: 'electrical-installation',
    title: 'Electrical Installation',
    shortTitle: 'Electrical Installation',
    h1: 'Professional Electrical Installation in Valley, Alabama',
    metaTitle: 'Electrical Installation Valley, AL | Bausley Electrical Services',
    metaDescription: 'Expert electrical installation services in Valley, AL. New circuits, wiring, panels, fixtures and more installed safely to code by Bausley Electrical Services. Call 334-497-0921.',
    summary: 'From new circuits and fixtures to complete wiring for renovations, we install electrical systems that are safe, reliable, and built to last.',
    image: 'https://images.pexels.com/photos/5667685/pexels-photo-5667685.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Zap',
    overview: 'Whether you are building a new home, finishing a renovation, or adding circuits for new appliances, professional electrical installation is the foundation of a safe and functional property. At Bausley Electrical Services, we handle installation projects of every size — from a single new outlet to a full residential wiring system — with careful attention to code requirements, safety, and clean workmanship.',
    sections: [
      {
        heading: 'Complete Residential Installation Services',
        body: 'We install new circuits, outlets, switches, lighting fixtures, ceiling fans, exhaust fans, and electrical panels for homes throughout Valley and the surrounding area. Every installation is planned to match your household\'s power needs and performed with respect for your walls, floors, and finishes.',
      },
      {
        heading: 'New Construction and Remodel Wiring',
        body: 'If you are building new or remodeling, we work alongside your contractor to route wiring, place boxes, and install devices exactly where they need to be. We coordinate timing so your project stays on schedule and the electrical system passes inspection the first time.',
      },
      {
        heading: 'Code-Compliant, Safety-First Approach',
        body: 'Every installation follows current National Electrical Code guidelines and local requirements. We size conductors and breakers correctly, secure wiring properly, and label circuits clearly so your panel is easy to manage for years to come.',
      },
    ],
    warningSigns: [
      'You are adding new appliances that need dedicated circuits',
      'Your home has two-prong outlets that need upgrading',
      'You are finishing a basement, garage, or addition',
      'Old wiring needs replacing during a renovation',
    ],
    needs: [
      'New circuits for kitchen or laundry appliances',
      'Whole-home wiring for new construction',
      'Outdoor outlets and lighting',
      'Smoke and carbon monoxide detector installation',
    ],
    faqs: [
      { q: 'Do you install electrical systems for new construction?', a: 'Yes. We provide complete wiring and device installation for new homes and additions, coordinating with your builder to keep the project on track.' },
      { q: 'Can you add circuits for new appliances?', a: 'Absolutely. We install dedicated circuits for refrigerators, ovens, dryers, HVAC units, EV chargers, and other high-draw appliances, sized correctly to handle the load safely.' },
      { q: 'Will my installation meet code?', a: 'Every installation we perform follows current National Electrical Code standards and local requirements. We take pride in work that passes inspection without issues.' },
    ],
    ctaLabel: 'Schedule Your Installation',
    relatedServices: ['electrical-repair-troubleshooting', 'wiring-rewiring', 'outlet-switch-installation', 'lighting-installation'],
  },
  {
    slug: 'electrical-repair-troubleshooting',
    title: 'Electrical Repair & Troubleshooting',
    shortTitle: 'Repair & Troubleshooting',
    h1: 'Fast Electrical Repair & Troubleshooting in Valley, Alabama',
    metaTitle: 'Electrical Repair & Troubleshooting Valley, AL | Bausley Electrical',
    metaDescription: 'Reliable electrical repair and troubleshooting in Valley, AL. Outlets not working, flickering lights, tripping breakers — Bausley Electrical Services finds and fixes the problem. Call 334-497-0921.',
    summary: 'When something is not working right, we diagnose the root cause and repair it safely — no guesswork, no shortcuts.',
    image: 'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Search',
    overview: 'Electrical problems can range from a simple loose connection to a hidden wiring fault that poses a fire risk. Our troubleshooting process systematically isolates the cause, so we fix the actual problem rather than just the symptom. We explain what we find in plain language and recommend the right repair.',
    sections: [
      {
        heading: 'Thorough Diagnostic Process',
        body: 'We use professional multimeters, circuit testers, and thermal inspection tools to trace faults back to their source. Whether the problem is a tripping breaker, a dead outlet, or a light that flickers intermittently, we methodically narrow down the cause before recommending a repair.',
      },
      {
        heading: 'Common Repairs We Handle',
        body: 'Loose or scorched connections, faulty outlets and switches, tripping GFCI receptacles, damaged wiring, failing light fixtures, and breaker-panel issues are all problems we diagnose and repair regularly. We also identify underlying causes — like overloaded circuits — that may be creating recurring trouble.',
      },
      {
        heading: 'Honest Recommendations, Clear Communication',
        body: 'After diagnosing the issue, we explain what is wrong, what it takes to fix it, and what the repair involves — before we start work. You will understand the scope and the reasoning, with no pressure and no surprise charges.',
      },
    ],
    warningSigns: [
      'Outlets or switches that feel warm to the touch',
      'Lights flicker or dim when appliances turn on',
      'Breakers trip repeatedly for no obvious reason',
      'A burning or unusual odor near outlets or the panel',
      'Sparks or buzzing sounds from switches or outlets',
    ],
    needs: [
      'An outlet or light that stopped working',
      'A breaker that keeps tripping',
      'GFCI outlets that will not reset',
      'Diagnosis of an intermittent electrical issue',
    ],
    faqs: [
      { q: 'How quickly can you come out for a repair?', a: 'We do our best to respond promptly, especially for safety-related issues. Call us at 334-497-0921 and we will schedule the earliest available visit.' },
      { q: 'Do you charge for troubleshooting?', a: 'Troubleshooting is part of the service call. We diagnose the problem and provide a clear explanation of the repair needed and the cost before proceeding.' },
      { q: 'Can you fix a breaker that keeps tripping?', a: 'Yes. We identify whether the cause is an overload, a short circuit, a ground fault, or a worn breaker, and we repair it at the source.' },
    ],
    ctaLabel: 'Get Your Repair Diagnosed',
    relatedServices: ['electrical-installation', 'circuit-breaker-services', 'electrical-panel-repair-upgrades', 'electrical-grounding-safety-improvements'],
  },
  {
    slug: 'electrical-panel-repair-upgrades',
    title: 'Electrical Panel Repair & Upgrades',
    shortTitle: 'Panel Repair & Upgrades',
    h1: 'Electrical Panel Repair & Upgrades in Valley, Alabama',
    metaTitle: 'Electrical Panel Upgrade Valley, AL | Bausley Electrical Services',
    metaDescription: 'Panel repair and upgrades in Valley, AL. Replace outdated or unsafe panels, add capacity for new appliances, and protect your home with modern breakers. Call Bausley Electrical at 334-497-0921.',
    summary: 'Your panel is the heart of your electrical system. We repair, upgrade, and replace panels to keep power safe and sufficient for today\'s demands.',
    image: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'LayoutGrid',
    overview: 'The electrical panel distributes power to every circuit in your home. If your panel is outdated, damaged, or too small for your household\'s needs, it can cause tripping breakers, flickering lights, and serious safety risks. We repair panels when possible and upgrade or replace them when a modern panel is the safer choice.',
    sections: [
      {
        heading: 'Panel Repairs for Common Problems',
        body: 'Loose lugs, corroded bus bars, breakers that will not stay engaged, and warm spots on the panel cover are all issues we address. We inspect the panel thoroughly, tighten connections, replace faulty breakers, and restore safe operation when the panel is structurally sound.',
      },
      {
        heading: 'Panel Upgrades for Greater Capacity',
        body: 'If your panel is too small for your current needs — or if you are adding an EV charger, tankless water heater, or workshop — we install larger panels with the ampacity your home requires. Upgrading improves safety, reduces tripping, and gives you room for future circuits.',
      },
      {
        heading: 'Panel Replacement for Outdated Equipment',
        body: 'Certain older panel brands are known for reliability problems and may pose safety risks. If your panel is one of these, or if it has visible damage or corrosion, we replace it with a modern, code-compliant panel that meets today\'s standards.',
      },
    ],
    warningSigns: [
      'Breakers trip frequently, especially when multiple devices run',
      'The panel is warm, corroded, or has a burning smell',
      'Lights dim when large appliances turn on',
      'Your panel is 30+ years old or uses fuses instead of breakers',
      'You need more circuits but your panel is full',
    ],
    needs: [
      'More breaker space for new circuits',
      'Replacing an outdated or recalled panel',
      'Upgrading from 100 amp to 200 amp service',
      'Repairing a breaker that will not stay engaged',
    ],
    faqs: [
      { q: 'How do I know if my panel needs upgrading?', a: 'Common signs include frequent breaker trips, a full panel with no open slots, dimming lights, or a panel that is 30+ years old. We can inspect your panel and advise whether a repair or upgrade is the right call.' },
      { q: 'How long does a panel upgrade take?', a: 'A typical panel replacement takes about a half day, though the exact timeline depends on the scope of the work and any service-entrance upgrades needed.' },
      { q: 'Do you replace fuse boxes with breaker panels?', a: 'Yes. If your home still has a fuse box, we replace it with a modern circuit breaker panel that provides better protection and meets current code.' },
    ],
    ctaLabel: 'Explore Panel Upgrades',
    relatedServices: ['circuit-breaker-services', 'electrical-installation', 'electrical-repair-troubleshooting', 'electrical-power-restoration-diagnostics'],
  },
  {
    slug: 'circuit-breaker-services',
    title: 'Circuit Breaker Services',
    shortTitle: 'Circuit Breakers',
    h1: 'Circuit Breaker Services in Valley, Alabama',
    metaTitle: 'Circuit Breaker Services Valley, AL | Bausley Electrical Services',
    metaDescription: 'Circuit breaker installation, replacement, and repair in Valley, AL. Fix tripping breakers, add dedicated circuits, and protect your home. Call Bausley Electrical at 334-497-0921.',
    summary: 'Breakers protect your home from overloads and faults. We install, replace, and repair breakers to keep your circuits safe and functional.',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'ShieldCheck',
    overview: 'Circuit breakers are the primary safety device in your electrical system. When a breaker trips, it is protecting your wiring from damage. But breakers that trip constantly, feel hot, or fail to reset are telling you something needs attention. We service breakers and the circuits they protect.',
    sections: [
      {
        heading: 'Breaker Replacement and Repair',
        body: 'We replace worn, damaged, or incorrect breakers with the proper type and rating for each circuit. If a breaker will not stay engaged, feels warm, or shows signs of arcing, we diagnose the underlying cause — whether it is the breaker itself, a wiring fault, or an overloaded circuit — and fix it at the source.',
      },
      {
        heading: 'New Circuit Installation',
        body: 'When your household needs more power, we add new circuits and the breakers to protect them. Common additions include dedicated circuits for microwaves, freezers, EV chargers, window AC units, and home workshops. We size each circuit to the load it will carry and label it clearly in your panel.',
      },
      {
        heading: 'GFCI and AFCI Protection',
        body: 'Modern code requires GFCI protection in wet areas and AFCI protection in living spaces. We install GFCI and AFCI breakers and receptacles to bring older homes up to current safety standards, reducing the risk of shock and electrical fires.',
      },
    ],
    warningSigns: [
      'A breaker trips repeatedly and will not stay reset',
      'A breaker feels hot or has visible scorch marks',
      'You hear buzzing from the panel area',
      'Outlets in kitchens, baths, or outdoors lack GFCI protection',
    ],
    needs: [
      'A breaker that keeps tripping',
      'Dedicated circuits for new appliances',
      'GFCI or AFCI protection upgrades',
      'Replacing a worn or incorrect breaker',
    ],
    faqs: [
      { q: 'Why does my breaker keep tripping?', a: 'Breakers trip for three main reasons: overloads, short circuits, and ground faults. We diagnose which one is causing the problem and repair it so the breaker can do its job without constant nuisance tripping.' },
      { q: 'What is the difference between GFCI and AFCI breakers?', a: 'GFCI breakers protect against ground faults (important in wet areas like kitchens and bathrooms). AFCI breakers detect arc faults that can cause fires in living spaces. Modern code requires both types in specific locations.' },
      { q: 'Can you add a circuit to my existing panel?', a: 'If your panel has open breaker slots and sufficient ampacity, yes. If it is full or undersized, we may recommend a sub-panel or a panel upgrade — we will explain the options clearly.' },
    ],
    ctaLabel: 'Schedule Breaker Service',
    relatedServices: ['electrical-panel-repair-upgrades', 'electrical-repair-troubleshooting', 'outlet-switch-installation', 'electrical-grounding-safety-improvements'],
  },
  {
    slug: 'wiring-rewiring',
    title: 'Wiring & Rewiring',
    shortTitle: 'Wiring & Rewiring',
    h1: 'Wiring & Rewiring Services in Valley, Alabama',
    metaTitle: 'Wiring & Rewiring Valley, AL | Bausley Electrical Services',
    metaDescription: 'Professional wiring and rewiring in Valley, AL. Replace old or unsafe wiring, wire new construction, and bring your home up to code. Call Bausley Electrical at 334-497-0921.',
    summary: 'Safe, properly installed wiring is the backbone of every reliable electrical system. We install new wiring and replace old or damaged wiring throughout your home.',
    image: 'https://images.pexels.com/photos/3614763/pexels-photo-3614763.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Cable',
    overview: 'Wiring hidden behind your walls carries power to every outlet, switch, and fixture in your home. If that wiring is outdated, damaged, or improperly installed, it can cause flickering lights, tripping breakers, and fire risks. We install new wiring for additions and remodels and rewire homes that need safer, modern conductors.',
    sections: [
      {
        heading: 'Whole-Home Rewiring',
        body: 'If your home has aging wiring — such as cloth-insulated conductors or aluminum wiring from the 1960s and 70s — we replace it with modern copper wiring rated for today\'s loads. We plan the project to minimize wall openings and keep disruption as low as possible.',
      },
      {
        heading: 'Wiring for Additions and Remodels',
        body: 'When you add a room, finish a basement, or remodel a kitchen, we install the wiring that powers it. We route cables, install junction and device boxes, and make sure every conductor is the right gauge for the circuit it serves.',
      },
      {
        heading: 'Damaged and Exposed Wiring Repair',
        body: 'Wiring can be damaged by rodents, renovation work, aging insulation, or moisture. We locate damaged sections, replace them with code-compliant conductors, and verify the entire circuit is safe before putting it back in service.',
      },
    ],
    warningSigns: [
      'Your home is 40+ years old and still has original wiring',
      'Outlets are discolored or warm, or plugs fit loosely',
      'You notice a persistent burning smell with no visible source',
      'Lights flicker or dim frequently throughout the house',
    ],
    needs: [
      'Replacing old or aluminum wiring',
      'Wiring a new addition or finished basement',
      'Repairing wiring damaged during renovation',
      'Adding circuits for a remodeled kitchen',
    ],
    faqs: [
      { q: 'How do I know if my home needs rewiring?', a: 'Signs include flickering lights, warm or discolored outlets, frequently tripping breakers, a burning smell, or wiring that is 40+ years old. We can inspect your wiring and advise whether a full or partial rewire is recommended.' },
      { q: 'How disruptive is whole-home rewiring?', a: 'Rewiring requires accessing wiring behind walls, but we plan the project to minimize openings and work efficiently. We discuss what to expect before starting so you can prepare.' },
      { q: 'Do you rewire older homes with aluminum wiring?', a: 'Yes. Aluminum branch-circuit wiring from the 1960s–70s is a known fire risk at connections. We replace it with modern copper wiring or apply approved mitigation methods at connection points.' },
    ],
    ctaLabel: 'Discuss Your Wiring Project',
    relatedServices: ['electrical-installation', 'outlet-switch-installation', 'electrical-panel-repair-upgrades', 'electrical-grounding-safety-improvements'],
  },
  {
    slug: 'outlet-switch-installation',
    title: 'Outlet & Switch Installation',
    shortTitle: 'Outlets & Switches',
    h1: 'Outlet & Switch Installation in Valley, Alabama',
    metaTitle: 'Outlet & Switch Installation Valley, AL | Bausley Electrical Services',
    metaDescription: 'Outlet and switch installation in Valley, AL. Add GFCI outlets, replace old receptacles, install dimmers and smart switches. Call Bausley Electrical at 334-497-0921.',
    summary: 'From adding outlets where you need them to installing dimmers and GFCI protection, we handle every type of receptacle and switch installation.',
    image: 'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Plug',
    overview: 'Outlets and switches are the parts of your electrical system you touch every day. When they are loose, worn, or lacking modern safety features, they are both a nuisance and a hazard. We install, replace, and upgrade outlets and switches throughout your home to improve convenience and safety.',
    sections: [
      {
        heading: 'Outlet Installation and Replacement',
        body: 'We add outlets where you need them — behind a new TV, in a garage, on a patio — and replace old, loose, or discolored receptacles. We install standard, tamper-resistant, weather-resistant, and GFCI outlets depending on the location and code requirements.',
      },
      {
        heading: 'GFCI Outlet Installation',
        body: 'Ground Fault Circuit Interrupter outlets protect against shock in areas where water is present. We install GFCI receptacles in kitchens, bathrooms, laundry rooms, garages, and outdoor locations to bring your home up to current safety code.',
      },
      {
        heading: 'Switch Installation and Upgrades',
        body: 'We install standard switches, dimmer switches, three-way and four-way switches, timer switches, and motion-sensor switches. Whether you want to dim your dining room lights or automate a porch light, we install the right switch for the job.',
      },
    ],
    warningSigns: [
      'Plugs fit loosely or fall out of outlets',
      'Outlets are cracked, discolored, or warm',
      'Kitchens, bathrooms, or outdoor areas lack GFCI protection',
      'Switches crackle, feel warm, or do not operate smoothly',
    ],
    needs: [
      'Additional outlets in a room or garage',
      'GFCI outlets in wet areas',
      'Dimmer or smart switch installation',
      'Replacing old two-prong outlets with grounded three-prong',
    ],
    faqs: [
      { q: 'Can you add an outlet anywhere in my home?', a: 'In most cases, yes. We assess the nearest circuit, confirm it can handle the additional load, and route wiring to the new location. If a new circuit is needed, we explain that too.' },
      { q: 'Where are GFCI outlets required?', a: 'Current code requires GFCI protection in kitchens, bathrooms, laundry areas, garages, unfinished basements, and outdoor locations. We can install GFCI receptacles or GFCI breakers to meet these requirements.' },
      { q: 'Can you install a dimmer on any light?', a: 'Dimmer compatibility depends on the light fixture and bulb type. We verify the fixture and load are dimmer-compatible and install the correct dimmer for your setup.' },
    ],
    ctaLabel: 'View Outlet & Switch Options',
    relatedServices: ['electrical-installation', 'lighting-installation', 'circuit-breaker-services', 'electrical-grounding-safety-improvements'],
  },
  {
    slug: 'lighting-installation',
    title: 'Lighting Installation',
    shortTitle: 'Lighting Installation',
    h1: 'Lighting Installation in Valley, Alabama',
    metaTitle: 'Lighting Installation Valley, AL | Bausley Electrical Services',
    metaDescription: 'Professional lighting installation in Valley, AL. Recessed lights, pendant lights, landscape lighting, dimmers, and more. Brighten your home with Bausley Electrical. Call 334-497-0921.',
    summary: 'From recessed can lights to pendant fixtures and outdoor lighting, we install lighting that transforms the look and function of your home.',
    image: 'https://images.pexels.com/photos/10164897/pexels-photo-10164897.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Lightbulb',
    overview: 'Good lighting changes how a space feels and functions. Whether you are updating a kitchen with pendant lights, adding recessed lighting to a living room, or installing landscape lights for safety and curb appeal, we handle the wiring, mounting, and switching so your lighting works flawlessly.',
    sections: [
      {
        heading: 'Interior Lighting Installation',
        body: 'We install recessed can lights, pendant lights, chandeliers, track lighting, under-cabinet lighting, and vanity lighting. We plan placement, route wiring as needed, and make sure every fixture is securely mounted and properly switched.',
      },
      {
        heading: 'Outdoor and Landscape Lighting',
        body: 'Exterior lighting improves safety, security, and curb appeal. We install porch lights, flood lights, pathway lights, and landscape accent lighting with weather-rated fixtures and GFCI-protected circuits built to withstand Alabama weather.',
      },
      {
        heading: 'Dimmer and Lighting Controls',
        body: 'We install dimmer switches, multi-location switching, and timer or sensor controls so you can set the right light level for any occasion. We match the control type to your fixture and bulb type for smooth, flicker-free dimming.',
      },
    ],
    warningSigns: [
      'A light fixture flickers or does not turn on',
      'You want to add recessed or pendant lighting to a room',
      'Outdoor areas are dark and need security lighting',
      'Existing fixtures are outdated or damaged',
    ],
    needs: [
      'Recessed lighting for a kitchen or living room',
      'Pendant lights over an island or dining table',
      'Outdoor flood or landscape lighting',
      'Dimmer switches for adjustable lighting',
    ],
    faqs: [
      { q: 'Can you install recessed lighting in an existing ceiling?', a: 'Yes. We cut the necessary openings, route wiring to each fixture, and install IC-rated recessed housings that are safe for contact with insulation.' },
      { q: 'Do you install outdoor lighting?', a: 'Yes. We install exterior fixtures, flood lights, and landscape lighting using weather-rated fixtures and GFCI-protected circuits designed for outdoor use.' },
      { q: 'Can I add dimmer switches to my existing lights?', a: 'In most cases, yes. We verify that your fixtures and bulbs are dimmer-compatible and install the correct dimmer type for smooth, reliable operation.' },
    ],
    ctaLabel: 'View Lighting Installation',
    relatedServices: ['ceiling-fan-installation', 'outlet-switch-installation', 'electrical-installation', 'electrical-repair-troubleshooting'],
  },
  {
    slug: 'ceiling-fan-installation',
    title: 'Ceiling Fan Installation',
    shortTitle: 'Ceiling Fans',
    h1: 'Ceiling Fan Installation in Valley, Alabama',
    metaTitle: 'Ceiling Fan Installation Valley, AL | Bausley Electrical Services',
    metaDescription: 'Ceiling fan installation in Valley, AL. Safe mounting, proper wiring, new switches, and fan-rated boxes. Keep your home comfortable with Bausley Electrical. Call 334-497-0921.',
    summary: 'We install ceiling fans with proper support, safe wiring, and convenient switching so you stay comfortable and reduce cooling costs.',
    image: 'https://images.pexels.com/photos/6835102/pexels-photo-6835102.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Fan',
    overview: 'A ceiling fan improves comfort and can help lower cooling costs during Alabama summers. But a fan needs more than standard light-fixture support — it requires a fan-rated box securely anchored to the structure, proper wiring, and the right switching. We handle every part of the installation so your fan runs quietly and safely.',
    sections: [
      {
        heading: 'Fan-Rated Box Installation',
        body: 'Ceiling fans vibrate and weigh more than a light fixture, so the electrical box must be fan-rated and anchored to ceiling joists or a support brace. We install the correct box and support so your fan is secure and wobble-free for years.',
      },
      {
        heading: 'Wiring and Switching',
        body: 'We run wiring to the fan location, connect the fan and light kit, and install wall switches or a remote control so you can operate the fan and light independently. If you are replacing a light fixture with a fan, we upgrade the box and wiring as needed.',
      },
      {
        heading: 'Outdoor and Damp-Rated Fans',
        body: 'For covered patios and porches, we install damp- or wet-rated ceiling fans built for outdoor conditions. We protect the wiring with GFCI circuits and weather-rated boxes so your outdoor fan is safe and durable.',
      },
    ],
    warningSigns: [
      'You want to replace a light fixture with a ceiling fan',
      'An existing fan wobbles or makes noise',
      'Your ceiling box is not rated for a fan',
      'You need a fan installed on a covered porch',
    ],
    needs: [
      'New ceiling fan installation in a bedroom or living room',
      'Replacing a light fixture with a fan',
      'Outdoor ceiling fan for a covered patio',
      'Fan switch or remote control installation',
    ],
    faqs: [
      { q: 'Can you replace a light fixture with a ceiling fan?', a: 'Yes. We replace the existing box with a fan-rated box, run any additional wiring needed, and install the fan with proper switching for the fan and light.' },
      { q: 'Why does my ceiling fan wobble?', a: 'Wobbling is usually caused by an unsupported box, unbalanced blades, or loose mounting. We inspect the installation, upgrade the box if needed, and balance the fan.' },
      { q: 'Can you install a fan on a covered porch?', a: 'Yes. We install damp- or wet-rated fans with weather-protected wiring and GFCI circuits so the fan is safe for outdoor use.' },
    ],
    ctaLabel: 'Schedule Fan Installation',
    relatedServices: ['lighting-installation', 'outlet-switch-installation', 'electrical-installation', 'wiring-rewiring'],
  },
  {
    slug: 'electrical-grounding-safety-improvements',
    title: 'Electrical Grounding & Safety Improvements',
    shortTitle: 'Grounding & Safety',
    h1: 'Electrical Grounding & Safety Improvements in Valley, Alabama',
    metaTitle: 'Electrical Grounding & Safety Valley, AL | Bausley Electrical',
    metaDescription: 'Electrical grounding and safety improvements in Valley, AL. Upgrade grounding, add GFCI/AFCI protection, install smoke detectors. Call Bausley Electrical at 334-497-0921.',
    summary: 'Grounding and modern safety devices protect your family and your home from shock, fire, and surge damage. We bring older systems up to current safety standards.',
    image: 'https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'ShieldAlert',
    overview: 'Proper grounding and modern protective devices are the difference between a safe electrical system and a hazardous one. Many older homes in the Valley area lack adequate grounding, GFCI protection, and arc-fault detection. We upgrade these critical safety features to protect your family and your property.',
    sections: [
      {
        heading: 'Grounding System Upgrades',
        body: 'A proper grounding system gives fault current a safe path to earth, protecting you from shock and helping your panel and breakers function correctly. We inspect ground rods, bonding, and the main bonding jumper, and we upgrade grounding where it is missing or inadequate.',
      },
      {
        heading: 'GFCI and AFCI Protection',
        body: 'GFCI outlets protect against shock in wet areas. AFCI breakers detect arc faults that can cause fires in living spaces. We install both types of protection to bring older homes up to current code and reduce electrical hazards throughout the house.',
      },
      {
        heading: 'Smoke and Carbon Monoxide Detectors',
        body: 'We install hardwired, interconnected smoke and carbon monoxide detectors with battery backup so every alarm in the home sounds together. Proper placement and interconnection give your family the earliest possible warning.',
      },
    ],
    warningSigns: [
      'Your home has two-prong outlets and no grounding',
      'GFCI protection is missing in kitchens, baths, or outdoors',
      'You do not have interconnected smoke detectors',
      'Your grounding system is old or you are unsure of its condition',
    ],
    needs: [
      'Upgrading an ungrounded electrical system',
      'Adding GFCI and AFCI protection throughout the home',
      'Installing hardwired smoke and CO detectors',
      'Improving whole-house surge protection',
    ],
    faqs: [
      { q: 'What does grounding do?', a: 'Grounding provides a safe path for fault current to travel to the earth, which helps breakers trip correctly and reduces the risk of electric shock and equipment damage.' },
      { q: 'Can you add grounding to an older home?', a: 'Yes. We assess the existing wiring and grounding system and add or upgrade ground rods, bonding, and dedicated ground conductors where needed to bring the system up to current safety standards.' },
      { q: 'Do you install hardwired smoke detectors?', a: 'Yes. We install hardwired, interconnected smoke and carbon monoxide detectors with battery backup so that when one alarm triggers, they all sound together.' },
    ],
    ctaLabel: 'Improve Your Home\'s Safety',
    relatedServices: ['circuit-breaker-services', 'electrical-panel-repair-upgrades', 'outlet-switch-installation', 'wiring-rewiring'],
  },
  {
    slug: 'electrical-power-restoration-diagnostics',
    title: 'Electrical Power Restoration & Diagnostics',
    shortTitle: 'Power Restoration & Diagnostics',
    h1: 'Electrical Power Restoration & Diagnostics in Valley, Alabama',
    metaTitle: 'Power Restoration & Electrical Diagnostics Valley, AL | Bausley Electrical',
    metaDescription: 'Lost power? We restore electrical service and diagnose complex issues in Valley, AL. Partial outages, tripped breakers, fault tracing. Call Bausley Electrical at 334-497-0921.',
    summary: 'When you lose power — partially or fully — we trace the cause and restore safe, reliable electrical service to your home.',
    image: 'https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Activity',
    overview: 'A power outage in your home can range from a single tripped breaker to a complex fault hidden in your wiring or panel. We respond to power-loss situations by systematically diagnosing the cause — from the service entrance through the panel to individual circuits — and restoring power safely and correctly.',
    sections: [
      {
        heading: 'Partial Power Outage Diagnosis',
        body: 'If only part of your home has lost power, the cause could be a tripped breaker, a failed GFCI, a lost neutral, or a damaged conductor. We trace the fault through your panel and circuits, identify the exact point of failure, and repair it so power is fully restored.',
      },
      {
        heading: 'Whole-Home Power Restoration',
        body: 'When the entire home loses power, we check the service entrance, meter base, main breaker, and panel to determine whether the issue is inside your electrical system or on the utility side. If the problem is within your system, we repair it; if it is a utility issue, we help you confirm and coordinate with the power company.',
      },
      {
        heading: 'Advanced Electrical Diagnostics',
        body: 'Some electrical problems are intermittent or hidden — a loose neutral causing flickering, a high-resistance connection causing heat, or a ground fault that trips a breaker under specific conditions. We use professional test equipment to isolate these complex faults and recommend lasting repairs.',
      },
    ],
    warningSigns: [
      'Part of your home has lost power',
      'Breakers trip and will not reset',
      'Lights flicker or brighten unexpectedly',
      'You smell burning or see scorching near the panel',
    ],
    needs: [
      'Restoring power after a partial outage',
      'Diagnosing an intermittent electrical fault',
      'Finding and repairing a lost neutral',
      'Full panel and circuit inspection after an outage',
    ],
    faqs: [
      { q: 'What should I do if I lose power in part of my home?', a: 'First, check your panel for any tripped breakers and try resetting them. If power does not return, call us at 334-497-0921 — we will diagnose the cause and restore power safely.' },
      { q: 'How do you find a hidden electrical fault?', a: 'We use professional multimeters, clamp meters, and thermal inspection to trace faults through your panel, circuits, and devices. This systematic approach lets us isolate problems that are not visible to the eye.' },
      { q: 'Could the power company be responsible for my outage?', a: 'Sometimes. If the problem is on the utility side of the meter, the power company handles the repair. We check your service entrance and panel to determine which side the issue is on and help you coordinate accordingly.' },
    ],
    ctaLabel: 'Restore Your Power',
    relatedServices: ['electrical-repair-troubleshooting', 'electrical-panel-repair-upgrades', 'circuit-breaker-services', 'electrical-grounding-safety-improvements'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
