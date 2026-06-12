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
          "description": "Define lightweight shared challenge lifecycle, format config and future game-adapter boundaries so CS2 is the first adapter, not hardcoded platform logic.",
          "category": "discovery",
          "priority": "required",
          "estimate": {
            "min": 3,
            "max": 5
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
          "description": "FACEIT lookup by Steam ID where possible, manual FACEIT linking fallback, Premier data only if reliable source is available, and Limited Data state if external rating is unavailable.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 14,
            "max": 20
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
          "title": "Light game adapter foundation",
          "description": "Add lightweight data boundaries for game type, player game profile, rating source and match evidence type. CS2 is implemented first; future games can plug into the same contracts later.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 8,
            "max": 14
          }
        },
        {
          "id": "m1-trust-score-v1",
          "title": "Basic trust and safety states",
          "description": "MVP trust states: Verified, Limited Data, Restricted, stake caps for limited/restricted users, dispute/no-show flags and admin restriction ability.",
          "category": "backend",
          "priority": "required",
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
          "description": "Create private invite and open challenges using one shared challenge flow with fixed format config for 1v1, 2v2, 3v3 on wingman maps and 5v5.",
          "category": "product",
          "priority": "required",
          "estimate": {
            "min": 24,
            "max": 32
          }
        },
        {
          "id": "m2-join-funding-lock-ready",
          "title": "Join, funding lock and ready flow by format",
          "description": "Reuse the same join, eligibility, funding lock and ready flow across formats, with player count and thresholds driven by format config.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 20,
            "max": 28
          }
        },
        {
          "id": "m2-team-balancing",
          "title": "Team formation and balancing by format",
          "description": "Team split/balance using the same algorithm with format-specific team size: 1v1, 2v2, 3v3 wingman and 5v5.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 12,
            "max": 18
          }
        },
        {
          "id": "m2-format-rules-engine",
          "title": "Format rules engine",
          "description": "Centralize supported team size, players required, map pool, ready thresholds, funding pool and no-show rules as configuration per fixed MVP format.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 8,
            "max": 14
          }
        },
        {
          "id": "m2-map-veto",
          "title": "MVP map selection and basic veto",
          "description": "Fixed map, random map and basic captain/team veto where applicable; selected map is saved in challenge state, sent to server config and surfaced in Discord/system events.",
          "category": "product",
          "priority": "required",
          "estimate": {
            "min": 10,
            "max": 14
          },
          "consequence": "MVP can use fixed or random map selection, which reduces realtime state complexity."
        },
        {
          "id": "m2-repost-ttl-polish",
          "title": "Lobby TTL, cancellation and repost MVP flow",
          "description": "Visible timer, automatic expiry/cancellation, relevant refunds and quick repost of the same challenge for open challenge usability and trust.",
          "category": "product",
          "priority": "required",
          "estimate": {
            "min": 6,
            "max": 10
          },
          "consequence": "Core cancellation works, but the open-lobby UX is less polished for first-community acquisition."
        },
        {
          "id": "m2-substitute-waitlist-lite",
          "title": "MVP-lite substitute / open slot flow before lock",
          "description": "Before lock, if a player leaves or fails funding/ready, an eligible player can take the open slot. After lock, no replacement; no-show/admin rules apply.",
          "category": "backend",
          "priority": "required",
          "estimate": {
            "min": 8,
            "max": 14
          }
        }
      ],
      "risks": [
        "Multi-format support is estimated as config-based reuse of one challenge lifecycle. The main uncertainty is MatchZy/server behavior per format, not rebuilding each mode separately."
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
          "description": "One ledger flow for hold, refund, void and payout, with pool size and payout calculations driven by selected match format.",
          "category": "wallet",
          "priority": "required",
          "estimate": {
            "min": 24,
            "max": 32
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
          "title": "Basic withdrawal request and admin review flow",
          "description": "User can request withdrawal to external wallet/provider; admin can approve, reject or hold; action is recorded in audit log. Full withdrawal automation stays post-MVP.",
          "category": "wallet",
          "priority": "required",
          "estimate": {
            "min": 10,
            "max": 16
          },
          "consequence": "MVP can validate funded gameplay, but cash-out operations may need to be handled manually or delayed."
        },
        {
          "id": "m3-kyc-security-events",
          "title": "Basic compliance and payment safety layer",
          "description": "18+ confirmation, country/geo restriction, Terms & Rules acceptance before funding, KYC trigger before withdrawal/threshold, admin withdrawal hold/account freeze and provider/risk status in admin.",
          "category": "wallet",
          "priority": "required",
          "estimate": {
            "min": 12,
            "max": 18
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
          "description": "Publish challenge cards for 1v1, 2v2, 3v3 wingman and 5v5 with format, map, region, entry/prize pool, slots filled, skill/trust status, challenge status and deep links.",
          "category": "discord",
          "priority": "required",
          "estimate": {
            "min": 14,
            "max": 22
          }
        },
        {
          "id": "m4-discord-dm-notifications",
          "title": "Discord DM notifications",
          "description": "DM/system notifications for key events: funds locked, teams formed, veto started/completed, ready check, server ready, match live, result captured, dispute opened and payout/refund status.",
          "category": "discord",
          "priority": "required",
          "estimate": {
            "min": 8,
            "max": 12
          }
        },
        {
          "id": "m4-slash-command-create",
          "title": "MVP-lite slash command draft flow",
          "description": "Slash command creates a draft or opens a pre-filled web flow; final setup and funding stay in the web app.",
          "category": "discord",
          "priority": "required",
          "estimate": {
            "min": 6,
            "max": 10
          },
          "consequence": "Discord still drives traffic, but challenge creation starts in the web app."
        },
        {
          "id": "m4-partner-community-servers",
          "title": "Partner community server publishing",
          "description": "Publish challenge cards into pre-connected partner/community servers where the bot is installed, with lightweight source tracking by server/channel/post for future revenue-share analysis.",
          "category": "discord",
          "priority": "required",
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
          "description": "MVP CS2 server and MatchZy setup using reusable server flow plus config variants for 1v1, 2v2, 3v3 wingman and 5v5.",
          "category": "cs2",
          "priority": "required",
          "estimate": {
            "min": 18,
            "max": 26
          }
        },
        {
          "id": "m5-server-lifecycle-rcon",
          "title": "Server lifecycle and RCON orchestration by format",
          "description": "Prepare server config, expose connection details, start match and reconcile server state using shared lifecycle and format-specific config.",
          "category": "cs2",
          "priority": "required",
          "estimate": {
            "min": 16,
            "max": 24
          }
        },
        {
          "id": "m5-result-logs-demo-fallback",
          "title": "Result, logs, demo and fallback evidence across formats",
          "description": "Store result/score, server logs where available, demo/log references where available, server state evidence, challenge timeline and admin fallback if automatic result capture is unclear. Evidence retention assumption to be agreed, e.g. 90 days.",
          "category": "cs2",
          "priority": "required",
          "estimate": {
            "min": 16,
            "max": 24
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
          "description": "Result finalization, dispute window and structured dispute form with reason, description, accused player if relevant, approximate round/time and payout hold while dispute is open.",
          "category": "admin",
          "priority": "required",
          "estimate": {
            "min": 12,
            "max": 16
          }
        },
        {
          "id": "m6-admin-challenge-actions",
          "title": "Admin challenge and dispute actions",
          "description": "Admin can review challenge-level and player-level risk: players, ratings, funds, evidence, history, block/unblock, restrict joining, stake cap, withdrawal hold, trust status and notes/reasons.",
          "category": "admin",
          "priority": "required",
          "estimate": {
            "min": 22,
            "max": 32
          }
        },
        {
          "id": "m6-audit-timeline",
          "title": "Challenge timeline and audit log",
          "description": "Challenge timeline plus audit log for money/admin actions with who, what, when and why.",
          "category": "admin",
          "priority": "required",
          "estimate": {
            "min": 6,
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
          "description": "Acceptance testing for each supported format through create, join, fund, ready, map confirmation/veto, server info, result/dispute and payout/refund; staging/prod deployment, env docs, basic error logs, DB backup approach and handoff checklist.",
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
    "1v1, 2v2, 3v3 and 5v5 are not treated as four separate products; player count, team size, map pool, ready thresholds and server config are reused through a format configuration layer.",
    "The agreed MVP scope includes simplified versions of compliance, trust states, withdrawal request review, Discord acquisition, partner/community publishing, map veto, source tracking and acceptance criteria.",
    "The architecture should support future games through a shared challenge engine and separate game adapters; CS2 is the first implemented adapter.",
    "Hourly rate is $27/h. $15,000 budget equals roughly 555 billable hours before platform fees.",
    "MatchZy is treated as the primary CS2 match-management tool; logs/demo/RCON/admin review are the fallback path if MatchZy does not cover every case.",
    "Final estimate should shrink or grow after confirming payment provider, CS2 server provider and MatchZy coverage per supported format."
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
