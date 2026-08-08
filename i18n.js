/* =========================================================
   SOLAR SHINE — i18n (English / Urdu)
   Simple client-side dictionary swap. No build step needed.
   ========================================================= */

const translations = {
  en: {
    "nav.home":"Home","nav.about":"About","nav.products":"Products","nav.services":"Services",
    "nav.calculator":"Calculator","nav.projects":"Projects","nav.faq":"FAQs","nav.contact":"Contact",
    "nav.quote":"Get Free Quote","nav.call":"Call Us Now",

    "hero.eyebrow":"Solar · Inverters · Lithium Storage",
    "hero.title":"Turn load-shedding into <em>daylight</em>, every single day.",
    "hero.lead":"Solar Shine designs and installs Tier-1 N-Type solar panels, hybrid inverters and lithium battery systems for homes and businesses across Pakistan — with a free site survey and full NEPRA net-metering support.",
    "hero.cta1":"Get a Free Quote","hero.cta2":"Calculate My Savings",
    "hero.stat1":"Systems Installed","hero.stat2":"Capacity Deployed","hero.stat3":"Panel Warranty","hero.stat4":"Cities Served",
    "hero.badge1":"Avg. Bill Reduction","hero.badge2":"Payback Period","hero.yrs":" yrs",

    "about.eyebrow":"Who We Are",
    "about.title":"Pakistan's trusted name for going solar, done right.",
    "about.p1":"Solar Shine was founded to make clean, reliable energy simple for Pakistani homes and businesses. As grid tariffs climb past PKR 60/unit and load-shedding disrupts daily life, we design right-sized systems — not oversold ones — using only Tier-1 N-Type panels, proven hybrid inverters, and long-life LiFePO4 batteries.",
    "about.p2":"From your first site survey to NEPRA net-metering approval and beyond, one team stays accountable for the whole journey — including after-sales service most installers forget about.",
    "about.badgeYears":"Years Experience","about.badgeCert":"Certified Partner",
    "about.why1t":"Certified Installers","about.why1d":"Trained technicians, safe wiring, code-compliant installs.",
    "about.why2t":"Tier-1 Brands Only","about.why2d":"LONGi, Jinko, Trina, Huawei, Growatt, BYD and more.",
    "about.why3t":"Net Metering Handled","about.why3d":"We manage your DISCO paperwork end-to-end.",
    "about.why4t":"Real After-Sales Care","about.why4d":"AMC plans and rapid-response repairs, year-round.",

    "products.eyebrow":"2026 Equipment Lineup","products.title":"Every component, Tier-1 grade.",
    "products.lead":"Real brands, real specs, real PKR pricing — pulled straight from our current supplier price lists.",
    "products.tabPanels":"Solar Panels","products.tabInverters":"Inverters","products.tabBatteries":"Batteries","products.tabAccessories":"Accessories",
    "products.wattage":"Wattage","products.warranty":"Warranty","products.best":"Best For","products.priceLabel":"Price",
    "products.perWatt":"/Watt","products.yrs":"yrs","products.capacity":"Capacity","products.protection":"Protection",
    "products.efficiency":"Efficiency","products.hybrid":"Hybrid","products.onHybrid":"On-Grid / Hybrid","products.entry":"Entry-Level",
    "products.threePhase":"3-Phase","products.cycles":"Cycle Life","products.capacityKwh":"Capacity","products.dod":"Depth of Discharge","products.voltage":"Voltage",
    "products.tilt":"Tilt Angle","products.rating":"Rating",
    "products.panel1best":"Hot climates","products.panel2best":"Best value","products.panel3best":"Coastal humidity",
    "products.panel4best":"Commercial roofs","products.panel5best":"Max efficiency (25%)","products.panel6best":"Local warranty support",
    "products.inv1best":"Most popular / local support","products.inv2best":"Dual MPPT, app monitoring","products.inv3best":"Premium / AI AFCI safety",
    "products.inv4best":"Heat-tolerant design","products.inv5title":"Budget Alternatives","products.inv5best":"Small homes on budget",
    "products.inv6title":"Commercial Range","products.inv6best":"Villas & factories",
    "products.bat1best":"Multi-brand compatible","products.bat2best":"Huawei SUN2000 systems",
    "products.bat3title":"Canadian Solar / Pylontech","products.bat3best":"Modular stacking",
    "products.bat4title":"TigFox / Itel / Narada / Dyness","products.bat4best":"Budget-friendly entry",
    "products.acc1t":"Mounting Structures","products.acc1m":"L2/L3 aluminum & galvanized iron frames","products.acc1best":"Standard & elevated rooftops",
    "products.acc2t":"Breakers & Surge Protection","products.acc2m":"Tomzn, Terasaki, Schneider DC/AC breakers","products.acc2best":"Lightning & surge defense",
    "products.acc3t":"Solar Cabling & MC4","products.acc3m":"XLPO double-insulated tinned copper wire","products.acc3best":"UV-safe outdoor runs",
    "products.acc4t":"Net Metering Kit","products.acc4m":"Bi-directional green meters & IP65 DB boxes","products.acc4best":"K-Electric, LESCO, IESCO, FESCO, PESCO",
    "products.compareFeature":"Feature","products.compareLfp":"Lithium Iron Phosphate (LFP)","products.compareLead":"Tall Tubular Lead-Acid",
    "products.compareLifespan":"Lifespan / Cycle Life","products.compareYears":"years","products.compareCycles":"cycles",
    "products.compareDod":"Depth of Discharge","products.compareDod2":"50% max usable",
    "products.compareCharge":"Charging Speed","products.compareCharge1":"1.5–2 hours (full)","products.compareCharge2":"8–10 hours (full)",
    "products.compareMaint":"Maintenance","products.compareMaint1":"Zero — integrated BMS","products.compareMaint2":"Periodic water topping",
    "products.cta":"Ask About Any Product",

    "services.eyebrow":"What We Do","services.title":"End-to-end solar, start to finish.",
    "services.lead":"One team for design, supply, installation, net metering, and everything after.",
    "services.s1t":"Residential Installation","services.s1d":"Right-sized rooftop systems for homes, from 3kW starter kits to full 10kW+ backup.",
    "services.s2t":"Commercial & Industrial","services.s2d":"High-capacity on-grid and three-phase systems for factories, plazas and offices.",
    "services.s3t":"Net Metering Assistance","services.s3d":"Complete NEPRA & DISCO paperwork handled — bi-directional meter to approval.",
    "services.s4t":"Maintenance & AMC","services.s4d":"Scheduled cleaning, inspection and annual maintenance contracts to protect output.",
    "services.s5t":"Inverter Repair & Replacement","services.s5d":"Fast diagnostics and genuine parts for Inverex, Growatt, Huawei, Solis & more.",
    "services.s6t":"Battery Upgrades","services.s6d":"Migrate from lead-acid to long-life LiFePO4 storage without replacing your inverter.",
    "services.s7t":"System Audits","services.s7d":"Underperforming system? We inspect wiring, shading and inverter health.",
    "services.s8t":"Free Site Survey","services.s8d":"A technician assesses your roof, load and shading before we quote — always free.",

    "process.eyebrow":"How It Works","process.title":"From free survey to full sunshine.",
    "process.s1t":"Site Survey","process.s1d":"Free roof & load assessment",
    "process.s2t":"System Design","process.s2d":"Right-sized panel & inverter plan",
    "process.s3t":"Installation","process.s3d":"Certified crew, usually 1–3 days",
    "process.s4t":"Net Metering","process.s4d":"DISCO approval handled for you",
    "process.s5t":"Monitor & Save","process.s5d":"Track output, enjoy lower bills",

    "calc.eyebrow":"Estimate In Seconds","calc.title":"See what solar could save you.",
    "calc.lead":"Move the slider to match your average monthly electricity bill for a rough system size and cost estimate.",
    "calc.billLabel":"Average Monthly Bill","calc.propLabel":"Property Type",
    "calc.propHome":"Home","calc.propVilla":"Villa / Large House","calc.propComm":"Commercial",
    "calc.batteryLabel":"Include Battery Backup?","calc.yes":"Yes, full backup","calc.no":"No, on-grid only",
    "calc.disclaimer":"Estimate only, based on typical 2026 Pakistani market pricing. Your free site survey gives an exact quote.",
    "calc.resultEyebrow":"Your Estimate","calc.resultTitle":"Recommended system",
    "calc.rSystem":"System Size","calc.rPanels":"Panels Needed","calc.rCost":"Est. Turnkey Cost","calc.rPayback":"Payback Period",
    "calc.cta":"Get This Exact Quote",
    "calc.tSystem":"System","calc.tIncludes":"Includes","calc.tCost":"Turnkey Cost (PKR)",
    "calc.pkg1":"5× 600W panels, 3kW hybrid inverter, 2.5–5kWh battery",
    "calc.pkg2":"10× 585W panels, 6kW hybrid inverter, 5.12kWh lithium battery",
    "calc.pkg3":"17× 585W panels, 10kW 3-phase inverter, net metering setup",
    "calc.pkg4":"18× 585W panels, 10kW hybrid inverter, 10.2kWh battery storage",
    "calc.pkg5":"26× 585W panels, 15kW hybrid inverter, 10–15kWh battery backup",

    "projects.eyebrow":"Our Work","projects.title":"Recently completed installations.",
    "projects.p1":"10 Marla Home — 6kW Hybrid","projects.p2":"Textile Plaza — 30kW Three-Phase",
    "projects.p3":"1 Kanal Villa — 15kW Hybrid","projects.p4":"Warehouse — 10kW On-Grid",
    "projects.p5":"5 Marla Home — 3kW Starter","projects.p6":"Retail Plaza — 20kW Hybrid",

    "testi.eyebrow":"Customer Stories","testi.title":"Trusted by homes and businesses across Pakistan.",
    "testi.t1":"\"Our bill dropped from PKR 45,000 to under PKR 8,000. The team handled the net metering paperwork completely — we didn't visit LESCO even once.\"",
    "testi.n1":"Asim R.","testi.c1":"DHA, Lahore",
    "testi.t2":"\"Installed a 10kW hybrid system with battery backup before summer. Zero load-shedding disruption since — the AC runs all night, guilt-free.\"",
    "testi.n2":"Sana K.","testi.c2":"Bahria Town, Karachi",
    "testi.t3":"\"Professional survey, honest sizing — they talked us out of an oversized system we didn't need. Saved us money upfront and it still covers our whole factory.\"",
    "testi.n3":"M. Farooq","testi.c3":"Industrial Area, Faisalabad",

    "faq.eyebrow":"Common Questions","faq.title":"Everything you're wondering about solar.",
    "faq.q1":"How long does installation actually take?",
    "faq.a1":"Most residential systems (3–10kW) are installed in 1–3 days once materials are on site. Commercial and three-phase systems can take 5–10 days depending on scale and roof access.",
    "faq.q2":"How does NEPRA net metering work?",
    "faq.a2":"A bi-directional green meter records both the units you import from and export to the grid. Excess solar energy you generate is credited against what you draw at night — we handle the entire DISCO application on your behalf.",
    "faq.q3":"Should I choose lithium (LiFePO4) or lead-acid batteries?",
    "faq.a3":"LiFePO4 batteries cost more upfront but last 12–20 years with 90–95% usable capacity and zero maintenance, versus 2–3 years and 50% usable capacity for tall tubular lead-acid. For most households, lithium pays for itself in avoided replacements.",
    "faq.q4":"What warranty comes with the equipment?",
    "faq.a4":"Tier-1 solar panels typically carry 25–30 year performance warranties, hybrid inverters 5–10 years depending on brand, and lithium batteries 5–10 years. We also offer optional AMC plans for ongoing maintenance.",
    "faq.q5":"Do you offer financing or installment plans?",
    "faq.a5":"We work with several partner banks and leasing companies offering solar financing. Share your monthly bill during your free survey and we'll walk you through the options that fit your budget.",
    "faq.q6":"What happens if a panel or inverter fails?",
    "faq.a6":"Our AMC and warranty support covers diagnostics and genuine replacement parts. Most inverter issues are resolved within 48–72 hours of a reported fault.",

    "contact.eyebrow":"Get In Touch","contact.title":"Book your free site survey.",
    "contact.lead":"Tell us about your home or business and we'll get back within one business day.",
    "contact.infoTitle":"Contact details","contact.infoLead":"Reach us directly, or send the form and we'll call you back.",
    "contact.phoneT":"Phone","contact.waT":"WhatsApp","contact.emailT":"Email",
    "contact.hoursT":"Head Office","contact.hoursV":"Gulberg III, Lahore · Mon–Sat, 9am–7pm",
    "contact.fName":"Full Name","contact.fPhone":"Phone Number","contact.fCity":"City","contact.fBill":"Avg. Monthly Bill (PKR)",
    "contact.fMsg":"Message","contact.fMsgPh":"Tell us about your roof size, current setup, or any questions...",
    "contact.fSubmit":"Send via WhatsApp",
    "contact.fNote":"We'll open WhatsApp with your details pre-filled — nothing is stored on our servers.",

    "footer.about":"Tier-1 solar panels, hybrid inverters and lithium battery systems, installed and supported across Pakistan.",
    "footer.explore":"Explore","footer.support":"Support","footer.areas":"Service Areas","footer.warranty":"Warranty Claim",
    "footer.rights":"© 2026 Solar Shine. All rights reserved.","footer.tag":"Designed & built for Pakistan's sun."
  },

  ur: {
    "nav.home":"ہوم","nav.about":"ہمارے بارے میں","nav.products":"پروڈکٹس","nav.services":"سروسز",
    "nav.calculator":"کیلکولیٹر","nav.projects":"پراجیکٹس","nav.faq":"عمومی سوالات","nav.contact":"رابطہ کریں",
    "nav.quote":"مفت کوٹیشن حاصل کریں","nav.call":"ابھی کال کریں",

    "hero.eyebrow":"سولر · انورٹرز · لیتھیم اسٹوریج",
    "hero.title":"لوڈشیڈنگ کو ہر روز <em>روشن دن</em> میں بدل دیں۔",
    "hero.lead":"سولر شائن پاکستان بھر کے گھروں اور کاروباروں کے لیے اعلیٰ معیار کے N-Type سولر پینلز، ہائبرڈ انورٹرز اور لیتھیم بیٹری سسٹمز ڈیزائن اور انسٹال کرتا ہے — مفت سائٹ سروے اور مکمل نیپرا نیٹ میٹرنگ سپورٹ کے ساتھ۔",
    "hero.cta1":"مفت کوٹیشن حاصل کریں","hero.cta2":"اپنی بچت کا حساب لگائیں",
    "hero.stat1":"انسٹال شدہ سسٹمز","hero.stat2":"نصب شدہ صلاحیت","hero.stat3":"پینل وارنٹی","hero.stat4":"شہروں میں خدمات",
    "hero.badge1":"اوسط بل میں کمی","hero.badge2":"واپسی کی مدت","hero.yrs":" سال",

    "about.eyebrow":"ہم کون ہیں",
    "about.title":"صحیح طریقے سے سولر لگوانے کے لیے پاکستان کا معتبر نام۔",
    "about.p1":"سولر شائن کی بنیاد پاکستانی گھروں اور کاروباروں کے لیے صاف اور قابلِ اعتماد توانائی کو آسان بنانے کے لیے رکھی گئی۔ جیسے جیسے بجلی کے نرخ 60 روپے فی یونٹ سے بڑھ رہے ہیں اور لوڈشیڈنگ روزمرہ زندگی متاثر کر رہی ہے، ہم صرف درست سائز کے سسٹم ڈیزائن کرتے ہیں — ضرورت سے زیادہ فروخت نہیں — صرف اعلیٰ معیار کے N-Type پینلز، آزمودہ ہائبرڈ انورٹرز اور دیرپا LiFePO4 بیٹریوں کے ساتھ۔",
    "about.p2":"پہلے سائٹ سروے سے لے کر نیپرا نیٹ میٹرنگ کی منظوری اور اس کے بعد بھی، ایک ہی ٹیم پورے سفر کی ذمہ دار رہتی ہے — بشمول وہ بعد از فروخت سروس جو زیادہ تر انسٹالرز بھول جاتے ہیں۔",
    "about.badgeYears":"سالوں کا تجربہ","about.badgeCert":"سرٹیفائیڈ پارٹنر",
    "about.why1t":"سرٹیفائیڈ انسٹالرز","about.why1d":"تربیت یافتہ ٹیکنیشنز، محفوظ وائرنگ، معیاری تنصیب۔",
    "about.why2t":"صرف اعلیٰ معیار کے برانڈز","about.why2d":"LONGi، Jinko، Trina، Huawei، Growatt، BYD اور دیگر۔",
    "about.why3t":"نیٹ میٹرنگ کا مکمل انتظام","about.why3d":"ہم آپ کے DISCO کاغذات کا مکمل خیال رکھتے ہیں۔",
    "about.why4t":"حقیقی بعد از فروخت سروس","about.why4d":"سال بھر AMC پلانز اور فوری مرمت کی سہولت۔",

    "products.eyebrow":"2026 آلات کی رینج","products.title":"ہر پرزہ، اعلیٰ درجے کا۔",
    "products.lead":"اصل برانڈز، اصل تفصیلات، اصل پی کے آر قیمتیں — براہِ راست ہماری موجودہ سپلائر پرائس لسٹ سے۔",
    "products.tabPanels":"سولر پینلز","products.tabInverters":"انورٹرز","products.tabBatteries":"بیٹریاں","products.tabAccessories":"لوازمات",
    "products.wattage":"واٹیج","products.warranty":"وارنٹی","products.best":"بہترین برائے","products.priceLabel":"قیمت",
    "products.perWatt":"/واٹ","products.yrs":"سال","products.capacity":"صلاحیت","products.protection":"تحفظ",
    "products.efficiency":"کارکردگی","products.hybrid":"ہائبرڈ","products.onHybrid":"آن گرڈ / ہائبرڈ","products.entry":"بنیادی سطح",
    "products.threePhase":"3-فیز","products.cycles":"سائیکل لائف","products.capacityKwh":"صلاحیت","products.dod":"ڈیپتھ آف ڈسچارج","products.voltage":"وولٹیج",
    "products.tilt":"جھکاؤ زاویہ","products.rating":"ریٹنگ",
    "products.panel1best":"گرم موسم کے لیے","products.panel2best":"بہترین قیمت","products.panel3best":"ساحلی نمی کے لیے",
    "products.panel4best":"کمرشل چھتوں کے لیے","products.panel5best":"زیادہ سے زیادہ کارکردگی (25%)","products.panel6best":"مقامی وارنٹی سپورٹ",
    "products.inv1best":"سب سے مقبول / مقامی سپورٹ","products.inv2best":"ڈوئل MPPT، ایپ مانیٹرنگ","products.inv3best":"پریمیم / AI حفاظتی نظام",
    "products.inv4best":"گرمی برداشت کرنے والا ڈیزائن","products.inv5title":"سستے متبادل","products.inv5best":"محدود بجٹ کے چھوٹے گھر",
    "products.inv6title":"کمرشل رینج","products.inv6best":"ولاز اور فیکٹریاں",
    "products.bat1best":"متعدد برانڈز کے ساتھ ہم آہنگ","products.bat2best":"Huawei SUN2000 سسٹمز کے لیے",
    "products.bat3title":"Canadian Solar / Pylontech","products.bat3best":"ماڈیولر اسٹیکنگ",
    "products.bat4title":"TigFox / Itel / Narada / Dyness","products.bat4best":"کم بجٹ کے لیے موزوں",
    "products.acc1t":"ماؤنٹنگ اسٹرکچرز","products.acc1m":"L2/L3 ایلومینیم اور گیلوانائزڈ آئرن فریمز","products.acc1best":"عام اور بلند چھتیں",
    "products.acc2t":"بریکرز اور سرج پروٹیکشن","products.acc2m":"Tomzn، Terasaki، Schneider DC/AC بریکرز","products.acc2best":"بجلی گرنے اور سرج سے تحفظ",
    "products.acc3t":"سولر کیبلنگ اور MC4","products.acc3m":"XLPO ڈبل انسولیٹڈ ٹنڈ کاپر وائر","products.acc3best":"UV سے محفوظ آؤٹ ڈور تاریں",
    "products.acc4t":"نیٹ میٹرنگ کِٹ","products.acc4m":"بائی ڈائریکشنل گرین میٹرز اور IP65 ڈی بی باکسز","products.acc4best":"K-Electric، LESCO، IESCO، FESCO، PESCO",
    "products.compareFeature":"خصوصیت","products.compareLfp":"لیتھیم آئرن فاسفیٹ (LFP)","products.compareLead":"ٹال ٹیوبولر لیڈ ایسڈ",
    "products.compareLifespan":"عمر / سائیکل لائف","products.compareYears":"سال","products.compareCycles":"سائیکل",
    "products.compareDod":"ڈیپتھ آف ڈسچارج","products.compareDod2":"زیادہ سے زیادہ 50% قابلِ استعمال",
    "products.compareCharge":"چارجنگ کی رفتار","products.compareCharge1":"1.5–2 گھنٹے (مکمل)","products.compareCharge2":"8–10 گھنٹے (مکمل)",
    "products.compareMaint":"دیکھ بھال","products.compareMaint1":"صفر — بلٹ اِن BMS","products.compareMaint2":"وقتاً فوقتاً پانی ڈالنا ضروری",
    "products.cta":"کسی بھی پروڈکٹ کے بارے میں پوچھیں",

    "services.eyebrow":"ہم کیا کرتے ہیں","services.title":"شروع سے آخر تک مکمل سولر سروس۔",
    "services.lead":"ڈیزائن، سپلائی، تنصیب، نیٹ میٹرنگ اور اس کے بعد ہر چیز کے لیے ایک ہی ٹیم۔",
    "services.s1t":"رہائشی تنصیب","services.s1d":"3kW سے لے کر مکمل 10kW+ بیک اپ تک، گھروں کے لیے درست سائز کے چھتی نظام۔",
    "services.s2t":"کمرشل اور صنعتی","services.s2d":"فیکٹریوں، پلازوں اور دفاتر کے لیے زیادہ صلاحیت والے آن گرڈ اور تھری فیز نظام۔",
    "services.s3t":"نیٹ میٹرنگ میں مدد","services.s3d":"مکمل نیپرا اور DISCO کاغذی کارروائی — بائی ڈائریکشنل میٹر سے منظوری تک۔",
    "services.s4t":"دیکھ بھال اور AMC","services.s4d":"شیڈول صفائی، معائنہ اور سالانہ دیکھ بھال کے معاہدے تاکہ آؤٹ پٹ محفوظ رہے۔",
    "services.s5t":"انورٹر مرمت اور تبدیلی","services.s5d":"Inverex، Growatt، Huawei، Solis وغیرہ کے لیے فوری تشخیص اور اصلی پرزے۔",
    "services.s6t":"بیٹری اپ گریڈ","services.s6d":"انورٹر تبدیل کیے بغیر لیڈ ایسڈ سے دیرپا LiFePO4 اسٹوریج میں منتقلی۔",
    "services.s7t":"سسٹم آڈٹ","services.s7d":"کارکردگی کم ہے؟ ہم وائرنگ، سایہ اور انورٹر کی صحت کا معائنہ کرتے ہیں۔",
    "services.s8t":"مفت سائٹ سروے","services.s8d":"کوٹیشن سے پہلے ایک ٹیکنیشن آپ کی چھت، لوڈ اور سایہ کا جائزہ لیتا ہے — ہمیشہ مفت۔",

    "process.eyebrow":"یہ کیسے کام کرتا ہے","process.title":"مفت سروے سے مکمل دھوپ تک۔",
    "process.s1t":"سائٹ سروے","process.s1d":"مفت چھت اور لوڈ کا جائزہ",
    "process.s2t":"سسٹم ڈیزائن","process.s2d":"درست سائز کا پینل اور انورٹر منصوبہ",
    "process.s3t":"تنصیب","process.s3d":"سرٹیفائیڈ ٹیم، عموماً 1–3 دن",
    "process.s4t":"نیٹ میٹرنگ","process.s4d":"DISCO کی منظوری کا انتظام ہماری طرف سے",
    "process.s5t":"مانیٹر کریں اور بچائیں","process.s5d":"آؤٹ پٹ ٹریک کریں، کم بلوں سے لطف اٹھائیں",

    "calc.eyebrow":"چند سیکنڈز میں تخمینہ","calc.title":"دیکھیں سولر آپ کو کتنی بچت دے سکتا ہے۔",
    "calc.lead":"اپنے اوسط ماہانہ بجلی کے بل کے مطابق سلائیڈر کو حرکت دیں تاکہ سسٹم کے سائز اور لاگت کا اندازہ ہو سکے۔",
    "calc.billLabel":"اوسط ماہانہ بل","calc.propLabel":"جائیداد کی قسم",
    "calc.propHome":"گھر","calc.propVilla":"ولا / بڑا گھر","calc.propComm":"کمرشل",
    "calc.batteryLabel":"بیٹری بیک اپ شامل کریں؟","calc.yes":"جی ہاں، مکمل بیک اپ","calc.no":"نہیں، صرف آن گرڈ",
    "calc.disclaimer":"یہ صرف تخمینہ ہے، 2026 کی عام پاکستانی مارکیٹ قیمتوں پر مبنی۔ درست کوٹیشن کے لیے مفت سائٹ سروے کروائیں۔",
    "calc.resultEyebrow":"آپ کا تخمینہ","calc.resultTitle":"تجویز کردہ سسٹم",
    "calc.rSystem":"سسٹم سائز","calc.rPanels":"مطلوبہ پینلز","calc.rCost":"تخمینی مکمل لاگت","calc.rPayback":"واپسی کی مدت",
    "calc.cta":"یہی درست کوٹیشن حاصل کریں",
    "calc.tSystem":"سسٹم","calc.tIncludes":"شامل اشیاء","calc.tCost":"مکمل لاگت (PKR)",
    "calc.pkg1":"5× 600W پینلز، 3kW ہائبرڈ انورٹر، 2.5–5kWh بیٹری",
    "calc.pkg2":"10× 585W پینلز، 6kW ہائبرڈ انورٹر، 5.12kWh لیتھیم بیٹری",
    "calc.pkg3":"17× 585W پینلز، 10kW 3-فیز انورٹر، نیٹ میٹرنگ سیٹ اپ",
    "calc.pkg4":"18× 585W پینلز، 10kW ہائبرڈ انورٹر، 10.2kWh بیٹری اسٹوریج",
    "calc.pkg5":"26× 585W پینلز، 15kW ہائبرڈ انورٹر، 10–15kWh بیٹری بیک اپ",

    "projects.eyebrow":"ہمارا کام","projects.title":"حال ہی میں مکمل کی گئی تنصیبات۔",
    "projects.p1":"10 مرلہ گھر — 6kW ہائبرڈ","projects.p2":"ٹیکسٹائل پلازہ — 30kW تھری فیز",
    "projects.p3":"1 کنال ولا — 15kW ہائبرڈ","projects.p4":"گودام — 10kW آن گرڈ",
    "projects.p5":"5 مرلہ گھر — 3kW اسٹارٹر","projects.p6":"ریٹیل پلازہ — 20kW ہائبرڈ",

    "testi.eyebrow":"صارفین کی کہانیاں","testi.title":"پاکستان بھر کے گھروں اور کاروباروں کا اعتماد۔",
    "testi.t1":"\"ہمارا بل 45,000 روپے سے کم ہو کر 8,000 روپے سے بھی کم رہ گیا۔ ٹیم نے نیٹ میٹرنگ کے تمام کاغذات سنبھال لیے — ہم نے LESCO کا ایک چکر بھی نہیں لگایا۔\"",
    "testi.n1":"عاصم ر.","testi.c1":"ڈی ایچ اے، لاہور",
    "testi.t2":"\"گرمیوں سے پہلے بیٹری بیک اپ کے ساتھ 10kW ہائبرڈ سسٹم لگوایا۔ تب سے لوڈشیڈنگ کا کوئی مسئلہ نہیں — اے سی ساری رات بلا جھجک چلتا ہے۔\"",
    "testi.n2":"ثنا ک.","testi.c2":"بحریہ ٹاؤن، کراچی",
    "testi.t3":"\"پیشہ ورانہ سروے، ایماندارانہ سائزنگ — انہوں نے ہمیں غیرضروری بڑے سسٹم سے روکا۔ شروع میں پیسے بچائے اور اب بھی پوری فیکٹری چلا رہا ہے۔\"",
    "testi.n3":"ایم فاروق","testi.c3":"صنعتی علاقہ، فیصل آباد",

    "faq.eyebrow":"عام سوالات","faq.title":"سولر کے بارے میں آپ کے تمام سوالات کے جوابات۔",
    "faq.q1":"تنصیب میں اصل میں کتنا وقت لگتا ہے؟",
    "faq.a1":"سامان سائٹ پر پہنچنے کے بعد زیادہ تر رہائشی سسٹمز (3–10kW) 1–3 دن میں انسٹال ہو جاتے ہیں۔ کمرشل اور تھری فیز سسٹمز میں پیمانے اور چھت تک رسائی کے مطابق 5–10 دن لگ سکتے ہیں۔",
    "faq.q2":"نیپرا نیٹ میٹرنگ کیسے کام کرتی ہے؟",
    "faq.a2":"ایک بائی ڈائریکشنل گرین میٹر آپ کے گرڈ سے حاصل کردہ اور گرڈ کو بھیجی گئی دونوں یونٹس ریکارڈ کرتا ہے۔ آپ کی بنائی گئی اضافی سولر توانائی رات کے استعمال کے خلاف کریڈٹ کی جاتی ہے — ہم آپ کی جانب سے مکمل DISCO درخواست سنبھالتے ہیں۔",
    "faq.q3":"مجھے لیتھیم (LiFePO4) یا لیڈ ایسڈ بیٹری میں سے کیا منتخب کرنا چاہیے؟",
    "faq.a3":"LiFePO4 بیٹریاں شروع میں مہنگی ہوتی ہیں لیکن 90–95% قابلِ استعمال صلاحیت کے ساتھ 12–20 سال چلتی ہیں اور دیکھ بھال کی ضرورت نہیں، جبکہ ٹال ٹیوبولر لیڈ ایسڈ صرف 2–3 سال اور 50% صلاحیت دیتی ہے۔ زیادہ تر گھروں کے لیے لیتھیم بار بار تبدیلی کی بچت سے اپنی قیمت پوری کر لیتی ہے۔",
    "faq.q4":"آلات کے ساتھ کون سی وارنٹی ملتی ہے؟",
    "faq.a4":"اعلیٰ معیار کے سولر پینلز عموماً 25–30 سال کی کارکردگی وارنٹی رکھتے ہیں، ہائبرڈ انورٹرز برانڈ کے مطابق 5–10 سال، اور لیتھیم بیٹریاں 5–10 سال۔ ہم مسلسل دیکھ بھال کے لیے اختیاری AMC پلانز بھی پیش کرتے ہیں۔",
    "faq.q5":"کیا آپ فنانسنگ یا قسطوں کی سہولت دیتے ہیں؟",
    "faq.a5":"ہم کئی پارٹنر بینکوں اور لیزنگ کمپنیوں کے ساتھ کام کرتے ہیں جو سولر فنانسنگ فراہم کرتی ہیں۔ اپنے مفت سروے کے دوران اپنا ماہانہ بل بتائیں اور ہم آپ کو آپ کے بجٹ کے مطابق اختیارات سمجھائیں گے۔",
    "faq.q6":"اگر پینل یا انورٹر خراب ہو جائے تو کیا ہوگا؟",
    "faq.a6":"ہماری AMC اور وارنٹی سپورٹ تشخیص اور اصلی متبادل پرزوں کا احاطہ کرتی ہے۔ زیادہ تر انورٹر مسائل خرابی کی اطلاع کے 48–72 گھنٹوں کے اندر حل کر دیے جاتے ہیں۔",

    "contact.eyebrow":"رابطہ کریں","contact.title":"اپنا مفت سائٹ سروے بک کریں۔",
    "contact.lead":"ہمیں اپنے گھر یا کاروبار کے بارے میں بتائیں، ہم ایک کاروباری دن کے اندر جواب دیں گے۔",
    "contact.infoTitle":"رابطہ کی تفصیلات","contact.infoLead":"براہِ راست رابطہ کریں، یا فارم بھیجیں اور ہم آپ کو کال کریں گے۔",
    "contact.phoneT":"فون","contact.waT":"واٹس ایپ","contact.emailT":"ای میل",
    "contact.hoursT":"ہیڈ آفس","contact.hoursV":"گلبرگ 3، لاہور · پیر تا ہفتہ، صبح 9 تا شام 7",
    "contact.fName":"پورا نام","contact.fPhone":"فون نمبر","contact.fCity":"شہر","contact.fBill":"اوسط ماہانہ بل (PKR)",
    "contact.fMsg":"پیغام","contact.fMsgPh":"اپنی چھت کا سائز، موجودہ سیٹ اپ یا کوئی بھی سوال بتائیں...",
    "contact.fSubmit":"واٹس ایپ کے ذریعے بھیجیں",
    "contact.fNote":"آپ کی تفصیلات کے ساتھ واٹس ایپ خود بخود کھل جائے گا — کچھ بھی ہمارے سرور پر محفوظ نہیں ہوتا۔",

    "footer.about":"پاکستان بھر میں انسٹال اور سپورٹ کیے گئے اعلیٰ معیار کے سولر پینلز، ہائبرڈ انورٹرز اور لیتھیم بیٹری سسٹمز۔",
    "footer.explore":"مزید دیکھیں","footer.support":"سپورٹ","footer.areas":"خدمات کے علاقے","footer.warranty":"وارنٹی کلیم",
    "footer.rights":"© 2026 سولر شائن۔ جملہ حقوق محفوظ ہیں۔","footer.tag":"پاکستان کی دھوپ کے لیے بنایا گیا۔"
  }
};

function applyLanguage(lang){
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined){ el.innerHTML = dict[key]; }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if(dict[key] !== undefined){ el.setAttribute('placeholder', dict[key]); }
  });

  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });

  try{ localStorage.setItem('solarshine-lang', lang); }catch(e){}
}

document.addEventListener('DOMContentLoaded', () => {
  let saved = 'en';
  try{ saved = localStorage.getItem('solarshine-lang') || 'en'; }catch(e){}
  applyLanguage(saved);

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
});
