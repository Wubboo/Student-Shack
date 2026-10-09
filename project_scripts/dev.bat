@echo off

call :run "npm run fmt"
if errorlevel 1 goto :error

call :run "npm run dev"
if errorlevel 1 goto :error

pause
exit /b 0

:run
call %~1
exit /b %errorlevel%

:error
pause
exit /b 1