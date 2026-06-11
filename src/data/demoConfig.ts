import type { CalculatorConfig } from '../calculator/types'

export const demoConfig: CalculatorConfig = {
  "meta": {
    "projectName": "VersusArena Competitive CS2 Platform",
    "clientName": "VersusArena",
    "calculatorTitle": "5v5 MVP Scope Calculator",
    "language": "en",
    "preparedBy": "Koitechs",
    "repoName": "versusarena-scope-calculator"
  },
  "commercial": {
    "hourlyRate": 27,
    "currency": "USD",
    "monthlyTeamCapacityHours": 320,
    "teamLabel": "Backend-heavy full-stack developer + solution architect support",
    "targetBudget": 15000,
    "targetHours": 555
  },
  "theme": {
    "accent": "#22c55e",
    "accentSoft": "#ecfdf5",
    "logoText": "VA"
  },
  "labels": {
    "fullScope": "Full requested scope",
    "leanScope": "Budget-fit MVP",
    "recommendedScope": "Recommended MVP",
    "exportPdf": "Export PDF",
    "copySummary": "Copy summary"
  },
  "categories": [
    {
      "id": "discovery",
      "label": "Discovery"
    },
    {
      "id": "product",
      "label": "Product flows"
    },
    {
      "id": "backend",
      "label": "Backend logic"
    },
    {
      "id": "wallet",
      "label": "Wallet & funding"
    },
    {
      "id": "cs2",
      "label": "CS2 / MatchZy"
    },
    {
      "id": "discord",
      "label": "Discord bot"
    },
    {
      "id": "admin",
      "label": "Admin & disputes"
    },
    {
      "id": "qa",
      "label": "QA & deployment"
    }
  ],
  "priorities": [
    {
      "id": "required",
      "label": "Budget-fit MVP",
      "locked": true
    },
    {
      "id": "recommended",
      "label": "Recommended"
    },
    {
      "id": "optional",
      "label": "Post-MVP"
    }
  ],
  "milestones": [
    {
      "id": "m0",
      "title": "Milestone 0 — Complimentary scope lock and technical planning",
      "summary": "Free first stage: confirm the 5v5 MVP scope, money rules, match states and integration assumptions before paid implementation.",
      "killerFeature": "A complimentary technical blueprint for a budget-fit 5v5 MVP.",
      "blocks": [
        {
          "id": "m0-scope-state-machine-acceptance",
          "title": "Scope, state machine and acceptance criteria",
          "description": "Lock the 5v5-only challenge lifecycle, wallet rules, dispute states, MatchZy assumptions and acceptance scenarios.",
          "category": "discovery",
          "priority": "required",
          "estimate": {
            "min": 10,
            "max": 14
          }
        },
        {
          "id": "m0-delivery-setup",
          "title": "Delivery setup",
          "description": "Repository setup, environments, Docker conventions, basic CI/build checks and delivery handoff structure.",
          "category": "qa",
          "priority": "required",
          "estimate": {
            "min": 5,
            "max": 7
          }
        },
        {
          "id": "m0-deeper-vendor-discovery",
          "title": "Extended provider discovery",
          "description": "Extra research and test spikes for wallet provider, game server provider, FACEIT/Premier data availability and Discord partner-server limitations.",
          "category": "discovery",
          "priority": "recommended",
          "estimate": {
            "min": 7,
            "max": 11
          },
          "consequence": "Estimate confidence for provider-specific edge cases is lower, and some provider decisions may move into implementation."
        }
      ],
      "risks": [
        "Final estimate can shrink or grow after wallet provider, game server host and MatchZy event coverage are confirmed."
      ],
      "billable": false
    },
    {
      "id": "m1",
      "title": "Milestone 1 — Auth, player profile and skill data",
      "summary": "Players can sign in, connect their gaming identity and receive a usable skill/trust profile for joining 5v5 challenges.",
      "killerFeature": "Steam-based player identity with FACEIT/Premier skill bands.",
      "blocks": [
        {
          "id": "m1-steam-auth",
          "title": "Steam login and session flow",
          "description": "Steam-based authentication, session handling, account creation and protected user area.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 14,
            "max": 18
          }
        },
        {
          "id": "m1-rating-lookup",
          "title": "FACEIT lookup and Premier fallback",
          "description": "Find FACEIT by Steam ID where possible, support manual fallback, store one active skill band and reliability flag.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 16,
            "max": 22
          }
        },
        {
          "id": "m1-player-profile-basic-stats",
          "title": "Player profile and basic platform stats",
          "description": "Dashboard profile with Steam/FACEIT identifiers, skill band, match count, win rate and dispute-rate placeholders.",
          "category": "product",
          "priority": "required",
          "estimate": {
            "min": 12,
            "max": 16
          }
        },
        {
          "id": "m1-trust-score-v1",
          "title": "Trust score v1",
          "description": "Verified, limited-data and restricted states based on rating availability, dispute losses and admin restrictions.",
          "category": "backend",
          "priority": "recommended",
          "estimate": {
            "min": 14,
            "max": 22
          },
          "consequence": "MVP can still block or allow users manually, but automated trust-based filtering will be simpler."
        },
        {
          "id": "m1-advanced-anti-abuse",
          "title": "Advanced anti-abuse signals",
          "description": "IP/device overlap warnings, suspected alt accounts and richer trust-score components.",
          "category": "admin",
          "priority": "optional",
          "estimate": {
            "min": 20,
            "max": 35
          },
          "consequence": "Admin review remains possible, but collusion and multi-account detection is mostly manual."
        }
      ]
    },
    {
      "id": "m2",
      "title": "Milestone 2 — 5v5 challenge creation, open lobbies and joining",
      "summary": "Users can create private or open 5v5 challenges, join eligible lobbies and lock a full 10-player match.",
      "killerFeature": "Operational private and open 5v5 challenge flow.",
      "blocks": [
        {
          "id": "m2-private-open-challenge",
          "title": "Private and open challenge creation",
          "description": "Create 5v5 private invite challenges and public open lobbies with stake, skill range, TTL and basic visibility rules.",
          "category": "product",
          "priority": "required",
          "estimate": {
            "min": 28,
            "max": 36
          }
        },
        {
          "id": "m2-join-funding-lock-ready",
          "title": "Join, funding lock and ready check states",
          "description": "Solo join for open lobbies, invite-link join for private challenges, 10/10 funded lock and in-app ready check state transitions.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 22,
            "max": 30
          }
        },
        {
          "id": "m2-team-balancing",
          "title": "5v5 team balancing",
          "description": "Automatic team split by skill bands with deterministic, explainable team formation for admin/dispute review.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 14,
            "max": 18
          }
        },
        {
          "id": "m2-map-veto",
          "title": "Map veto and side choice",
          "description": "Elimination-style map veto, app-side coin flip and side selection before server start.",
          "category": "product",
          "priority": "recommended",
          "estimate": {
            "min": 12,
            "max": 18
          },
          "consequence": "MVP can use fixed or random map selection, which reduces realtime state complexity."
        },
        {
          "id": "m2-repost-ttl-polish",
          "title": "Lobby TTL, cancel and repost polish",
          "description": "Visible countdowns, automatic cancellation, clear repost flow and no-playerbase beta messaging.",
          "category": "product",
          "priority": "recommended",
          "estimate": {
            "min": 8,
            "max": 12
          },
          "consequence": "Core cancellation works, but the open-lobby UX is less polished for first-community acquisition."
        }
      ],
      "risks": [
        "Only 5v5 is included. 2v2 downgrade, 3v3 and other formats are explicitly excluded from this MVP."
      ]
    },
    {
      "id": "m3",
      "title": "Milestone 3 — Wallet, funding and settlement",
      "summary": "Players can maintain a balance, fund a challenge, lock funds, receive refunds and get payouts after result finalization.",
      "killerFeature": "Reliable balance, hold, refund and payout logic for money matches.",
      "blocks": [
        {
          "id": "m3-wallet-deposit-balance",
          "title": "Wallet balance and deposit flow",
          "description": "Stablecoin/payment-provider deposit flow, balance display and basic provider callback handling.",
          "category": "wallet",
          "priority": "required",
          "estimate": {
            "min": 18,
            "max": 24
          }
        },
        {
          "id": "m3-hold-refund-payout",
          "title": "Locked funds, refund and payout rules",
          "description": "Hold funds on join, release on pre-lock exit/cancel, payout after dispute window and refund/void settlement paths.",
          "category": "wallet",
          "priority": "required",
          "estimate": {
            "min": 26,
            "max": 36
          }
        },
        {
          "id": "m3-transaction-history-rake",
          "title": "Transaction history and 10% commission",
          "description": "Transaction ledger for deposits, holds, refunds, payouts and platform rake from winner-side settlement.",
          "category": "wallet",
          "priority": "required",
          "estimate": {
            "min": 12,
            "max": 16
          }
        },
        {
          "id": "m3-withdrawals",
          "title": "Withdrawal flow",
          "description": "User withdrawal request, provider payout integration, admin hold/release and security events.",
          "category": "wallet",
          "priority": "recommended",
          "estimate": {
            "min": 18,
            "max": 28
          },
          "consequence": "MVP can validate funded gameplay, but cash-out operations may need to be handled manually or delayed."
        },
        {
          "id": "m3-kyc-security-events",
          "title": "KYC and financial security events",
          "description": "KYC status tracking, security emails, withdrawal holds and suspicious-activity flags.",
          "category": "wallet",
          "priority": "optional",
          "estimate": {
            "min": 19,
            "max": 33
          },
          "consequence": "Financial compliance operations stay basic and may require manual operational controls."
        }
      ]
    },
    {
      "id": "m4",
      "title": "Milestone 4 — Discord acquisition and match notifications",
      "summary": "Discord becomes a first-class MVP acquisition and realtime notification channel for open 5v5 challenges.",
      "killerFeature": "Open challenges can be discovered and joined from Discord.",
      "blocks": [
        {
          "id": "m4-discord-open-challenge-publishing",
          "title": "Discord open challenge publishing",
          "description": "Post open 5v5 challenges into Discord with fill status and deep links to join/fund in the web app. Keeps status sync lightweight for MVP.",
          "category": "discord",
          "priority": "required",
          "estimate": {
            "min": 9,
            "max": 13
          }
        },
        {
          "id": "m4-discord-dm-notifications",
          "title": "Discord DM notifications",
          "description": "Basic DMs for match ready, server info, ready-check countdown, result captured and dispute opened.",
          "category": "discord",
          "priority": "required",
          "estimate": {
            "min": 7,
            "max": 11
          }
        },
        {
          "id": "m4-slash-command-create",
          "title": "Slash command challenge creation",
          "description": "Create a 5v5 challenge from a Discord slash command and continue detailed setup/funding in the web app.",
          "category": "discord",
          "priority": "recommended",
          "estimate": {
            "min": 8,
            "max": 14
          },
          "consequence": "Discord still drives traffic, but challenge creation starts in the web app."
        },
        {
          "id": "m4-partner-community-servers",
          "title": "Partner community server publishing",
          "description": "Light partner-server publishing with manual setup per server and basic tracking.",
          "category": "discord",
          "priority": "optional",
          "estimate": {
            "min": 10,
            "max": 16
          },
          "consequence": "Launch can start on the primary Discord server, but partner-server growth loops are manual."
        }
      ]
    },
    {
      "id": "m5",
      "title": "Milestone 5 — CS2 server and MatchZy match flow",
      "summary": "The platform can prepare a 5v5 CS2 match, expose server info after lock, capture result evidence and fall back to admin review.",
      "killerFeature": "Pragmatic CS2/MatchZy integration for money-match evidence.",
      "blocks": [
        {
          "id": "m5-matchzy-setup",
          "title": "MatchZy server setup",
          "description": "CS2 server setup assumptions, MatchZy configuration, 5v5 match config and technical ready flow.",
          "category": "cs2",
          "priority": "required",
          "estimate": {
            "min": 18,
            "max": 24
          }
        },
        {
          "id": "m5-server-lifecycle-rcon",
          "title": "Server lifecycle and RCON/basic control",
          "description": "Create or assign server, reveal connection info after lock, basic RCON-style control and match state sync.",
          "category": "cs2",
          "priority": "required",
          "estimate": {
            "min": 18,
            "max": 26
          }
        },
        {
          "id": "m5-result-logs-demo-fallback",
          "title": "Result capture, logs, demo and fallback",
          "description": "Capture final result from MatchZy/logs where available, store logs/demo references and route unclear matches to admin review.",
          "category": "cs2",
          "priority": "required",
          "estimate": {
            "min": 16,
            "max": 22
          }
        },
        {
          "id": "m5-crash-restore-round-backup",
          "title": "Crash restore and round backup flow",
          "description": "MatchZy round backup restore, server crash handling and void fallback when restore is impossible.",
          "category": "cs2",
          "priority": "recommended",
          "estimate": {
            "min": 16,
            "max": 25
          },
          "consequence": "MVP can void or admin-review failed matches, but automated recovery is less mature."
        },
        {
          "id": "m5-advanced-disconnect-rules",
          "title": "Advanced disconnect and pause rules",
          "description": "Team reconnect budgets, captain forfeit decision, MatchZy pause coordination and abuse tracking.",
          "category": "cs2",
          "priority": "optional",
          "estimate": {
            "min": 14,
            "max": 24
          },
          "consequence": "Disconnects are handled by simpler MatchZy result/admin review rules."
        }
      ]
    },
    {
      "id": "m6",
      "title": "Milestone 6 — Result, dispute and admin review",
      "summary": "Results auto-finalize when clean, disputes hold payout, and admins can resolve exceptional cases from platform-side evidence.",
      "killerFeature": "Structured admin dispute center for 5v5 money matches.",
      "blocks": [
        {
          "id": "m6-dispute-window",
          "title": "Result finalization and dispute window",
          "description": "30-minute dispute window, payout hold on dispute, countdown and automatic payout when no dispute is opened.",
          "category": "admin",
          "priority": "required",
          "estimate": {
            "min": 14,
            "max": 18
          }
        },
        {
          "id": "m6-admin-challenge-actions",
          "title": "Admin challenge and dispute actions",
          "description": "Admin views players, ratings, balances, funding, match status, evidence and can confirm result, change winner, refund, void or cancel.",
          "category": "admin",
          "priority": "required",
          "estimate": {
            "min": 22,
            "max": 30
          }
        },
        {
          "id": "m6-audit-timeline",
          "title": "Challenge timeline and audit log",
          "description": "Timeline of state transitions and append-only admin action log with reason fields.",
          "category": "admin",
          "priority": "required",
          "estimate": {
            "min": 7,
            "max": 10
          }
        },
        {
          "id": "m6-dispute-attachments",
          "title": "Player dispute attachments",
          "description": "Upload screenshots or clips as secondary evidence while server logs/demo remain canonical.",
          "category": "admin",
          "priority": "recommended",
          "estimate": {
            "min": 10,
            "max": 18
          },
          "consequence": "Disputes rely on structured comments plus server-side evidence only."
        },
        {
          "id": "m6-appeals-and-ban-review",
          "title": "Appeals and ban review workflow",
          "description": "Internal appeal process for bans or high-value cases with separate admin review state.",
          "category": "admin",
          "priority": "optional",
          "estimate": {
            "min": 14,
            "max": 24
          },
          "consequence": "Admin decision is final inside the MVP platform process."
        }
      ]
    },
    {
      "id": "m7",
      "title": "Milestone 7 — QA, staging, production deployment and handoff",
      "summary": "The MVP is tested end-to-end, deployed to staging/production and handed off with operational notes.",
      "killerFeature": "A deployable 5v5 MVP ready for controlled beta launch.",
      "blocks": [
        {
          "id": "m7-qa-deployment-handoff",
          "title": "QA, deployment and handoff",
          "description": "Critical path QA, smoke/regression checks, staging/production deployment, Docker handoff and release notes.",
          "category": "qa",
          "priority": "required",
          "estimate": {
            "min": 22,
            "max": 30
          }
        },
        {
          "id": "m7-load-and-abuse-testing",
          "title": "Load and abuse testing",
          "description": "Focused load checks for lobby joins, payment callbacks, Discord events and match settlement edge cases.",
          "category": "qa",
          "priority": "recommended",
          "estimate": {
            "min": 12,
            "max": 20
          },
          "consequence": "Controlled beta is still possible, but high-concurrency confidence is lower."
        },
        {
          "id": "m7-ops-playbooks",
          "title": "Operations playbooks",
          "description": "Admin runbooks for disputes, server failure, refund cases, Discord incident handling and provider outages.",
          "category": "qa",
          "priority": "recommended",
          "estimate": {
            "min": 11,
            "max": 18
          },
          "consequence": "Handoff is lighter and early operations rely more on direct developer support."
        }
      ]
    }
  ],
  "assumptions": [
    "Milestone 0 is a complimentary first stage and is included in hours/calendar but excluded from billable budget.",
    "Budget-fit MVP is 5v5 only; 2v2 downgrade, 3v3 and other formats are excluded.",
    "At $27/h, the $15k cap gives about 555 billable hours; the required MVP stays below that cap and leaves room for selected recommended blocks.",
    "Open challenges and basic Discord acquisition are included in MVP; slash-command creation and partner-server workflows remain removable.",
    "MatchZy is treated as the primary CS2 match-management layer; if it does not expose enough data, the MVP falls back to logs/demo plus admin review.",
    "Final estimate should be tightened after confirming payment provider, server hosting model and exact MatchZy event coverage."
  ],
  "nextQuestions": [
    "Which stablecoin/payment provider should be used for deposit, balance and settlement?",
    "Will CS2 servers be rented on demand, pre-provisioned, or managed by the client?",
    "Which Discord server is the launch source of truth and who owns bot permissions?",
    "Should MVP include withdrawals or only deposit/fund/play/payout ledger until beta validation?"
  ]
}
