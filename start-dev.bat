@echo off
echo Starting Marvel Tech Development Environment...
echo.

echo Starting Backend (Spring Boot)...
start "Backend" cmd /k "cd /d "%~dp0backend" && mvn spring-boot:run"

echo Waiting 5 seconds before starting frontend...
timeout /t 5 /nobreak >nul

echo Starting Frontend (React)...
start "Frontend" cmd /k "cd /d "%~dp0frontend" && npm start"

echo.
echo Both services are starting...
echo Backend will be available at: http://localhost:8080
echo Frontend will be available at: http://localhost:3000
echo.
echo Press any key to exit...
pause >nul