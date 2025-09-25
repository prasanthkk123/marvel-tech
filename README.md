# 🏭 MarvelTech - Industrial Automation Solutions

A modern full-stack web application for MarvelTech, showcasing industrial automation products, CNC machine repair services, and brand partnerships.

![MarvelTech Logo](frontend/public/logomarveltech.jpg)

## 🌟 Features

- **🔧 Product Catalog**: Comprehensive display of 103+ industrial products
- **🏭 Brand Partners**: Scrolling marquee of partner brands (Fanuc, Mitsubishi, Siemens, Delta, Schneider Electric)
- **📱 Responsive Design**: Mobile-friendly interface
- **🎥 Background Video**: Dynamic background animations
- **📧 Contact Forms**: Customer enquiry system
- **🎨 Modern UI**: Clean, professional design

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern JavaScript framework
- **CSS3** - Custom styling with animations
- **Responsive Design** - Mobile-first approach

### Backend
- **Spring Boot** - Java-based backend framework
- **Maven** - Dependency management
- **H2 Database** - In-memory database for development
- **Spring Data JPA** - Data persistence

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Java 17
- Maven 3.6+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/marvel-tech.git
   cd marvel-tech
   ```

2. **Start the Backend**
   ```bash
   cd backend
   mvn spring-boot:run
   ```
   Backend will be available at `http://localhost:8080`

3. **Start the Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   npm start
   ```
   Frontend will be available at `http://localhost:3000`

## 📁 Project Structure

```
marvel-tech/
├── backend/                 # Spring Boot backend
│   ├── src/
│   │   └── main/
│   │       ├── java/com/marveltech/
│   │       └── resources/
│   └── pom.xml
├── frontend/                # React frontend
│   ├── public/
│   │   ├── images/         # Product images (103 products)
│   │   ├── brands/         # Brand partner logos
│   │   └── video/          # Background videos
│   ├── src/
│   │   ├── components/     # React components
│   │   └── data/          # Product data
│   └── package.json
└── README.md
```

## 🎯 Available Scripts

### Backend
```bash
mvn spring-boot:run    # Start development server
mvn clean package     # Build JAR file
mvn test              # Run tests
```

### Frontend
```bash
npm start             # Start development server
npm run build         # Build for production
npm test              # Run tests
```

## 🌐 API Endpoints

- `GET /` - Health check endpoint
- `GET /api/health` - Backend health status

## 📸 Screenshots

### Homepage
- Dynamic video background
- Product catalog with 103+ items
- Brand partner marquee
- Contact forms

### Features
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Professional UI/UX

## 🏢 Company Information

**MarvelTech** - Leading provider of:
- CNC Machine Repair Services
- Industrial Cooling Fans
- Machine Reconditioning
- Industrial Automation Solutions

### Partner Brands
- 🔧 Fanuc
- ⚡ Mitsubishi
- 🏭 Siemens
- 📡 Delta
- ⚙️ Schneider Electric

## 📧 Contact

For business inquiries and technical support, please use the contact form on our website.

## 📄 License

This project is proprietary software owned by MarvelTech.

## 🚀 Deployment

The application can be deployed using:
- **Frontend**: Netlify, Vercel, or any static hosting
- **Backend**: Heroku, AWS, or any Java hosting platform

## 🔧 Development

### Adding New Products
1. Add product images to `frontend/public/images/`
2. Update `frontend/src/data/products.js`
3. Products will automatically appear in the catalog

### Customizing Brands
1. Add brand logos to `frontend/public/brands/`
2. Update `frontend/src/components/BrandMarquee.js`

---

**Built with ❤️ by MarvelTech Team**