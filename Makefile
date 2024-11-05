gen-proto-ts:
	protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts_proto \
      --ts_out=src/libs/quilibrium/protobufs \
      --ts_opt=esModuleInterop=true,forceLong=long \
      --proto_path=src/libs/quilibrium/protobufs \
      src/libs/quilibrium/protobufs/*.proto
