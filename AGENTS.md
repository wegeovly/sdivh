# Architecture
- Keep program categories on separate leaf routes and share trip listing presentation so category pages reuse existing content without duplicated cards.
- Validate contact drafts through one Zod schema before constructing an encoded mailto URL; no submission service is configured, so never claim a message was delivered.