#!/bin/bash
./wget http://opensource.spotify.com/cefbuilds/cef_binary_3.2785.1477.g58b5209_windows64_client.tar.bz2
bin/bzip2 -d cef_binary_3.2785.1477.g58b5209_windows64_client.tar.bz2
bin/tar xvf cef_binary_3.2785.1477.g58b5209_windows64_client.tar
mkdir -p ../examples/bin64/
cp -rv cef_binary_3.2785.1477.g58b5209_windows64_client/Release/* ../examples/bin64/
