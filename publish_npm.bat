@echo off

:: npm install
call npm install --package-lock-only
if errorlevel 1 exit /b %errorlevel%

call npm publish --access public
if errorlevel 1 exit /b %errorlevel%