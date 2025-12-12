# Install all dependencies
install:
	npm install

# Start development server
dev:
	npm run dev

# Build production bundle
build:
	npm run build

# Preview the production build locally
preview:
	npm run preview

# Remove node_modules and reinstall cleanly
reinstall:
	rm -rf node_modules package-lock.json
	npm install

# Format code (if using Prettier)
format:
	npx prettier --write .