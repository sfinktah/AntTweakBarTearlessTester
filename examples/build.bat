call "%VS140COMNTOOLS%\..\..\VC\vcvarsall.bat" x64
msbuild /p:Configuration=Release /clp:Summary /nologo Examples_VS2015.sln

