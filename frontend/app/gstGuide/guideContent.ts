/**
 * GST Guide — structured content.
 *
 * Content architecture sourced from the GST Guide content document (30 topics),
 * organised into the 8 recommended navigation sections. Rendered by
 * `frontend/app/gstGuide/page.tsx` in a docs-style layout.
 */

export type SectionId =
  | "getting-started"
  | "registration"
  | "manage"
  | "returns"
  | "business-types"
  | "compliance"
  | "notices"
  | "rules";

export interface GuideSection {
  id: SectionId;
  num: string;
  title: string;
}

export type Block =
  | { kind: "heading"; content: string }
  | { kind: "text"; content: string }
  | { kind: "note"; content: string }
  | { kind: "list"; title?: string; ordered?: boolean; items: string[] }
  | { kind: "terminal"; title?: string; content: string }
  | { kind: "table"; title?: string; headers: string[]; rows: string[][] };

export interface GuideTopic {
  id: string;
  num: string;
  title: string;
  section: SectionId;
  intro?: string;
  blocks: Block[];
}

export const GUIDE_SECTIONS: GuideSection[] = [
  { id: "getting-started", num: "01", title: "Getting Started" },
  { id: "registration", num: "02", title: "Registration" },
  { id: "manage", num: "03", title: "Manage Your GST" },
  { id: "returns", num: "04", title: "Returns & Payments" },
  { id: "business-types", num: "05", title: "Special Business Types" },
  { id: "compliance", num: "06", title: "Compliance" },
  { id: "notices", num: "07", title: "Notices & Problems" },
  { id: "rules", num: "08", title: "Rules & Regulations" },
];

export const GUIDE_TOPICS: GuideTopic[] = [
  // ── 01. Getting Started ────────────────────────────────────────────────
  {
    id: "what-is-gst",
    num: "01",
    title: "Getting Started with GST",
    section: "getting-started",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What is GST?",
          "How GST works",
          "Types of GST",
          "Who needs GST registration?",
          "When GST registration is optional",
        ],
      },
      { kind: "heading", content: "Simple content" },
      {
        kind: "text",
        content:
          "GST is a tax system used for the supply of goods and services in India. If your business meets the applicable requirements, you may need to register and receive a GSTIN.",
      },
      { kind: "text", content: "Before registering, understand:" },
      {
        kind: "list",
        items: [
          "Whether you need GST registration",
          "Which type of registration applies to you",
          "What your filing responsibilities will be",
          "What records and documents you need to maintain",
        ],
      },
    ],
  },
  {
    id: "need-registration",
    num: "02",
    title: "Do You Need GST Registration?",
    section: "getting-started",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Turnover-based registration",
          "Mandatory registration situations",
          "Voluntary registration",
          "Interstate business",
          "E-commerce sellers",
          "Service providers",
          "Freelancers",
          "Exporters",
        ],
      },
      { kind: "heading", content: "User flow" },
      {
        kind: "terminal",
        content: `Start
  ↓
Understand your business
  ↓
Check applicable registration requirements
  ↓
Check turnover and business conditions
  ↓
Determine whether registration is required
  ↓
Register or continue monitoring eligibility`,
      },
    ],
  },
  {
    id: "prepare-before-registering",
    num: "03",
    title: "Prepare Before You Register",
    section: "getting-started",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Business information",
          "Personal information",
          "Contact details",
          "Business address",
          "Bank information",
          "Business activities",
        ],
      },
      { kind: "heading", content: "Checklist" },
      {
        kind: "text",
        content: "Before starting registration, keep your details ready:",
      },
      {
        kind: "list",
        items: [
          "PAN",
          "Aadhaar, where applicable",
          "Mobile number",
          "Email address",
          "Photograph",
          "Business address details",
          "Address proof",
          "Bank details",
          "Business constitution documents",
          "Authorization documents, where applicable",
        ],
      },
      { kind: "text", content: "The portal should present this as a checklist:" },
      {
        kind: "terminal",
        title: "Registration Checklist",
        content: `✓ PAN
✓ Mobile Number
✓ Email
✓ Business Address Proof
○ Bank Details
○ Photograph
○ Additional Documents`,
      },
    ],
  },

  // ── 02. Registration ───────────────────────────────────────────────────
  {
    id: "register-for-gst",
    num: "04",
    title: "Register for GST",
    section: "registration",
    blocks: [
      { kind: "heading", content: "Step-by-step guide" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Go to Services",
          "Select Registration",
          "Select New Registration",
          "Choose Taxpayer",
          "Select your State and District",
          "Enter your legal business name",
          "Enter your PAN",
          "Enter your email address",
          "Enter your mobile number",
          "Verify both using OTP",
          "Receive your Temporary Reference Number (TRN)",
        ],
      },
    ],
  },
  {
    id: "continue-registration",
    num: "05",
    title: "Continue Your Registration Application",
    section: "registration",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Using your TRN",
          "Returning to a saved application",
          "Completing incomplete sections",
          "Saving drafts",
          "Reviewing application progress",
        ],
      },
      { kind: "heading", content: "User flow" },
      {
        kind: "terminal",
        content: `Enter TRN
     ↓
Verify OTP
     ↓
Open saved application
     ↓
Complete pending sections
     ↓
Review information
     ↓
Submit`,
      },
    ],
  },
  {
    id: "business-details",
    num: "06",
    title: "Add Your Business Details",
    section: "registration",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Legal business name",
          "Trade name",
          "Business constitution",
          "Date of commencement",
          "Date of liability",
          "Reason for registration",
        ],
      },
      { kind: "text", content: "Explain every field in simple language:" },
      {
        kind: "note",
        content:
          "Trade Name: The name your customers know your business by.",
      },
      {
        kind: "note",
        content:
          "Legal Name: The name associated with your PAN or registered legal entity.",
      },
    ],
  },
  {
    id: "owner-partner-director",
    num: "07",
    title: "Add Owner, Partner, or Director Details",
    section: "registration",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Sole proprietor",
          "Partners",
          "Directors",
          "Promoters",
          "Authorized signatory",
        ],
      },
      { kind: "text", content: "The guide should adapt based on business type." },
      {
        kind: "terminal",
        content: `What is your business type?

○ Sole Proprietorship
○ Partnership
○ LLP
○ Private Limited Company
○ Other`,
      },
      { kind: "text", content: "Then only show relevant guidance." },
    ],
  },
  {
    id: "business-address",
    num: "08",
    title: "Add Your Business Address",
    section: "registration",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Principal place of business",
          "Additional places of business",
          "Owned property",
          "Rented property",
          "Shared premises",
          "Consent-based premises",
          "Address documents",
        ],
      },
      { kind: "heading", content: "Important guidance" },
      { kind: "text", content: "Explain:" },
      {
        kind: "list",
        items: [
          "Why the address is required",
          "What document is accepted",
          "How to resolve address mismatches",
          "How to adjust an incorrect map pin",
        ],
      },
      {
        kind: "text",
        content:
          "This is particularly important because address and map mismatches can cause registration rejection.",
      },
    ],
  },
  {
    id: "goods-and-services",
    num: "09",
    title: "Add Your Goods and Services",
    section: "registration",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What you sell",
          "What services you provide",
          "Product classification",
          "Service classification",
          "Choosing applicable codes",
        ],
      },
      { kind: "text", content: "The UI should explain:" },
      {
        kind: "note",
        content:
          "Choose the goods or services that best describe your business.",
      },
      { kind: "text", content: "Include:" },
      {
        kind: "terminal",
        content: "Search your product or service",
      },
      {
        kind: "text",
        content:
          "Instead of forcing users to understand technical classifications immediately.",
      },
    ],
  },
  {
    id: "aadhaar-verification",
    num: "10",
    title: "Aadhaar and Identity Verification",
    section: "registration",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Aadhaar authentication",
          "OTP verification",
          "Biometric verification",
          "Identity verification",
          "What happens if verification fails",
        ],
      },
      { kind: "heading", content: "Troubleshooting" },
      {
        kind: "terminal",
        content: `Problem: OTP not received

Try:
1. Check your registered mobile number
2. Wait a few minutes
3. Request a new OTP
4. Try another verification method if available`,
      },
    ],
  },
  {
    id: "review-submit-registration",
    num: "11",
    title: "Review and Submit Your Registration",
    section: "registration",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Review all details",
          "Check documents",
          "Verify addresses",
          "Check names against official records",
          "Correct errors",
          "Sign application",
          "Submit",
        ],
      },
      { kind: "heading", content: "Final checklist" },
      {
        kind: "terminal",
        title: "Before submitting",
        content: `✓ Personal details correct
✓ Business details correct
✓ Address documents uploaded
✓ Owner/director details correct
✓ Bank details reviewed
✓ Business activities selected
✓ Application reviewed`,
      },
    ],
  },
  {
    id: "track-registration",
    num: "12",
    title: "Track Your GST Registration",
    section: "registration",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Application Reference Number",
          "Tracking application",
          "Pending verification",
          "Clarification requests",
          "Approval",
          "Rejection",
        ],
      },
      { kind: "heading", content: "Steps" },
      {
        kind: "terminal",
        content: `Services
→ Registration
→ Track Application Status`,
      },
      { kind: "text", content: "Explain every status:" },
      {
        kind: "table",
        headers: ["Status", "Meaning"],
        rows: [
          ["Submitted", "Application received"],
          ["Pending", "Verification is in progress"],
          ["Clarification Required", "Additional information is needed"],
          ["Approved", "GST registration approved"],
          ["Rejected", "Application was not approved"],
        ],
      },
    ],
  },

  // ── 03. Manage Your GST ────────────────────────────────────────────────
  {
    id: "understand-gstin",
    num: "13",
    title: "Get and Understand Your GSTIN",
    section: "manage",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What is a GSTIN?",
          "Where to find it",
          "When to use it",
          "GSTIN verification",
          "Updating registration details",
        ],
      },
    ],
  },
  {
    id: "gst-dashboard",
    num: "14",
    title: "Your GST Dashboard",
    section: "manage",
    intro: "This explains the redesigned portal itself.",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Pending tasks",
          "Upcoming deadlines",
          "Returns",
          "Payments",
          "Notices",
          "Registration updates",
        ],
      },
      { kind: "text", content: "The user should see:" },
      {
        kind: "terminal",
        title: "WHAT YOU NEED TO DO",
        content: `🔴 Urgent
Respond to a notice

🟠 Due Soon
File your return

🟡 Upcoming
Renew your LUT

✓ Completed
Previous return filed`,
      },
      {
        kind: "text",
        content:
          "This directly addresses the broader problem of users missing critical actions because information is scattered or hidden.",
      },
    ],
  },
  {
    id: "update-registration",
    num: "15",
    title: "Update or Change Your GST Registration",
    section: "manage",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Change business address",
          "Add business location",
          "Change contact information",
          "Add or remove partners/directors",
          "Change bank details",
          "Amend registration",
        ],
      },
      { kind: "heading", content: "Flow" },
      {
        kind: "terminal",
        content: `Services
→ Registration
→ Amendment of Registration`,
      },
    ],
  },

  // ── 04. Returns & Payments ─────────────────────────────────────────────
  {
    id: "understand-returns",
    num: "16",
    title: "Understanding GST Returns",
    section: "returns",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What is a GST return?",
          "Why returns are required",
          "Different return types",
          "Filing periods",
          "Due dates",
          "Nil returns",
          "What happens if you miss a return",
        ],
      },
    ],
  },
  {
    id: "file-return",
    num: "17",
    title: "How to File a GST Return",
    section: "returns",
    intro: "Simple user instructions:",
    blocks: [
      {
        kind: "terminal",
        content: `1. Go to Services
2. Select Returns
3. Select Returns Dashboard
4. Choose the financial year
5. Select the return period
6. Select the return you need to file
7. Enter or review information
8. Validate the return
9. Preview your information
10. Submit
11. Complete filing
12. Download confirmation`,
      },
    ],
  },
  {
    id: "filing-gstr1",
    num: "18",
    title: "Filing GSTR-1",
    section: "returns",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What GSTR-1 is",
          "Who needs to file it",
          "Sales information",
          "Invoice information",
          "Amendments",
          "Validation",
          "Submission",
          "Filing confirmation",
        ],
      },
      { kind: "heading", content: "Include" },
      {
        kind: "terminal",
        title: "Before you file",
        content: `✓ Check all invoices
✓ Check GSTIN details
✓ Check invoice dates
✓ Check taxable values
✓ Check tax amounts`,
      },
    ],
  },
  {
    id: "filing-gstr3b",
    num: "19",
    title: "Filing GSTR-3B",
    section: "returns",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Tax liability",
          "Input Tax Credit",
          "Tax payable",
          "Payment",
          "Filing",
        ],
      },
      { kind: "heading", content: "Step-by-step" },
      {
        kind: "terminal",
        content: `Review liability
      ↓
Review available ITC
      ↓
Calculate tax payable
      ↓
Make payment if required
      ↓
Review summary
      ↓
Submit
      ↓
File return`,
      },
    ],
  },
  {
    id: "nil-returns",
    num: "20",
    title: "Filing Nil Returns",
    section: "returns",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What is a Nil Return?",
          "When you need to file it",
          "No business activity",
          "Temporarily inactive businesses",
          "Closed businesses that are still registered",
        ],
      },
      {
        kind: "text",
        content:
          "Users may stop operating but fail to understand continuing filing obligations. Filing a Nil Return keeps your registration active and compliant even when there is no business activity.",
      },
    ],
  },
  {
    id: "understand-itc",
    num: "21",
    title: "Understand Input Tax Credit (ITC)",
    section: "returns",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What is ITC?",
          "Eligible purchases",
          "Ineligible purchases",
          "Invoice matching",
          "Supplier issues",
          "ITC mismatches",
          "Resolving discrepancies",
        ],
      },
      { kind: "heading", content: "User-focused explanation" },
      {
        kind: "note",
        content:
          "Input Tax Credit is the eligible GST credit you may use according to applicable rules to reduce your GST liability.",
      },
      {
        kind: "text",
        content:
          "The guide should clearly explain that supplier-side errors can create mismatches, instead of simply displaying an unexplained rejection.",
      },
    ],
  },
  {
    id: "pay-gst",
    num: "22",
    title: "Pay GST",
    section: "returns",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Understanding tax liability",
          "Available tax credit",
          "Cash payment",
          "Challans",
          "Payment confirmation",
          "Payment failures",
        ],
      },
      { kind: "heading", content: "Simple flow" },
      {
        kind: "terminal",
        content: `Check tax due
      ↓
Use eligible tax credit
      ↓
Pay remaining amount
      ↓
Confirm payment
      ↓
Receive confirmation`,
      },
    ],
  },

  // ── 05. Special Business Types ─────────────────────────────────────────
  {
    id: "exporting-goods-services",
    num: "23",
    title: "Exporting Services and Goods",
    section: "business-types",
    intro:
      "Exporters face different compliance requirements — this section is dedicated to them.",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Export under GST",
          "Zero-rated supplies",
          "Export invoices",
          "LUT",
          "Tax payment options",
          "Refunds",
          "Foreign currency transactions",
        ],
      },
    ],
  },

  // ── 06. Compliance ─────────────────────────────────────────────────────
  {
    id: "file-renew-lut",
    num: "24",
    title: "File or Renew an LUT",
    section: "compliance",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What is an LUT?",
          "Who may need it",
          "When to file it",
          "Annual renewal",
          "Exporting without payment of applicable tax",
        ],
      },
      { kind: "heading", content: "Step-by-step" },
      {
        kind: "terminal",
        content: `Services
→ User Services
→ Furnish Letter of Undertaking`,
      },
      {
        kind: "text",
        content:
          "The guide should prominently remind eligible exporters about renewal, because missed annual LUT compliance is a recurring knowledge problem.",
      },
    ],
  },
  {
    id: "e-invoicing",
    num: "25",
    title: "E-Invoicing",
    section: "compliance",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What is e-invoicing?",
          "Who needs to comply",
          "Applicable turnover requirements",
          "Invoice Reference Number",
          "Invoice generation",
          "Common errors",
        ],
      },
      { kind: "heading", content: "Include" },
      {
        kind: "terminal",
        title: "Do I need e-invoicing?",
        content: `Enter your approximate turnover
        ↓
Check applicable requirements`,
      },
      {
        kind: "text",
        content:
          "Lack of awareness around e-invoicing requirements is a major compliance risk — always check your applicability.",
      },
    ],
  },
  {
    id: "upload-offline-data",
    num: "26",
    title: "Upload Files and Offline Data",
    section: "compliance",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Excel files",
          "CSV files",
          "JSON",
          "Offline utilities",
          "Import validation",
          "Error reports",
        ],
      },
      { kind: "heading", content: "Recommended workflow" },
      {
        kind: "terminal",
        content: `Download Template
      ↓
Enter Data
      ↓
Validate Data
      ↓
Fix Errors
      ↓
Upload
      ↓
Review Imported Data`,
      },
      { kind: "text", content: "Include guidance on:" },
      {
        kind: "list",
        items: [
          "Formatting",
          "Dates",
          "Decimal values",
          "Empty fields",
          "Dropdown values",
          "Copy-pasting data",
        ],
      },
      {
        kind: "text",
        content:
          "This addresses the file validation and JSON issues documented in taxpayer research.",
      },
    ],
  },
  {
    id: "e-way-bills",
    num: "27",
    title: "E-Way Bills",
    section: "compliance",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What is an e-way bill?",
          "Creating an e-way bill",
          "Updating it",
          "Cancelling it",
          "Importing data",
          "Checking missing records",
        ],
      },
      { kind: "heading", content: "Important troubleshooting" },
      {
        kind: "terminal",
        content: `Expected records: 120
Imported records: 118

⚠ 2 records need attention

[ View Missing Records ]`,
      },
    ],
  },

  // ── 07. Notices & Problems ─────────────────────────────────────────────
  {
    id: "notices-and-orders",
    num: "28",
    title: "Notices and Orders",
    section: "notices",
    intro: "This is one of the most important sections of the guide.",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "What is a GST notice?",
          "Where to find notices",
          "Deadlines",
          "Responding",
          "Downloading orders",
          "Tracking responses",
          "Appeals",
        ],
      },
      { kind: "heading", content: "Navigation" },
      {
        kind: "terminal",
        content: `Dashboard
→ Notices & Actions
→ Select Notice
→ Read Details
→ Check Deadline
→ Respond`,
      },
      {
        kind: "text",
        content:
          "You should never be forced to navigate through obscure menu paths to find legally important notices — a major usability problem identified in taxpayer research.",
      },
    ],
  },
  {
    id: "missed-deadline",
    num: "29",
    title: "What Happens if You Miss a Deadline?",
    section: "notices",
    blocks: [
      { kind: "heading", content: "Topics" },
      {
        kind: "list",
        items: [
          "Late filing",
          "Late fees",
          "Interest",
          "Return blocking",
          "Notices",
          "Recovery actions",
        ],
      },
      {
        kind: "text",
        content:
          "The goal is not to scare users. It should explain, in plain language:",
      },
      {
        kind: "terminal",
        content: `What happened?
Why did it happen?
What can I do now?
What is the deadline?
Who can help?`,
      },
    ],
  },

  // ── 08. Rules & Regulations ────────────────────────────────────────────
  {
    id: "rules-regulations",
    num: "30",
    title: "Rules and Regulations",
    section: "rules",
    intro: "The final large documentation category: GST Rules & Requirements.",
    blocks: [
      { kind: "heading", content: "A. Registration Rules" },
      {
        kind: "list",
        items: [
          "When registration may be required",
          "Voluntary registration",
          "Keeping information accurate",
          "Updating changes",
        ],
      },
      { kind: "heading", content: "B. Invoice Rules" },
      {
        kind: "list",
        items: [
          "Issuing proper invoices",
          "Required information",
          "Correct tax details",
          "Classification information",
        ],
      },
      { kind: "heading", content: "C. Return Filing Rules" },
      {
        kind: "list",
        items: [
          "Filing applicable returns",
          "Filing on time",
          "Maintaining accurate records",
          "Filing Nil Returns where required",
        ],
      },
      { kind: "heading", content: "D. Payment Rules" },
      {
        kind: "list",
        items: [
          "Paying applicable tax",
          "Using eligible credits",
          "Paying outstanding liabilities",
        ],
      },
      { kind: "heading", content: "E. Input Tax Credit Rules" },
      {
        kind: "list",
        items: [
          "Eligibility requirements",
          "Invoice accuracy",
          "Supplier-related information",
          "Reconciliation",
        ],
      },
      { kind: "heading", content: "F. Export Rules" },
      {
        kind: "list",
        items: [
          "Export documentation",
          "LUT requirements",
          "Export invoices",
          "Applicable currency and documentation requirements",
        ],
      },
      { kind: "heading", content: "G. E-Invoice Rules" },
      {
        kind: "list",
        items: [
          "Checking applicability",
          "Generating compliant invoices",
          "Maintaining records",
        ],
      },
      { kind: "heading", content: "H. Record-Keeping Rules" },
      { kind: "text", content: "Keep relevant:" },
      {
        kind: "list",
        items: [
          "Invoices",
          "Purchase records",
          "Sales records",
          "Tax payment records",
          "Return acknowledgements",
          "Notices",
          "Orders",
          "Supporting documents",
        ],
      },
      { kind: "heading", content: "I. Changes in Your Business" },
      {
        kind: "text",
        content:
          "Update relevant GST information when applicable changes occur, such as:",
      },
      {
        kind: "list",
        items: [
          "Business address",
          "Business structure",
          "Partners/directors",
          "Contact information",
          "Bank details",
        ],
      },
      { kind: "heading", content: "J. Your Compliance Calendar" },
      {
        kind: "terminal",
        title: "THIS MONTH",
        content: `□ Review invoices
□ Check ITC
□ File applicable return
□ Pay applicable tax

THIS YEAR

□ Review registration information
□ Renew LUT if applicable
□ Check annual compliance requirements`,
      },
    ],
  },
];

/** Quick-reference pattern every topic follows (design recommendation). */
export const TOPIC_PATTERN: string[] = [
  "WHAT IS THIS?",
  "WHO IS IT FOR?",
  "WHAT YOU NEED",
  "STEP-BY-STEP PROCESS",
  "COMMON MISTAKES",
  "WHAT HAPPENS NEXT?",
  "NEED HELP?",
];

export const GST_GUIDE_TAGLINE =
  "Tell me what I need to know, what I need to do, and exactly how to do it.";