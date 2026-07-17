/* Mind Screen — site data (English only).
   TESTS mirrors lib/screens/tests_list_screen.dart + TestConstants, enriched
   with detail-dialog content. Validation figures are approximate, drawn from
   published validation studies, and vary with population and cut-off score. */

const TESTS = [
  {
    id: "01", img: "depression.png", scale: "PHQ-9", name: "Depression",
    fullName: "Patient Health Questionnaire-9",
    org: "Drs. Robert L. Spitzer, Kurt Kroenke & Janet B. W. Williams (Pfizer Inc.)",
    year: "1999–2001",
    history: "The depression module of the PRIME-MD diagnostic tool. Its nine items map directly onto the nine DSM criteria for a major depressive episode, making it one of the most widely used depression screeners in primary care worldwide.",
    questions: "9",
    accuracy: "≈ 88%",
    accuracyNote: "sensitivity & specificity for major depression (cut-off ≥ 10)"
  },
  {
    id: "02", img: "anxiety.png", scale: "GAD-7", name: "Anxiety",
    fullName: "Generalized Anxiety Disorder 7-item scale",
    org: "Drs. Robert L. Spitzer, Kurt Kroenke, Janet B. W. Williams & Bernd Löwe",
    year: "2006",
    history: "Designed as a brief self-report tool to identify probable generalized anxiety disorder and gauge its severity. It also performs well as a screener for panic, social anxiety and PTSD.",
    questions: "7",
    accuracy: "89% / 82%",
    accuracyNote: "sensitivity / specificity for GAD (cut-off ≥ 10)"
  },
  {
    id: "03", img: "loneliness.png", scale: "UCLA", name: "Loneliness",
    fullName: "UCLA Loneliness Scale (Version 3)",
    org: "Dr. Daniel W. Russell, University of California, Los Angeles",
    year: "1978 (v3: 1996)",
    history: "The most widely used measure of subjective loneliness. Version 3 simplified the wording of earlier editions and has been validated across students, adults and older populations.",
    questions: "20",
    accuracy: "≈ 89–94%",
    accuracyNote: "internal-consistency reliability (Cronbach's α)"
  },
  {
    id: "04", img: "burnout.png", scale: "CBI", name: "Burnout",
    fullName: "Copenhagen Burnout Inventory",
    org: "Tage S. Kristensen & colleagues (PUMA study, Denmark)",
    year: "2005",
    history: "Created as a public-domain alternative to the Maslach Burnout Inventory. It measures fatigue and exhaustion across three domains: personal, work-related and client-related burnout.",
    questions: "19",
    accuracy: "≈ 85–87%",
    accuracyNote: "internal-consistency reliability (Cronbach's α)"
  },
  {
    id: "05", img: "alzheimer.png", scale: "MMSE", name: "Alzheimer",
    fullName: "Mini-Mental State Examination",
    org: "Drs. Marshal F. Folstein, Susan E. Folstein & Paul R. McHugh",
    year: "1975",
    history: "A brief 30-point examination of cognitive function covering orientation, memory, attention, language and visuospatial skills. It has been a cornerstone of dementia screening for decades.",
    questions: "11 tasks (30 points)",
    accuracy: "≈ 88% / 86%",
    accuracyNote: "sensitivity / specificity for dementia (cut-off < 24)"
  },
  {
    id: "06", img: "adult-adhd.png", scale: "ASRS", name: "Adult ADHD",
    fullName: "Adult ADHD Self-Report Scale (ASRS v1.1)",
    org: "World Health Organization, with Drs. Ronald Kessler & Lenard Adler",
    year: "2005",
    history: "Developed with the WHO to screen adults for attention-deficit/hyperactivity disorder. The six-item screener (Part A) is drawn from the full 18-item scale and is keyed to DSM criteria.",
    questions: "6",
    accuracy: "69% / 99.5%",
    accuracyNote: "sensitivity / specificity for adult ADHD"
  },
  {
    id: "07", img: "aggression.png", scale: "BPAQ", name: "Aggression",
    fullName: "Buss-Perry Aggression Questionnaire",
    org: "Drs. Arnold H. Buss & Mark Perry",
    year: "1992",
    history: "A refinement of the older Buss-Durkee Hostility Inventory. It measures four facets of trait aggression: physical aggression, verbal aggression, anger and hostility.",
    questions: "29",
    accuracy: "≈ 89%",
    accuracyNote: "internal-consistency reliability (Cronbach's α)"
  },
  {
    id: "08", img: "alcohol.png", scale: "AUDIT · DAST", name: "Alcohol & Drug",
    fullName: "AUDIT + DAST-10",
    org: "AUDIT: World Health Organization · DAST: Dr. Harvey A. Skinner",
    year: "AUDIT 1989/1993 · DAST 1982",
    history: "Two complementary screeners. The AUDIT, developed by the WHO, detects hazardous and harmful alcohol use; the DAST-10 mirrors it for drug-related problems.",
    questions: "20 (10 + 10)",
    accuracy: "≈ 92% / 94%",
    accuracyNote: "AUDIT sensitivity / specificity for hazardous drinking"
  },
  {
    id: "09", img: "mania.png", scale: "MDQ", name: "Mania",
    fullName: "Mood Disorder Questionnaire",
    org: "Dr. Robert M. A. Hirschfeld & colleagues",
    year: "2000",
    history: "The first brief self-report screener for the bipolar spectrum. It asks about a lifetime history of manic or hypomanic symptoms and their co-occurrence and impact.",
    questions: "13",
    accuracy: "73% / 90%",
    accuracyNote: "sensitivity / specificity in clinical samples"
  },
  {
    id: "10", img: "panic.png", scale: "PDSS", name: "Panic",
    fullName: "Panic Disorder Severity Scale",
    org: "Dr. M. Katherine Shear & colleagues",
    year: "1997",
    history: "Rates the severity of panic disorder across seven dimensions — including attack frequency, distress, anticipatory anxiety and avoidance — and is widely used to track treatment response.",
    questions: "7",
    accuracy: "≈ 92%",
    accuracyNote: "internal-consistency reliability (Cronbach's α)"
  },
  {
    id: "11", img: "ptsd.png", scale: "PCL-5", name: "PTSD",
    fullName: "PTSD Checklist for DSM-5",
    org: "U.S. National Center for PTSD (Dept. of Veterans Affairs)",
    year: "2013",
    history: "A 20-item self-report measure updated to match the DSM-5 criteria for post-traumatic stress disorder. Used for screening, provisional diagnosis and monitoring symptom change.",
    questions: "20",
    accuracy: "≈ 88%",
    accuracyNote: "sensitivity for probable PTSD (cut-off ≈ 31–33)"
  }
];

const FAQ = [
  {
    q: "Is Mind Screen a medical diagnosis?",
    a: "No. Mind Screen is a self-awareness and screening tool. It uses the same instruments clinicians use for initial screening, but a result is not a clinical diagnosis. If your results suggest concern, we encourage you to consult a qualified professional."
  },
  {
    q: "Which assessments are free?",
    a: "Depression (PHQ-9), Anxiety (GAD-7), Loneliness (UCLA) and Burnout (CBI) are free forever. The rest of the library unlocks with a Pro subscription."
  },
  {
    q: "How does the voice assessment work?",
    a: "You choose a topic, the AI assistant greets you, then asks the questions of the matching clinical scale out loud — adapted for natural dialogue. You answer by speaking, and Mind Screen generates an interpreted summary of your responses."
  },
  {
    q: "Is my data private?",
    a: "Yes. Your conversations and results are confidential and never shared with third parties. Sessions run in a secure environment and your data belongs to you alone."
  },
  {
    q: "Which platforms are supported?",
    a: "Mind Screen is a mobile app, available on iOS and Android. Just download it from the App Store or Google Play to get started."
  }
];
