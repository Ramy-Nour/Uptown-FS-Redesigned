# GitHub Codespace Setup Guide

## Quick Start

The Uptown Financial System - Redesigned is fully configured for GitHub Codespaces with automatic port forwarding.

### Option 1: Open in Codespace (Recommended)

1. Go to the GitHub repository: https://github.com/Ramy-Nour/Uptown-FS-Redesigned
2. Click **Code** → **Codespaces** → **Create codespace on main**
3. Wait for the Codespace to initialize (this may take 2-3 minutes)
4. The dev server will automatically start and forward ports

### Option 2: Manual Setup in Existing Codespace

```bash
# Install dependencies
npm install

# Start dev server with port forwarding
npm run dev
```

---

## Automatic Port Forwarding

The `.devcontainer/devcontainer.json` file automatically forwards the following 3 essential ports:

| Port | Service | Purpose |
|------|---------|----------|
| **3002** | Frontend Dev Server | Main application UI |
| **5174** | Vite Dev Server | Hot module replacement |
| **8080** | API Server | Public API endpoints |

### View Forwarded Ports

1. In VS Code, click the **Ports** tab at the bottom
2. You should see all forwarded ports listed
3. Click on any port to open it in a browser

---

## Access Your Application

### Local Access (within Codespace Terminal)
```
http://localhost:3002
```

### Public Access (from anywhere)
When running in Codespace, VS Code automatically generates public URLs:
```
https://{CODESPACE_NAME}-3002.{GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}
```

Example:
```
https://my-codespace-3002.app.github.dev
```

---

## API Endpoints

All API endpoints are available at the same URL as the frontend:

### Health Check
```bash
curl http://localhost:3002/api/health
```

### Dashboard KPIs
```bash
curl http://localhost:3002/api/dashboard/kpis
```

### Deals
```bash
curl http://localhost:3002/api/deals
```

### Users
```bash
curl http://localhost:3002/api/users
```

### Pricing
```bash
curl http://localhost:3002/api/pricing
```

### Analytics
```bash
curl http://localhost:3002/api/analytics/revenue
```

### Notifications
```bash
curl http://localhost:3002/api/notifications
```

### API Documentation
```bash
curl http://localhost:3002/api/docs
```

---

## Development Workflow

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Run Type Checking
```bash
npm run check
```

### Format Code
```bash
npm run format
```

---

## Environment Variables

Development environment variables are configured in the devcontainer:

```env
NODE_ENV=development
VITE_API_URL=http://localhost:3002/api
VITE_APP_TITLE=Uptown Financial System - Redesigned
```

---

## Troubleshooting

### Ports Not Forwarding

1. **Check devcontainer.json**: Ensure `.devcontainer/devcontainer.json` exists
2. **Rebuild Container**: 
   - Press `Ctrl+Shift+P`
   - Search for "Codespaces: Rebuild Container"
   - Click and wait for rebuild
3. **Manual Forward**:
   - Click **Ports** tab
   - Click **"Forward a Port"**
   - Enter port number (e.g., 3002)

### Server Not Starting

1. Check terminal for errors
2. Ensure port is not in use: `lsof -i :3002`
3. Kill existing process: `pkill -f "npm run dev"`
4. Restart: `npm run dev`

### CORS Issues

The API has CORS enabled for all origins. If you still see CORS errors:

1. Check browser console for specific error
2. Ensure API URL is correct
3. Verify the API endpoint exists

---

## Performance Tips

1. **Use Codespace with at least 4 cores** for better performance
2. **Close unused tabs** to reduce memory usage
3. **Use VS Code extensions** for better development experience
4. **Enable autosave** in VS Code settings

---

## VS Code Extensions

The following extensions are automatically installed:

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - CSS class suggestions
- **TypeScript** - TypeScript support

---

## Useful Commands

```bash
# View running processes
ps aux | grep node

# Check port usage
lsof -i :3002

# View logs
tail -f /tmp/dev.log

# Kill dev server
pkill -f "npm run dev"

# Clean install
rm -rf node_modules package-lock.json && npm install
```

---

## Project Structure

```
.devcontainer/
├── devcontainer.json          # Codespace configuration

scripts/
└── start-with-ports.sh        # Auto port forwarding script

client/
├── src/
│   ├── pages/
│   │   └── Home.tsx           # Main dashboard
│   ├── components/
│   ├── App.tsx
│   └── index.css
└── public/
    └── images/                # Visual assets

server/
└── index.ts                   # Express API server

package.json
README.md
COMPONENT_LIBRARY.md
```

---

## Next Steps

1. ✅ Open in Codespace
2. ✅ Wait for automatic setup
3. ✅ View the application in the Ports tab
4. ✅ Start developing!

---

## Support

For issues or questions:
- Check the [README.md](./README.md)
- Review [COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md)
- Open an issue on GitHub

---

**Happy Coding! 🚀**
