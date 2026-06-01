# Privacy & Sanitization Checklist

## Before Public Release

- [ ] Verify that all client-identifying names (e.g., `AdPrime`, partner names) have been replaced with neutral synonyms in public MDX files.
- [ ] Confirm sensitive technical terms (e.g., `ICD-10`, `icd10.db`) have been replaced with generic terms (e.g., `medical-classification dataset`, `medical_codes.db`).
- [ ] Review `src/content/projects/private/` to ensure full technical copies are NOT linked from the public site.
- [ ] Add `.gitignore` entry for `src/content/projects/private/` if the private folder should not be committed to the public repo.
- [ ] Run `grep -r "AdPrime\|ICD-10\|icd10\|adprime" src/` to verify no sensitive strings remain in public files.
- [ ] Test the live site to confirm no unintended leaks in social previews, OG metadata, or page titles.

## Sanitization Manifest

See `src/content/projects/sanitization_manifest.csv` for a mapping of original → public names and the location of private copies.

## What is in `src/content/projects/private/`

- **icd10-pipeline.full.mdx** — Full original case study (unredacted). Contains client names, detailed benchmarks, and internal tool references. **Not linked from the public site.** Kept for internal reference or client communications.

## Recommendations

1. Add `src/content/projects/private/` to `.gitignore` to avoid accidental commits of sensitive files to the public repo.
2. Before each release, run the grep command above to catch any missed references.
3. If you need to add new projects, follow the same pattern: create a sanitized public MDX in `src/content/projects/`, and optionally keep a full copy in `src/content/projects/private/`.

