# PowerShell script to set up Java 21 as the default Java version
# This script sets up the JAVA_HOME environment variable and updates PATH

Write-Host "Setting up Java 21 as the default Java version..." -ForegroundColor Green

# Set JAVA_HOME
$javaHome = "C:\Program Files\Microsoft\jdk-21.0.8.9-hotspot"

if (Test-Path $javaHome) {
    Write-Host "Found Java 21 installation at: $javaHome" -ForegroundColor Green
    
    # Set JAVA_HOME for current session
    $env:JAVA_HOME = $javaHome
    
    # Set JAVA_HOME permanently for user
    [System.Environment]::SetEnvironmentVariable("JAVA_HOME", $javaHome, [System.EnvironmentVariableTarget]::User)
    
    # Update PATH for current session
    $env:PATH = "$javaHome\bin;" + ($env:PATH -replace [regex]::Escape("$javaHome\bin;"), "")
    
    # Get current user PATH
    $currentPath = [System.Environment]::GetEnvironmentVariable("PATH", [System.EnvironmentVariableTarget]::User)
    
    # Remove any existing Java paths and add Java 21 path at the beginning
    $cleanPath = $currentPath -replace "C:\\Program Files\\[^;]*jdk[^;]*\\bin;?", ""
    $newPath = "$javaHome\bin;$cleanPath"
    
    # Set PATH permanently for user
    [System.Environment]::SetEnvironmentVariable("PATH", $newPath, [System.EnvironmentVariableTarget]::User)
    
    Write-Host "JAVA_HOME set to: $javaHome" -ForegroundColor Green
    Write-Host "PATH updated to include Java 21 bin directory" -ForegroundColor Green
    Write-Host ""
    Write-Host "Verifying Java installation:" -ForegroundColor Yellow
    java -version
    Write-Host ""
    Write-Host "Java 21 setup completed successfully!" -ForegroundColor Green
    Write-Host "Note: You may need to restart your terminal or IDE for the changes to take effect globally." -ForegroundColor Yellow
} else {
    Write-Host "Java 21 installation not found at expected location: $javaHome" -ForegroundColor Red
    Write-Host "Please ensure Java 21 is installed correctly." -ForegroundColor Red
}