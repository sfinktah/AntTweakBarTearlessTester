## Installation

This is an independant tester for Tearless

```
▄▄▄█████▓▓█████ ▄▄▄       ██▀███   ██▓    ▓█████   ██████   ██████ 
▓  ██▒ ▓▒▓█   ▀▒████▄    ▓██ ▒ ██▒▓██▒    ▓█   ▀ ▒██    ▒ ▒██    ▒ 
▒ ▓██░ ▒░▒███  ▒██  ▀█▄  ▓██ ░▄█ ▒▒██░    ▒███   ░ ▓██▄   ░ ▓██▄   
░ ▓██▓ ░ ▒▓█  ▄░██▄▄▄▄██ ▒██▀▀█▄  ▒██░    ▒▓█  ▄   ▒   ██▒  ▒   ██▒
  ▒██▒ ░ ░▒████▒▓█   ▓██▒░██▓ ▒██▒░██████▒░▒████▒▒██████▒▒▒██████▒▒
  ▒ ░░   ░░ ▒░ ░▒▒   ▓▒█░░ ▒▓ ░▒▓░░ ▒░▓  ░░░ ▒░ ░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░
    ░     ░ ░  ░ ▒   ▒▒ ░  ░▒ ░ ▒░░ ░ ▒  ░ ░ ░  ░░ ░▒  ░ ░░ ░▒  ░ ░
  ░         ░    ░   ▒     ░░   ░   ░ ░      ░   ░  ░  ░  ░  ░  ░  
            ░  ░     ░  ░   ░         ░  ░   ░  ░      ░        ░  
                                                                   
```


For just the tester
```shell
git clone https://github.com/sfinktah/AntTweakBarTearlessTester.git
```

For the full Tearless source
```shell
git clone --recursive --depth 1 https://github.com/sfinktah/AntTweakBarTearlessTester.git
```

or do a regular clone then:

```shell
git submodule init 
git submodule update --depth 1
```

## Getting Started

### Requirements (for building Tester only)

 - Visual Studio 2015
 - Git BASH (comes with Microsoft GIT, etc)

```shell
cd AntTweakBarTearlessTester
cd install
getcef
```

Then you should be able to build TwSimpleDX11 and run it.


### Requirements (for building Tearless)

 - Visual Studio 2015
 - CMake
 - 7zip command line tools

```shell
cd AntTweakBarTearlessTester
cd Tearless
git submodule init
git submodule update --depth 1
git submodule foreach git checkout master
build.bat
```
