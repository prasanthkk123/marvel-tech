# Marvel Tech Development Environment Startup Script

Write-Host "Starting Marvel Tech Development Environment..." -ForegroundColor Green
Write-Host ""

# Start Backend
Write-Host "Starting Backend (Spring Boot)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'd:\Projects\MARVEL TECH\backend'; mvn spring-boot:run"

# Wait a bit before starting frontend
Write-Host "Waiting 5 seconds before starting frontend..." -ForegroundColor Cyan
Start-Sleep -Seconds 5

# Start Frontend
Write-Host "Starting Frontend (React)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'd:\Projects\MARVEL TECH\frontend'; npm start"

Write-Host ""
Write-Host "Both services are starting..." -ForegroundColor Green
Write-Host "Backend will be available at: http://localhost:8080" -ForegroundColor White
Write-Host "Frontend will be available at: http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")