gen-proto-web:
	protoc --plugin=protoc-gen-grpc-web=./node_modules/.bin/protoc-gen-grpc-web \
    --js_out=import_style=commonjs,binary:src/libs/quilibrium/protobufs/pb \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/libs/quilibrium/protobufs/pb \
    --proto_path=src/libs/quilibrium/protobufs \
    src/libs/quilibrium/protobufs/*.proto


