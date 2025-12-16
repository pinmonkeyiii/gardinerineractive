# Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY web-BcoleGardiner.Server/web-BcoleGardiner.Server.csproj web-BcoleGardiner.Server/
RUN dotnet restore web-BcoleGardiner.Server/web-BcoleGardiner.Server.csproj

COPY . .
RUN dotnet publish web-BcoleGardiner.Server/web-BcoleGardiner.Server.csproj -c Release -o /app/publish /p:UseAppHost=false

# Run
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Render provides PORT at runtime
ENV ASPNETCORE_URLS=http://0.0.0.0:${PORT}

COPY --from=build /app/publish .
CMD ["dotnet", "web-BcoleGardiner.Server.dll"]