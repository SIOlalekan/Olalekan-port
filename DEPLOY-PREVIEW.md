# Updating your existing Netlify Deploy Preview (do not merge yet)

Your correct GitHub repository is **SIOlalekan/Olalekan-port**. The existing open pull request compares `portfolio-redesign-preview` into `main` and already has a working Netlify Deploy Preview.

1. Open **GitHub Desktop** and choose repository **Olalekan-port** (not Olalekan-portfolio).
2. Confirm **Current branch** is `portfolio-redesign-preview`.
3. Select **Repository → Show in Explorer** to open the correct local GitHub folder.
4. Extract this ZIP and **copy all its contents** into that repository folder. Choose **Replace** for same-named files. Keep `.git` and unrelated files; do not nest this ZIP inside a new folder.
5. Go back to GitHub Desktop → **Changes**. Check that `index.html`, `about.html`, `projects.html`, `research.html`, `certifications.html`, `experience.html`, `speaking.html`, `contact.html`, `styles/redesign.css`, `js/redesign.js` and both images are present. New files may be shown with a green plus.
6. Commit on `portfolio-redesign-preview`, e.g. `Refine professional portfolio content and visual design`.
7. Click **Push origin** (or **Publish branch** only if the branch is not yet published). **Do not merge your pull request.**
8. Return to the **existing pull request**. Netlify normally rebuilds its **same Deploy Preview URL** with every new pushed commit, after checks finish. Open that preview and inspect pages on desktop and phone.
9. Verify public wording, career dates, photos, research links, certification details and mailto speaking enquiry. If happy, merge separately when you decide to make the redesign public.

**Safety:** You are working from a separate preview branch, so the current public `main` site is not overwritten by these file-copy steps. Do not change the Netlify production-branch setting.

**Limits:** Automated structure/link checks and browser screenshots have been completed locally. This is a review package and is not yet deployed to your actual GitHub repository or live Netlify site.
