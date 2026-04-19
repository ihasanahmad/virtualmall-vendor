import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import VendorLayout from './components/VendorLayout';
import Login from './pages/Login';
import BrandRegistration from './pages/BrandRegistration';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';

// ============================================================
// VIRTUAL MEGA MALL — VENDOR PORTAL DARK LUXURY ELITE THEME
// ============================================================
const darkLuxuryTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:   { main: '#d4af37', light: '#f0cc55', dark: '#b8941f', contrastText: '#000' },
    secondary: { main: '#1a1a1a', light: '#252525', dark: '#111111' },
    background:{ default: '#080808', paper: '#111111' },
    text:      { primary: '#f0e6d0', secondary: 'rgba(240,230,208,0.5)' },
    divider:   'rgba(212,175,55,0.15)',
    success:   { main: '#00b894' },
    warning:   { main: '#d4af37' },
    error:     { main: '#ff4757' },
    info:      { main: '#74b9ff' },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, letterSpacing: '-0.01em' },
    h4: { fontWeight: 700, letterSpacing: '-0.01em' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600, letterSpacing: '0.01em' },
    button: { fontWeight: 700, letterSpacing: '0.04em' },
    overline: { fontWeight: 700, letterSpacing: '0.12em' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#080808',
          backgroundImage: 'radial-gradient(ellipse at 20% 0%, rgba(212,175,55,0.04) 0%, transparent 50%)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(212,175,55,0.3) #0a0a0a',
          '&::-webkit-scrollbar': { width: 6 },
          '&::-webkit-scrollbar-track': { background: '#0a0a0a' },
          '&::-webkit-scrollbar-thumb': { background: 'rgba(212,175,55,0.3)', borderRadius: 3 },
          '&::selection': { background: 'rgba(212,175,55,0.25)', color: '#f0e6d0' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: 50,
          fontWeight: 700,
          letterSpacing: '0.06em',
          fontSize: '0.8rem',
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
          color: '#000',
          boxShadow: '0 4px 16px rgba(212,175,55,0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #f0cc55 0%, #d4af37 100%)',
            boxShadow: '0 8px 28px rgba(212,175,55,0.5)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(212,175,55,0.4)',
          color: '#d4af37',
          '&:hover': { borderColor: '#d4af37', background: 'rgba(212,175,55,0.08)' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          background: 'linear-gradient(145deg, #161616, #111)',
          border: '1px solid rgba(212,175,55,0.1)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)',
          },
          position: 'relative',
          overflow: 'hidden',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #161616, #111)',
          border: '1px solid rgba(212,175,55,0.1)',
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
          '&:hover': {
            borderColor: 'rgba(212,175,55,0.3)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 30px rgba(212,175,55,0.08)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: '#f0e6d0',
            borderRadius: 10,
            background: 'rgba(255,255,255,0.03)',
            '& fieldset': { borderColor: 'rgba(212,175,55,0.2)' },
            '&:hover fieldset': { borderColor: 'rgba(212,175,55,0.4)' },
            '&.Mui-focused fieldset': { borderColor: '#d4af37', borderWidth: 1 },
          },
          '& .MuiInputLabel-root': { color: 'rgba(240,230,208,0.45)' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#d4af37' },
          '& .MuiFormHelperText-root': { color: 'rgba(240,230,208,0.35)' },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: '#f0e6d0',
          '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(212,175,55,0.2)' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(212,175,55,0.4)' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#d4af37' },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: 'rgba(240,230,208,0.7)',
          '&:hover': { background: 'rgba(212,175,55,0.08)', color: '#d4af37' },
          '&.Mui-selected': { background: 'rgba(212,175,55,0.12)', color: '#d4af37' },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(6,6,6,0.97)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(212,175,55,0.15)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.6)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%)',
          borderRight: '1px solid rgba(212,175,55,0.12)',
          boxShadow: '4px 0 24px rgba(0,0,0,0.5)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          margin: '2px 0',
          transition: 'all 0.25s ease',
          '&:hover': {
            background: 'rgba(212,175,55,0.08)',
            transform: 'translateX(3px)',
          },
          '&.Mui-selected': {
            background: 'rgba(212,175,55,0.12)',
            borderLeft: '3px solid #d4af37',
            '&:hover': { background: 'rgba(212,175,55,0.15)' },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 50, fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.06em' },
        colorSuccess: { background: 'rgba(0,184,148,0.12)', color: '#00b894', border: '1px solid rgba(0,184,148,0.25)' },
        colorWarning: { background: 'rgba(212,175,55,0.12)', color: '#d4af37', border: '1px solid rgba(212,175,55,0.25)' },
        colorError: { background: 'rgba(255,71,87,0.12)', color: '#ff4757', border: '1px solid rgba(255,71,87,0.25)' },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            background: 'rgba(212,175,55,0.06)',
            color: '#d4af37',
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            borderBottom: '1px solid rgba(212,175,55,0.2)',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': { background: 'rgba(212,175,55,0.04)' },
          '& .MuiTableCell-root': {
            borderBottom: '1px solid rgba(212,175,55,0.06)',
            color: 'rgba(240,230,208,0.75)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(212,175,55,0.12)' },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: { borderRadius: 12 },
        standardError: { background: 'rgba(255,71,87,0.1)', border: '1px solid rgba(255,71,87,0.2)', color: '#ff4757' },
        standardWarning: { background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)', color: '#d4af37' },
        standardSuccess: { background: 'rgba(0,184,148,0.1)', border: '1px solid rgba(0,184,148,0.2)', color: '#00b894' },
        standardInfo: { background: 'rgba(116,185,255,0.1)', border: '1px solid rgba(116,185,255,0.2)', color: '#74b9ff' },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: 'rgba(10,10,10,0.95)',
          border: '1px solid rgba(212,175,55,0.2)',
          color: 'rgba(240,230,208,0.85)',
          borderRadius: 8,
          fontSize: '0.75rem',
        },
        arrow: { color: 'rgba(10,10,10,0.95)' },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontWeight: 600,
          fontSize: '0.75rem',
          color: 'rgba(240,230,208,0.4)',
          '&.Mui-selected': { color: '#d4af37' },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: '#d4af37', height: 2 },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { background: 'rgba(212,175,55,0.1)', borderRadius: 4 },
        bar: { background: 'linear-gradient(90deg, #d4af37, #f0cc55)', borderRadius: 4 },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: { color: '#d4af37' },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: { background: 'rgba(212,175,55,0.06)', '&::after': { background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.05), transparent)' } },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: { '&.Mui-checked': { color: '#d4af37', '& + .MuiSwitch-track': { backgroundColor: 'rgba(212,175,55,0.4)' } } },
        track: { backgroundColor: 'rgba(255,255,255,0.1)' },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.25s ease',
          '&:hover': { background: 'rgba(212,175,55,0.1)', color: '#d4af37' },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: { background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: '#000', fontWeight: 800 },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkLuxuryTheme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/register-brand"
              element={
                <PrivateRoute>
                  <BrandRegistration />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <VendorLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<ProductList />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="orders" element={<div style={{ color: '#f0e6d0', padding: 40, textAlign: 'center', opacity: 0.5 }}>Orders — Coming Soon</div>} />
              <Route path="analytics" element={<div style={{ color: '#f0e6d0', padding: 40, textAlign: 'center', opacity: 0.5 }}>Analytics — Coming Soon</div>} />
              <Route path="store" element={<div style={{ color: '#f0e6d0', padding: 40, textAlign: 'center', opacity: 0.5 }}>Store Settings — Coming Soon</div>} />
            </Route>
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
