export type ProcessStep = {
  step: string;
  title: string;
  body: string;
  detail: string;
};

export const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Book",
    body: "Tell us the issue and pick a slot that fits your day.",
    detail:
      "Call or send a short request with the make, model, and what you are noticing. We confirm a time and what to bring.",
  },
  {
    step: "02",
    title: "Inspect",
    body: "We diagnose, share findings, and confirm the plan with you.",
    detail:
      "Scans, road tests, and visual checks turn into a clear report. You approve the scope and parts before tools come out.",
  },
  {
    step: "03",
    title: "Repair",
    body: "Approved work gets done carefully with parts you chose.",
    detail:
      "Our technicians follow the agreed plan, keep you updated on bigger jobs, and stay within the quote unless you say otherwise.",
  },
  {
    step: "04",
    title: "Handover",
    body: "Final check, clear notes, and keys back in your hand.",
    detail:
      "We walk you through what was done, what to watch for, and when the next service is due. Then you drive out with confidence.",
  },
];