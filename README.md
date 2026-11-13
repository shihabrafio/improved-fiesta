# GoalPay Tracker

Savings goals, work hours needed (per day, week, fortnight, month) and expense tracking.
One codebase in `www/` becomes a website, a Windows .exe and an Android app.
Accounts use Firebase email + password with required email verification.

## Setup
1. **Firebase:** console.firebase.google.com > create project.
   - Build > Authentication > Get started > enable **Email/Password**.
   - Build > Firestore Database > Create database, then Rules tab: paste `firestore.rules`, Publish.
   - Project settings > Your apps > Web (</>) > copy the config into `www/firebase-config.js`.
   - Authentication > Settings > Authorized domains: add `YOUR-USERNAME.github.io`.
2. **GitHub:** create a repo, upload everything in this folder (keep the `.github` folder), push to `main`.
   - Settings > Pages > Source: **GitHub Actions**.
3. Open the **Actions** tab. After a few minutes you get:
   - the website at `https://YOUR-USERNAME.github.io/REPO-NAME/`
   - `GoalPay-Windows-exe` and `GoalPay-Android-apk` under the finished run's Artifacts.

## Updating
Change anything in `www/`, commit and push. The workflow rebuilds the website, .exe and .apk, so a change on your PC reaches mobile too. Accounts and data are shared through Firebase.

## Run it (no Firebase needed to try it)
Until `www/firebase-config.js` is filled in, the app runs in offline mode (no sign-in, data stays on the device).
- **Web:** double-click `run-web.bat`, open http://localhost:3000 (needs Node.js).
- **PC app window:** double-click `run-pc-app.bat`.
- **Phone:** open the website link in Chrome (Android) or Safari (iPhone), then Add to Home Screen. It installs like an app, no .apk needed.
- **.exe and .apk files:** built by GitHub after you push (see Setup).

## Notes
- The APK is a debug build: on your phone allow "install unknown apps" to install it. Publishing to Google Play needs a signed release build.
- A Mac or iPhone app needs a Mac to build; ask if you want it.

## Using it on PC and phone with the same data
1. Fill in `www/firebase-config.js` (Setup step 1). Without it each device keeps its own separate, offline data.
2. Push to `main`. When the Actions run finishes, download **GoalPay-Windows-exe** (PC) and **GoalPay-Android-apk** (phone), or just open the website link on any device.
3. Sign in with the **same email and password** on every device. Goals and expenses sync through your account.
4. The first sign-in on each device needs internet. Later, the app opens with your last saved data even when offline.
