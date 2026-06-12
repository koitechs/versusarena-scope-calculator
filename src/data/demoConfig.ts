import type { CalculatorConfig } from '../calculator/types'

export const demoConfig: CalculatorConfig = {
  "meta": {
    "projectName": "VersusArena Competitive CS2 Platform",
    "clientName": "VersusArena",
    "calculatorTitle": "Multi-format MVP Scope Calculator",
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
      "summary": "Free first stage: confirm fixed CS2 formats (1v1, 2v2, 3v3 on wingman maps and 5v5), money rules, match states and integration assumptions before paid implementation.",
      "killerFeature": "A complimentary technical blueprint for a budget-fit multi-format CS2 MVP.",
      "blocks": [
        {
          "id": "m0-scope-state-machine-acceptance",
          "title": "Scope, state machine and acceptance criteria",
          "description": "Lock the challenge lifecycle for fixed CS2 formats (1v1, 2v2, 3v3 on wingman maps and 5v5), wallet rules, dispute states, MatchZy assumptions and acceptance scenarios.",
          "category": "discovery",
          "priority": "required",
          "estimate": {
            "min": 8,
            "max": 12
          }
        },
        {
          "id": "m0-multi-game-architecture-blueprint",
          "title": "Multi-game architecture blueprint",
          "description": "Define shared challenge engine, game-adapter boundaries and data contracts so CS2 is the first adapter, not hardcoded platform logic.",
          "category": "discovery",
          "priority": "required",
          "estimate": {
            "min": 4,
            "max": 6
          }
        },
        {
          "id": "m0-delivery-setup",
          "title": "Delivery setup",
          "description": "Repository setup, environments, Docker conventions, basic CI/build checks and delivery handoff structure.",
          "category": "qa",
          "priority": "required",
          "estimate": {
            "min": 4,
            "max": 6
          }
        },
        {
          "id": "m0-deeper-vendor-discovery",
          "title": "Extended provider discovery",
          "description": "Extra research and test spikes for wallet provider, game server provider, FACEIT/Premier data availability and Discord partner-server limitations.",
          "category": "discovery",
          "priority": "recommended",
          "estimate": {
            "min": 5,
            "max": 8
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
      "summary": "Players can sign in, connect their gaming identity and receive a usable skill/trust profile for joining fixed-format CS2 challenges.",
      "killerFeature": "Steam-based player identity with FACEIT/Premier skill bands.",
      "blocks": [
        {
          "id": "m1-steam-auth",
          "title": "Steam login and session flow",
          "description": "Steam-based authentication, session handling, account creation and protected user area.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 10,
            "max": 14
          }
        },
        {
          "id": "m1-rating-lookup",
          "title": "FACEIT lookup and Premier fallback",
          "description": "Find FACEIT by Steam ID where possible, support manual fallback, store one active skill band and reliability flag.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 12,
            "max": 18
          }
        },
        {
          "id": "m1-player-profile-basic-stats",
          "title": "Player profile and basic platform stats",
          "description": "Dashboard profile with Steam/FACEIT identifiers, skill band, match count, win rate and dispute-rate placeholders.",
          "category": "product",
          "priority": "required",
          "estimate": {
            "min": 8,
            "max": 12
          }
        },
        {
          "id": "m1-game-adapter-foundation",
          "title": "Game adapter foundation",
          "description": "Add core data model boundaries for game type, player game profile, rating source, match evidence type and result parser adapter.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 14,
            "max": 22
          }
        },
        {
          "id": "m1-trust-score-v1",
          "title": "Trust score v1",
          "description": "Verified, limited-data and restricted states based on rating availability, dispute losses and admin restrictions.",
          "category": "backend",
          "priority": "recommended",
          "estimate": {
            "min": 10,
            "max": 16
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
            "min": 12,
            "max": 22
          },
          "consequence": "Admin review remains possible, but collusion and multi-account detection is mostly manual."
        }
      ]
    },
    {
      "id": "m2",
      "title": "Milestone 2 — Multi-format challenge creation, open lobbies and joining",
      "summary": "Users can create private or open challenges in fixed CS2 formats: 1v1, 2v2, 3v3 on wingman maps and 5v5.",
      "killerFeature": "Operational challenge flow for fixed formats: 1v1, 2v2, 3v3 wingman and 5v5.",
      "blocks": [
        {
          "id": "m2-private-open-challenge",
          "title": "Multi-format private and open challenges",
          "description": "Create private invite and open challenges for fixed formats: 1v1, 2v2, 3v3 on wingman maps and 5v5. Includes stake, skill range, TTL and visibility rules.",
          "category": "product",
          "priority": "required",
          "estimate": {
            "min": 28,
            "max": 38
          }
        },
        {
          "id": "m2-join-funding-lock-ready",
          "title": "Join, funding lock and ready flow by format",
          "description": "Join flow, eligibility checks, funding lock and ready state for 1v1, 2v2, 3v3 wingman and 5v5.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 24,
            "max": 34
          }
        },
        {
          "id": "m2-team-balancing",
          "title": "Team formation and balancing by format",
          "description": "Team split/balance for 1v1, 2v2, 3v3 wingman and 5v5, with deterministic logic visible for admin/dispute review.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 16,
            "max": 24
          }
        },
        {
          "id": "m2-format-rules-engine",
          "title": "Format rules engine",
          "description": "Centralize supported team size, players required, allowed maps, ready thresholds, funding pool and no-show rules per fixed MVP format.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 16,
            "max": 24
          }
        },
        {
          "id": "m2-map-veto",
          "title": "Map selection, veto and wingman map rules",
          "description": "Basic map selection/veto rules per format, including 3v3 restriction to wingman maps and standard map flow for 5v5.",
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
            "min": 6,
            "max": 10
          },
          "consequence": "Core cancellation works, but the open-lobby UX is less polished for first-community acquisition."
        }
      ],
      "risks": [
        "The main risk is validating MatchZy/server behavior consistently across 1v1, 2v2, 3v3 wingman and 5v5; unsupported formats stay out of MVP."
      ]
    },
    {
      "id": "m3",
      "title": "Milestone 3 — Wallet, funding and settlement",
      "summary": "Users can deposit to balance, lock stakes into 1v1, 2v2, 3v3 wingman and 5v5 challenges and receive automatic payout/refund based on result/dispute state.",
      "killerFeature": "Reliable balance, hold, refund and payout logic for money matches.",
      "blocks": [
        {
          "id": "m3-wallet-deposit-balance",
          "title": "Wallet balance and deposit flow",
          "description": "MVP stablecoin/payment-provider deposit flow, balance display and callback handling without complex withdrawal/KYC automation.",
          "category": "wallet",
          "priority": "required",
          "estimate": {
            "min": 14,
            "max": 20
          }
        },
        {
          "id": "m3-hold-refund-payout",
          "title": "Hold, refund and payout ledger rules by format",
          "description": "MVP ledger rules for hold, refund, void and payout across 1v1, 2v2, 3v3 wingman and 5v5 pools, with admin fallback for exceptions.",
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
          "description": "Compact transaction history for deposits, holds, refunds, payouts and platform commission.",
          "category": "wallet",
          "priority": "required",
          "estimate": {
            "min": 8,
            "max": 12
          }
        },
        {
          "id": "m3-withdrawals",
          "title": "Withdrawal flow",
          "description": "User withdrawal request, provider payout integration, admin hold/release and security events.",
          "category": "wallet",
          "priority": "recommended",
          "estimate": {
            "min": 14,
            "max": 22
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
            "min": 12,
            "max": 20
          },
          "consequence": "Financial compliance operations stay basic and may require manual operational controls."
        }
      ]
    },
    {
      "id": "m4",
      "title": "Milestone 4 — Discord acquisition and match notifications",
      "summary": "Discord becomes a first-class MVP acquisition and realtime notification channel for open 1v1, 2v2, 3v3 wingman and 5v5 challenges.",
      "killerFeature": "Open challenges can be discovered and joined from Discord.",
      "blocks": [
        {
          "id": "m4-discord-open-challenge-publishing",
          "title": "Discord open challenge publishing",
          "description": "Post open 1v1, 2v2, 3v3 wingman and 5v5 challenges into Discord with fill status and deep links to join/fund in the web app. Keeps status sync lightweight for MVP.",
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
          "description": "Create a supported-format challenge from a Discord slash command and continue detailed setup/funding in the web app.",
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
      "summary": "The platform can prepare CS2 matches for 1v1, 2v2, 3v3 wingman and 5v5, expose server info after lock, capture result evidence and fall back to admin review.",
      "killerFeature": "Pragmatic CS2/MatchZy integration for money-match evidence.",
      "blocks": [
        {
          "id": "m5-matchzy-setup",
          "title": "MatchZy setup for supported formats",
          "description": "MVP CS2 server and MatchZy setup for 1v1, 2v2, 3v3 wingman and 5v5, including wingman-map flow where applicable.",
          "category": "cs2",
          "priority": "required",
          "estimate": {
            "min": 20,
            "max": 30
          }
        },
        {
          "id": "m5-server-lifecycle-rcon",
          "title": "Server lifecycle and RCON orchestration by format",
          "description": "Prepare server config, expose connection details, start match and reconcile server state for 1v1, 2v2, 3v3 wingman and 5v5.",
          "category": "cs2",
          "priority": "required",
          "estimate": {
            "min": 18,
            "max": 28
          }
        },
        {
          "id": "m5-result-logs-demo-fallback",
          "title": "Result, logs, demo and fallback evidence across formats",
          "description": "Store score, match logs/demo links and fallback evidence consistently for 1v1, 2v2, 3v3 wingman and 5v5.",
          "category": "cs2",
          "priority": "required",
          "estimate": {
            "min": 14,
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
            "min": 12,
            "max": 20
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
            "min": 10,
            "max": 18
          },
          "consequence": "Disconnects are handled by simpler MatchZy result/admin review rules."
        }
      ]
    },
    {
      "id": "m6",
      "title": "Milestone 6 — Result, dispute and admin review",
      "summary": "Results auto-finalize when clean, disputes hold payout, and admins can resolve exceptional cases from platform-side evidence.",
      "killerFeature": "Structured admin dispute center for fixed-format CS2 money matches.",
      "blocks": [
        {
          "id": "m6-dispute-window",
          "title": "Result finalization and dispute window",
          "description": "30-minute dispute window, payout hold on dispute, countdown and automatic payout when no dispute is opened.",
          "category": "admin",
          "priority": "required",
          "estimate": {
            "min": 10,
            "max": 14
          }
        },
        {
          "id": "m6-admin-challenge-actions",
          "title": "Admin challenge and dispute actions",
          "description": "Admin can inspect format-specific player lists, ratings, funding, server evidence, result and dispute state, then cancel/refund/resolve within MVP rules.",
          "category": "admin",
          "priority": "required",
          "estimate": {
            "min": 18,
            "max": 28
          }
        },
        {
          "id": "m6-audit-timeline",
          "title": "Challenge timeline and audit log",
          "description": "Timeline of state transitions and append-only admin action log with reason fields.",
          "category": "admin",
          "priority": "required",
          "estimate": {
            "min": 5,
            "max": 8
          }
        },
        {
          "id": "m6-dispute-attachments",
          "title": "Player dispute attachments",
          "description": "Upload screenshots or clips as secondary evidence while server logs/demo remain canonical.",
          "category": "admin",
          "priority": "recommended",
          "estimate": {
            "min": 8,
            "max": 14
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
            "min": 10,
            "max": 18
          },
          "consequence": "Admin decision is final inside the MVP platform process."
        }
      ]
    },
    {
      "id": "m7",
      "title": "Milestone 7 — QA, staging, production deployment and handoff",
      "summary": "The MVP is tested end-to-end, deployed to staging/production and handed off with operational notes.",
      "killerFeature": "A deployable multi-format CS2 MVP ready for controlled beta launch.",
      "blocks": [
        {
          "id": "m7-qa-deployment-handoff",
          "title": "QA, deployment and handoff for supported formats",
          "description": "Smoke/regression QA for 1v1, 2v2, 3v3 wingman and 5v5, staging/prod deploy, env documentation and handoff checklist.",
          "category": "qa",
          "priority": "required",
          "estimate": {
            "min": 22,
            "max": 32
          }
        },
        {
          "id": "m7-load-and-abuse-testing",
          "title": "Load and abuse testing",
          "description": "Focused load checks for lobby joins, payment callbacks, Discord events and match settlement edge cases.",
          "category": "qa",
          "priority": "recommended",
          "estimate": {
            "min": 8,
            "max": 14
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
            "min": 8,
            "max": 12
          },
          "consequence": "Handoff is lighter and early operations rely more on direct developer support."
        }
      ]
    }
  ],
  "assumptions": [
    "Milestone 0 is complimentary/free and does not count toward the paid budget.",
    "Supported MVP formats are fixed: 1v1, 2v2, 3v3 on wingman maps and 5v5. 4v4 and arbitrary/custom player counts are excluded.",
    "The architecture should support future games through a shared challenge engine and separate game adapters; CS2 is the first implemented adapter.",
    "All estimates are calibrated for MVP delivery: pragmatic integrations, admin/manual fallback for edge cases and no overbuilt automation.",
    "Hourly rate is $27/h. $15,000 budget equals roughly 555 billable hours before platform fees.",
    "Open challenges and basic Discord acquisition are included in MVP; slash-command creation and partner-server workflows remain removable.",
    "MatchZy is treated as the primary CS2 match-management tool; logs/demo/RCON/admin review are the fallback path if MatchZy does not cover every case.",
    "Final estimate should shrink after confirming payment provider, CS2 server provider and MatchZy coverage per supported format."
  ],
  "nextQuestions": [
    "Should 1v1 and 2v2 use wingman maps only, or can they also use selected standard maps?",
    "Should 3v3 be strictly limited to wingman maps for MVP?",
    "Which future game should the architecture anticipate first after CS2: Dota, Valorant or another title?",
    "Which stablecoin/payment provider is preferred for deposits, locked funds, refunds and payouts?",
    "Will CS2 servers be rented/pre-provisioned by the platform, provided by the client, or handled through a game-server provider?",
    "Which Discord server is the launch source of truth and who owns bot permissions?"
  ]
}
