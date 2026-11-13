@echo off
cd /d "%~dp0"
echo Open http://localhost:3000 in your browser. Press Ctrl+C to stop.
npx --yes serve www -l 3000
pause
