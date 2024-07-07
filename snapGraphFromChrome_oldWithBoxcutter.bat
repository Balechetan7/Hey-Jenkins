TASKKILL /F /IM chrome.exe
set "Command="
SET mypath=%~dp0
echo %mypath:~0,-1%
for /f "tokens=2,*" %%A in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Clients\StartMenuInternet\Google Chrome\shell\open\command" /ve 2^>nul') do set "Command=%%~B"
if not defined Command for /f "tokens=2,*" %%A in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Clients\StartMenuInternet\Google Chrome\shell\open\command" /ve 2^>nul') do set "Command=%%~B"
if not defined Command echo Google Chrome was not found.
if defined Command start "Browser" "%Command%"  --allow-file-access-from-files --disable-web-security "%mypath:~0,-1%/allure-report/index.html"
ping -n 20 127.0.0.1 > NULL
cd C:\jenkins\workspace\SCM\_QA\Otex_Voltage_UI_Automation\boxcutter-1.5
boxcutter -c 181,70,617,500 report.png
taskkill /f /im "chrome.exe"
