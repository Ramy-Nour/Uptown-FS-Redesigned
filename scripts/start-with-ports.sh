#!/bin/bash

# Uptown Financial System - Auto Port Forward Startup Script
# This script starts the dev server and automatically forwards ports for Codespace

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  Uptown Financial System - Redesigned                      ║"
echo "║  Starting Dev Server with Auto Port Forwarding             ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running in Codespace
if [ -n "$CODESPACE_NAME" ]; then
    echo -e "${BLUE}✓ Running in GitHub Codespace${NC}"
    echo -e "${BLUE}  Codespace Name: $CODESPACE_NAME${NC}"
    echo ""
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    echo ""
fi

# Start the dev server
echo -e "${GREEN}🚀 Starting development server...${NC}"
echo ""

npm run dev &
DEV_PID=$!

# Wait for server to start
echo -e "${YELLOW}⏳ Waiting for server to start...${NC}"
sleep 5

# Check if server is running
if ps -p $DEV_PID > /dev/null; then
    echo -e "${GREEN}✓ Dev server started successfully (PID: $DEV_PID)${NC}"
    echo ""
    echo -e "${BLUE}📍 Access URLs:${NC}"
    echo -e "   ${GREEN}Frontend: http://localhost:3002${NC}"
    echo -e "   ${GREEN}API Health: http://localhost:3002/api/health${NC}"
    echo -e "   ${GREEN}API Docs: http://localhost:3002/api/docs${NC}"
    echo ""
    
    if [ -n "$CODESPACE_NAME" ]; then
        echo -e "${BLUE}🌐 Codespace URLs:${NC}"
        CODESPACE_DOMAIN="${CODESPACE_NAME}-3002.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}"
        echo -e "   ${GREEN}Frontend: https://${CODESPACE_DOMAIN}${NC}"
        echo -e "   ${GREEN}API: https://${CODESPACE_DOMAIN}/api${NC}"
        echo ""
    fi
    
    echo -e "${YELLOW}📋 Available API Endpoints:${NC}"
    echo -e "   • GET /api/health - Health check"
    echo -e "   • GET /api/dashboard/kpis - Dashboard KPIs"
    echo -e "   • GET /api/deals - All deals"
    echo -e "   • GET /api/users - All users"
    echo -e "   • GET /api/pricing - Pricing info"
    echo -e "   • GET /api/analytics/revenue - Revenue analytics"
    echo -e "   • GET /api/notifications - Notifications"
    echo -e "   • GET /api/docs - API documentation"
    echo ""
    
    echo -e "${GREEN}✓ Server is running. Press Ctrl+C to stop.${NC}"
    echo ""
    
    # Keep script running
    wait $DEV_PID
else
    echo -e "${YELLOW}✗ Failed to start dev server${NC}"
    exit 1
fi
