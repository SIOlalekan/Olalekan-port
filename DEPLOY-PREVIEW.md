# Deploy preview checklist

## Option A — GitHub Desktop (Windows-friendly)
1. Open GitHub Desktop and clone `SIOlalekan/Olalekan-port` if not already cloned.
2. Go to **Current Branch → New Branch** and name it `portfolio-redesign-preview`; create it from `main`.
3. Extract this ZIP. Copy its **contents**, including `index.html`, `about.html`, `projects.html`, `research.html`, folders and `netlify.toml`, into the local repository folder. Do not delete the hidden `.git` folder.
4. Review changed files in GitHub Desktop, enter summary `Premium navy and mint portfolio redesign`, then click **Commit to portfolio-redesign-preview**.
5. Click **Publish branch**.
6. On GitHub, click **Compare & pull request**; open the PR against `main`. Do not click **Merge** yet.
7. Look under PR **Checks** or **Deploy Preview** for Netlify's preview URL. If absent, review deploy-preview settings on Netlify.
8. Check mobile, tablet, desktop, links, publication author order, project stages, image crop, and contact details before approving a merge.

## Option B — Git CLI
```bash
git clone https://github.com/SIOlalekan/Olalekan-port.git
cd Olalekan-port
git switch -c portfolio-redesign-preview
# Copy contents of the extracted portfolio ZIP into this folder.
git status
git add -A
git commit -m "Premium navy and mint portfolio redesign"
git push -u origin portfolio-redesign-preview
```
Open a PR from `portfolio-redesign-preview` into `main`. Netlify preview is conditional on project integration and previews being enabled.

## Important
No code has been pushed by ChatGPT. This package is not itself an active Netlify preview. Your live site remains unchanged until a production publish or PR merge. Do not replace or upload the ZIP as-is to the root of the repository; extract and copy its contents.
