# PIM Application

Built using .NET SDK 2.1.

## Setup

- Download and install [.NET SDK 2.1](https://dotnet.microsoft.com/download/dotnet-core/2.1)

## Debugging

- Copy and paste the launch.json and tasks.json under the .vscode or .vs folder at the root of the MONOBIRD project folder.

## Steps to run

1. Restore any dependencies and project specific tools

> dotnet restore

2. Install developer SSL cert locally

> dotnet dev-certs https --trust

3. Start server

> dotnet run

4. Go to https://localhost:5001/api/values/6202

## Dockerize

1. Create Docker image

> docker build -t dotnet-pim .

2. Create and run our container

> docker run -d -p 5000:80 -p 5001:443 -e ASPNETCORE_HTTPS_PORT=5001 -e ASPNETCORE_URLS="https://+;http://+" -e Kestrel__Certificates__Default__Path=/https/cert-aspnetcore.pfx -e Kestrel__Certificates__Default__Password=ufo -v ${PWD}/https:/https --name arc-pim dotnet-pim

3. Go to https://localhost:5001/api/values/6202
