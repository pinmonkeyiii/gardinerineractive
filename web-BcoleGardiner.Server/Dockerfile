# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore
COPY web-BColeGardiner.Server/web-BColeGardiner.Server.csproj web-BColeGardiner.Server/
RUN dotnet restore web-BColeGardiner.Server/web-BColeGardiner.Server.csproj

# Copy everything else and publish
COPY . .
RUN dotnet publish web-BColeGardiner.Server/web-BColeGardiner.Server.csproj -c Release -o /app/publish /p:UseAppHost=false

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Render supplies PORT
ENV ASPNETCORE_URLS=http://0.0.0.0:${PORT}

COPY --from=build /app/publish .
CMD ["dotnet", "web-BColeGardiner.Server.dll"]