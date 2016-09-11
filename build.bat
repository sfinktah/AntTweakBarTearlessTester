call "%VS140COMNTOOLS%\..\..\VC\vcvarsall.bat" x64
cd src
call build.bat
cd ..
cd examples
call build.bat
cd bin64
TwSimpleDX11
