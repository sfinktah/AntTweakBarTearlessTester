set BASH="C:\Program Files\Git\bin\bash.exe"
if exist %BASH% goto FOUND
set BASH="C:\Program Files (x86)\Git\bin\bash.exe"
if exist %BASH% goto FOUND
echo "Couldn't find BASH"
EXIT
:FOUND
%BASH% --login -i -c "./getcef.sh"
