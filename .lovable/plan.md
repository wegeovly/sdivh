## Goal
Replace the current `src/assets/hero-children.jpg` with a new, more realistic photo styled to match the three trip images (`trip-1`, `trip-2`, `trip-3`) shown in the "Trips your school can offer" section.

## Approach
1. View the existing `trip-1.jpg`, `trip-2.jpg`, `trip-3.jpg` to lock in the visual style (natural lighting, real-photo feel, warm/earthy tones, children with facilitators in outdoor/learning settings).
2. Generate a new hero image using the **premium** image model for maximum realism, with a prompt aligned to the trip-image aesthetic:
   - Realistic documentary-style photograph
   - Indian children ages 6–10 on a guided forest/nature walk with a friendly facilitator
   - Soft natural golden-hour light, shallow depth of field
   - Warm, earthy color palette consistent with the trip photos
   - 4:3 aspect ratio to match the hero container (`aspect-[4/3]`)
3. Overwrite `src/assets/hero-children.jpg` so no code changes are needed — `src/routes/index.tsx` already imports it.
4. Verify in preview that the new hero feels cohesive with the trip cards below.

## Out of scope
- No layout, copy, or color-token changes.
- No changes to the trip images themselves.
