cd C:\jenkins\workspace\SCM\_QA\Otex_Voltage_UI_Automation\allure-report
set url="C:\jenkins\workspace\SCM\_QA\Otex_Voltage_UI_Automation\allure-report\index.html"
start firefox.exe %url%

ping -n 20 127.0.0.1 > NULL

cd C:\jenkins\workspace\SCM\_QA\Otex_Voltage_UI_Automation\boxcutter-1.5
boxcutter -c 0,0,1175,719 report.png
taskkill /f /im "firefox.exe"