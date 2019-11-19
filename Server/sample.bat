::start cmd.exe /k d:\Angular\Sample1
@echo off
::cmd /k cd /D "d:\Angular"
d:
cd "d:\Apart Office\Server"
call forever ServerJS.js
::call forever start ServerJS.js