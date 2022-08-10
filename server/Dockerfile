FROM golang:1.18.3
ENV TZ=Asia/Tokyo

ENV CGO_ENABLED=0
ENV GOOS=linux
ENV GOARCH=amd64
ENV ROOTPATH=/go/app

WORKDIR ${ROOTPATH}

COPY go.mod go.sum ./
RUN go mod download

COPY src/ ${ROOTPATH}/src/

EXPOSE 80

CMD ["go", "run", "src/main.go"]
