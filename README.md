
# ⛪ Wonders of God Church - Digital Sanctuary💒

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev/)

> 🙏 A modern, responsive digital platform for Wonders of God Church, connecting our community through faith, worship, and fellowship.

## 🌟 Features

### ✅ Current Features
- 🏠 **Homepage** - Welcome visitors with inspiring content and church information
- 📖 **About Us** - Learn about our church's mission, vision, and values
- 🎥 **Sermons & Media** - Watch and download our latest messages and audio content
- 📅 **Events** - Stay updated with upcoming church events and activities
- 🤝 **Ministries** - Discover various ministry opportunities and get involved
- 💰 **Give** - Secure online giving platform for tithes and offerings
- 📞 **Contact** - Get in touch with church leadership and staff
- 📚 **Resources** - Access spiritual resources, study materials, and downloads
- 📱 **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- 🎨 **Modern UI/UX** - Clean, intuitive interface with beautiful animations

### 🚀 Upcoming Features
- 🔐 **Member Portal** - Secure login for church members
- 📊 **Member Dashboard** - Personal spiritual growth tracking
- 💬 **Prayer Requests** - Submit and track prayer requests
- 📧 **Newsletter Subscription** - Stay connected with church updates
- 🎵 **Worship Music Library** - Access to worship songs and lyrics
- 📱 **Mobile App** - Native mobile application for iOS and Android
- 🔔 **Push Notifications** - Real-time updates for events and announcements
- 📖 **Bible Study Tools** - Interactive Bible reading and study features
- 👥 **Small Groups** - Find and join small group communities
- 🎓 **Online Classes** - Virtual Bible study and discipleship courses
- 💳 **Recurring Donations** - Set up automatic giving schedules
- 🌍 **Multi-language Support** - Swahili and English language options
- 🎯 **Event Registration** - Online registration for church events
- 📸 **Photo Gallery** - Church event photos and memories
- 🎬 **Live Streaming** - Watch services live online
- 📊 **Analytics Dashboard** - Church leadership insights and statistics

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| ⚛️ **React** | Frontend Framework | 18.3.1 |
| 🔷 **TypeScript** | Type Safety | 5.0+ |
| 🎨 **Tailwind CSS** | Styling Framework | 3.0+ |
| ⚡ **Vite** | Build Tool | 5.0+ |
| 🧩 **Shadcn/UI** | Component Library | Latest |
| 🔍 **Lucide React** | Icon Library | 0.462.0 |
| 🌐 **React Router** | Navigation | 6.26.2 |
| 🔄 **TanStack Query** | Data Fetching | 5.56.2 |
| 📊 **Recharts** | Data Visualization | 2.12.7 |

## 🚀 Quick Start

### Prerequisites
- 📦 **Node.js** (version 18.0 or higher)
- 📋 **npm** or **yarn** package manager
- 💻 **Git** for version control

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/wonders-of-god-church.git
   cd wonders-of-god-church
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🔧 Development Scripts

| Command | Description | Icon |
|---------|-------------|------|
| `npm run dev` | Start development server | 🚀 |
| `npm run build` | Build for production | 🏗️ |
| `npm run preview` | Preview production build | 👀 |
| `npm run lint` | Run ESLint | 🧹 |
| `npm run type-check` | Run TypeScript checks | 🔍 |


### 🔗 Custom Domain Setup
1. Navigate to **Project > Settings > Domains**
2. Click **Connect Domain**
3. Follow the DNS configuration instructions
4. Verify domain ownership

### 📦 Deploy to Other Platforms

#### **Vercel** 🔺
```bash
npm install -g vercel
vercel --prod
```

#### **Netlify** 🌐
```bash
npm run build
# Upload dist/ folder to Netlify
```

#### **GitHub Pages** 📚
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📁 Project Structure

```
src/
├── 📂 components/          # Reusable UI components
│   ├── 🧩 ui/             # Shadcn/UI components
│   ├── 🧭 Navigation.tsx  # Main navigation component
│   └── ...
├── 📂 pages/              # Page components
│   ├── 🏠 Index.tsx       # Homepage
│   ├── 📖 About.tsx       # About page
│   ├── 🎥 Sermons.tsx     # Sermons page
│   └── ...
├── 📂 hooks/              # Custom React hooks
├── 📂 lib/                # Utility functions
├── 📂 types/              # TypeScript type definitions
└── 📄 App.tsx             # Main app component
```

## 🎨 Customization

### 🎨 Colors and Branding
Customize the church branding in `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        secondary: '#your-secondary-color',
      }
    }
  }
}
```

### 📝 Content Management
Update church information in the respective page components:
- Church name and details in `Navigation.tsx`
- Service times in `ServiceTimes.tsx`
- Pastor information in sermon components

## 🤝 Contributing

We welcome contributions from our church community! 🙌

### 🛠️ How to Contribute
1. **Fork** the repository 🍴
2. **Create** a feature branch 🌿
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes 💾
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push** to the branch 📤
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request 🔄

### 📋 Contribution Guidelines
- ✅ Follow the existing code style
- ✅ Write meaningful commit messages
- ✅ Test your changes thoroughly
- ✅ Update documentation as needed
- ✅ Respect the church's values and mission

### 🙏 Prayer Requests
If you need prayer or spiritual support:
- 📧 **Prayer Email**: prayer@wondersofgodchurch.org
- 📞 **Prayer Hotline**: +254 XXX XXX XXX (24/7)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- 🙏 **God Almighty** - For His grace and guidance
- ⛪ **Wonders of God Church Community** - For their support and feedback
- 👨‍💻 **Development Team** - For their dedication and hard work
- 🎨 **UI/UX Designers** - For creating beautiful and intuitive designs
- 📚 **Open Source Community** - For the amazing tools and libraries

## 📊 Project Stats

![GitHub last commit](https://img.shields.io/github/last-commit/mwakidenis/Church-Event-Management-System)
![GitHub issues](https://img.shields.io/github/issues/mwakidenis/Church-Event-Management-System)
![GitHub pull requests](https://img.shields.io/github/issues-pr/mwakidenis/Church-Event-Management-System)
![GitHub stars](https://img.shields.io/github/stars/mwakidenis/Church-Event-Management-System)

---

<div align="center">

### 🌟 Colossians 3:23-24 (NIV)
**"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.**" 🌟

**Made with ❤️ by Mwaki Denis and 🙏 for the Glory of God**
##
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-%F0%9F%8D%B5-yellow)](https://wa.me/254798750585)


[🌐 Visit Our Website](https://wondersofgodchurch.org) | [📧 Contact Us](mailto:info@wondersofgodchurch.org) | [🙏 Prayer Requests](mailto:prayer@wondersofgodchurch.org)

</div>
```
