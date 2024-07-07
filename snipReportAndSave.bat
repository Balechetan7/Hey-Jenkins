ping -n 30 127.0.0.1 > NULL
cd C:\jenkins\workspace\SCM\_QA\Otex_Voltage_UI_Automation\boxcutter-1.5

boxcutter -c 0,0,1000,500 report.png

taskkill /f /im "chrome.exe"