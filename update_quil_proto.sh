#!/bin/bash

# GitHub 
BRANCH="v2.0.2.4"

# GitHub API URL
API_URL="https://raw.githubusercontent.com/QuilibriumNetwork/ceremonyclient/$BRANCH/node/protobufs/"

cd $(pwd)/src/libs/quilibrium/protobufs

echo $API_URL

# scan for .proto file URLs
FILE_NAMES=(
    "channel.proto"
    "application.proto"
    "clock.proto"
    "data.proto"
    "keys.proto"
    "node.proto"
)

echo "Removing existing .proto files..."
rm -f *.proto

# download .proto
for FILE in "${FILE_NAMES[@]}"; do
    echo "Downloading $FILE..."
    wget "$API_URL$FILE" -O "$FILE"
done

echo "All .proto files downloaded."
